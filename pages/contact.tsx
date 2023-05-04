import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { inter } from "./index";
import ContactForm from "@/components/ContactForm";



export default function service() {
  return (
    <>
    <Head>
      <link rel="icon" href="logo192.png" /> 
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="%PUBLIC_URL%/"/>
      <meta property="og:title" content="Mayra Femia Hetrick Portfolio"/>
      <meta property="og:description" content="As a specialist in investment portfolios, Mayra Femia Hetrick (CRD#2022887) employs consistent and intelligent trading strategies to help build your investments. Learn more about her expertise in trading strategies for building wealth."/>
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/exodus-xperts.appspot.com/o/mayra2.jpg?alt=media&token=fc5eee5a-bb76-44b4-832f-ac20f42a2237"/>
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Mayra Femia Hetrick Portfolio" />


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://firebasestorage.googleapis.com/v0/b/exodus-xperts.appspot.com/o/mayra2.jpg?alt=media&token=fc5eee5a-bb76-44b4-832f-ac20f42a2237"/>
      <meta property="twitter:title" content="Mayra Femia Hetrick Portfolio"/>
      <meta property="twitter:description" content="As a specialist in investment portfolios, Mayra Femia Hetrick (CRD#2022887) employs consistent and intelligent trading strategies to help build your investments. Learn more about her expertise in trading strategies for building wealth."/>
      <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/exodus-xperts.appspot.com/o/mayra2.jpg?alt=media&token=fc5eee5a-bb76-44b4-832f-ac20f42a2237"/>
      <meta name="google-site-verification" content="x-NYq0j3JG3agkRALdEp7cnNhiCmEu2PS7koVm3dYWg" />
      <meta name="description" content="As a specialist in investment portfolios, Mayra Femia Hetrick (CRD#2022887) employs consistent and intelligent trading strategies to help build your investments. Learn more about her expertise in trading strategies for building wealth." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Mayra Femia Hetrick Portfolio Contact</title>
    </Head>

    <main className={`${styles.main} ${inter.className}`}>
    <Nav />
    <ContactForm />
    <Footer />
    </main>
    </>
  )
}
