import type { Metadata } from "next"
import type React from "react"
import ClientLayout from "./ClientLayout"

const siteUrl = "https://sufyankamil.com"
const title = "Sufyan Kamil | Software Engineer | UI/UX & Front-End"
const description =
  "Portfolio of Sufyan Kamil, a Dubai-based Software Engineer focused on UI/UX and front-end. 6 years designing in Figma and building accessible, responsive interfaces in Flutter and React for banking, fintech and AI products."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sufyan Kamil",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sufyan Kamil",
  },
}

export const viewport = {
  themeColor: "#06b6d4",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
