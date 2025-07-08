import React from 'react'
import ThemeToggle from '../theme-toggle'
import Link from 'next/link'


export default function Header() {
  return (
    <header className="bg-background/75 p-4 text-white">
      <nav className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold text-foreground">Portfolio @bemondev</h1>
        <ThemeToggle />
      </nav>
    </header>
  )
}
