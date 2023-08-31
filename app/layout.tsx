import SideBar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { ReactNode, FC } from 'react'
const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout:FC<RootLayoutProps> = ({children}) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <SideBar>
           {children}
        </SideBar>
      </body>
    </html>
  )
}

export default RootLayout;