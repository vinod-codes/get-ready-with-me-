import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <Logo size="large" className="text-primary mb-6" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Oops! Looks like you're not ready for this page yet. It might be hiding or still in development.
      </p>
      <div className="space-y-4">
        <p className="font-medium">Ready to get back on track?</p>
        <Button asChild>
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}

