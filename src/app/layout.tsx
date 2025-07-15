import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/theme-provider";
import FaviconSwitcher from "@/components/favicon-switch";
import { Lexend_Deca } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // agregá los pesos que necesites
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portfolio @bemondev",
  description: "Portfolio web personal de @bemondev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={lexendDeca.className}>
        <head />
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
