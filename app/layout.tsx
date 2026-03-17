import type { Metadata } from "next"
import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Sufyan Kamil | Flutter Developer Portfolio",
  description: "Professional portfolio of Sufyan Kamil, showcasing Flutter development skills and projects",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sufyan Kamil",
  },
  generator: 'v0.dev'
}

export const viewport = {
  themeColor: "#06b6d4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'

