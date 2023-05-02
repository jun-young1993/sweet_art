import Image from 'next/image'
import { Inter } from 'next/font/google'
import SweetPage from "@/components/SweetPage";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <SweetPage />
  )
}
