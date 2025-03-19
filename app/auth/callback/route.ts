import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  
  if (code) {
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )
    
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Check if user has profile
      const { data: sessionData } = await supabase.auth.getSession()
      if (sessionData.session?.user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', sessionData.session.user.id)
          .single()
        
        // If no profile, create one
        if (!profileData) {
          await supabase.from('profiles').insert({
            user_id: sessionData.session.user.id,
            bio: null,
            avatar_url: null,
          })
          return NextResponse.redirect(new URL('/onboarding', request.url))
        }
        
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    }
  }

  // Return to login if something went wrong
  return NextResponse.redirect(new URL('/auth/login', request.url))
} 