import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProviders'
import UserProvider from '@/providers/UserProvider'
import ModalProviders from '@/providers/ModalProviders'
import ToasterProvider from '@/providers/ToasterProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
              <ModalProviders />
                  <Sidebar>
                    {children}
                  </Sidebar>
          </UserProvider>
        </SupabaseProvider></body>
    </html>
  )
}
