'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "./button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => { setTheme(resolvedTheme === 'light' ? 'dark' : 'light') }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4' />
      ) : (
        <MoonIcon className='size-4 text-foreground' />)}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}