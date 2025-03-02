import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Motors Elèctrics - Biel Costa",
  description: "Feta per Biel Costa Samsó",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <body className={inter.className}>
        <nav className="bg-primary text-primary-foreground p-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold">Motors Elèctrics</h2>
          </div>
        </nav>
        <main className="container mx-auto px-4 max-w-7xl py-8">{children}</main>
      </body>
    </html>
  )
}

