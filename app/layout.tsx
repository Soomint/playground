import './globals.css'
import type { Metadata } from 'next'
import styles from './layout.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'playground',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <main className={styles.main}>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </html>
  )
}
