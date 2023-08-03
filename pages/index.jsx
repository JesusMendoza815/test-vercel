import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Yali</title>
        <meta name='description' content='Adopción de mascotas' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Navbar />
      <Landing />
      <Footer />
      
    </>
  )
}