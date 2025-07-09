import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import { ThemeProvider } from "@/components/theme-provider";
import FaviconSwitcher from "@/components/favicon-switch";

export const metadata: Metadata = {
  title: "Portfolio web",
  description: "Portfolio web personal de @bemondev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <FaviconSwitcher />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
