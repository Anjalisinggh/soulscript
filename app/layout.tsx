import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

export const metadata: Metadata = {
   title: 'Soul Script',
  description: 'Whispers from my heart to yours — where my love lives in every word 💌',
  icons: {
    icon:'/icon.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable} ${playfairDisplay.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
