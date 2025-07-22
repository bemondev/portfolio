import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/theme-provider";
import FaviconSwitcher from "@/components/ui/favicon-switch";
import { Lexend_Deca } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "@bemondev | Portfolio",
  description: "Personal portfolio of Bernardo Montaña. Showcasing my projects, skills and development style",
  openGraph: {
    title: "@bemondev | Portfolio", 
    description: "Personal portfolio of Bernardo Montaña. Showcasing my projects, skills and development style",
    url: "https://www.bemon.dev", 
    siteName: "@bemondev | Portfolio",
    images: [
      {
        url: "https://www.bemon.dev/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview de Bemondev Portfolio", 
      },
    ],
    locale: "en",
    type: "website", 
  },
  twitter: {
    card: "summary_large_image", 
    creator: "@bemondev",
    title: "@bemondev | Portfolio",
    description: "Personal portfolio of Bernardo Montaña. Showcasing my projects, skills and development style",
    images: ["https://www.bemon.dev/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={lexendDeca.className}>
        <head/>
        <body>
          <FaviconSwitcher />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
