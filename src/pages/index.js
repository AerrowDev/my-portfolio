import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Imagenav from '/src/Components/logo-nav'
import Aboutsection from '@/Components/about-section'
import Aboutsection2 from '@/Components/about-section2'
// import Header from '@/Components/nav'
import Footer from '@/Components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   
  
        <main>
      <Aboutsection/>
      
        </main>
    </>
  )
}
