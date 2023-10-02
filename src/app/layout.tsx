import { ThemeProvider } from '@/components/theme/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Donace',
  description: 'The Donace online event organization and ticketing project is a multifunctional platform that allows users to find and book tickets for online and offline events.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background relative`}>
        <div className='blur-xl absolute top-0 left-0 bottom-0 right-0 bg-center bg-no-repeat bg-cover bg-image z-auto'>
        </div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
