import type { Metadata } from "next"
import type React from "react"
import ClientLayout from "./ClientLayout"

const siteUrl = "https://sufyankamil.com"
const title = "Sufyan Kamil | Senior Software Engineer | Mobile Engineer"
const description =
  "Portfolio of Sufyan Kamil, a Dubai-based Senior Software Engineer with 6+ years building mobile and web apps across AI, Fintech & Banking with Flutter, React Native and Next.js."

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
