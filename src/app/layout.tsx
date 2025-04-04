import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { AuthProvider } from "@/lib/firebase"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Todo App with Firebase Data Connect",
  description: "A todo application using Next.js, React, and Firebase Data Connect",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
          {children}
          <Toaster position="top-right" richColors />
      </AuthProvider>
      </body>
    </html>
  )
}

