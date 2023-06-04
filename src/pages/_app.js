import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"

})
import { Navbar } from '@/components'
import Head from 'next/head'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Navbar />
      <main className={`${montserrat.variable} font-mont bg-light 
      min-h-screenw-full mx-auto`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
