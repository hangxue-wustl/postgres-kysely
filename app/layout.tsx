import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  metadataBase: new URL('https://postgres-kysely-q1by-abcwtjfjg-hxue43s-projects.vercel.app/'),
  title: 'CS 6440 project based on Vercel Postgres - Kysely template',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Kysely as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
