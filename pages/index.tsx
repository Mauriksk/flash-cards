import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NavBar } from '@/components/ui/navBar/NavBar'
import { MainLayOut } from '@/components/layouts/MainLayOut'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayOut />
    </>
  )
}
