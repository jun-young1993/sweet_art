import './globals.css'
import { webDescription, webTitle } from '@/lib/config'
export const metadata = {
  title: webTitle,
  description: webDescription,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
