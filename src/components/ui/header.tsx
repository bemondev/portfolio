import React from 'react'
import ThemeToggle from '../theme-toggle'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-medium text-foreground">@bemondev</h1>
        <ThemeToggle />
      </nav>
    </header>
  )
}
