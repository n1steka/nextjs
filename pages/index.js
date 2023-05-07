import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ListItem from '@/components/List-item'
import GridItem from '@/components/Grid-item'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <ListItem />
      <GridItem />
    </>
  )
}
