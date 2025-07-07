import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Soul Script',
  description: 'Whispers from my heart to yours — where my love lives in every word 💌',
  icons: {
    icon:'/icon.jpg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
