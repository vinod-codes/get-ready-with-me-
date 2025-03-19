"use client"

// This is a simple client-side auth utility for demo purposes
// In a real app, you would use a proper auth solution like NextAuth.js

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false

  try {
    const user = localStorage.getItem("user")
    if (!user) return false

    const userData = JSON.parse(user)
    return userData.isLoggedIn === true
  } catch (error) {
    return false
  }
}

export function logout(): void {
  if (typeof window === "undefined") return

  localStorage.removeItem("user")
  window.location.href = "/auth/login"
}

export function getUserData(): any {
  if (typeof window === "undefined") return null

  try {
    const user = localStorage.getItem("user")
    if (!user) return null

    return JSON.parse(user)
  } catch (error) {
    return null
  }
}

export function getUserPreferences(): any {
  if (typeof window === "undefined") return null

  try {
    const prefs = localStorage.getItem("userPreferences")
    if (!prefs) return null

    return JSON.parse(prefs)
  } catch (error) {
    return null
  }
}

