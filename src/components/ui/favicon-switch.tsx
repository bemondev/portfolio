'use client'

import { useEffect } from "react"

export default function FaviconSwitcher() {
  useEffect(() => {
    const updateFavicon = (isDark: boolean) => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;

      if (!link) {
        link = document.createElement("link")
        link.rel = "icon"
        link.type = "image/svg+xml"
        document.head.appendChild(link)
      }

      link.href = isDark ? "/favicon-light.svg" : "/favicon-dark.svg"
    }

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
    updateFavicon(matchMedia.matches)

    const handler = (e: MediaQueryListEvent) => updateFavicon(e.matches)
    matchMedia.addEventListener("change", handler)

    return () => matchMedia.removeEventListener("change", handler)
  }, [])

  return null
}