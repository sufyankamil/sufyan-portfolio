"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Add scroll-padding-top to ensure sections are visible below fixed header */}
        <style jsx global>{`
          html {
            scroll-padding-top: 6rem; /* Adjust this value based on your navbar height */
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}

