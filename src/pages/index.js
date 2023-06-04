import Layout from '@/components/Layout'
import PopUp from '@/components/PopUp'
import Head from 'next/head'
import profilepic from '../../public/images/profile/developer-pic-1.png'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Marquee from "react-fast-marquee";
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import { AnimatePresence } from 'framer-motion'
import Testimonials from '../components/Testimmonials'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [isModal, setIsModal] = useState(false)
  const [test, setTest] = useState([])
  const [refresh, setRefresh] = useState(0)
  const [text, setText] = useState("Hi ,I am Ramatou Yoland ,")
  async function getData() {
    try {
      const res = await axios.get("https://yolliserver.vercel.app/testimonials", {})
      setTest(res?.data?.testimonials);
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {

    getData()





  }, [refresh])
  const [i, setI] = useState(0);
  useEffect(() => {
    const _text = "Hi ,I am Ramatou Yoland ,I am a Pro  Web developer/full stackdeveloper"
    var i = 0
    const timer = setInterval(() => {
     const temp= _text.slice(0, Math.abs(i))
     setText(temp)
      i > _text.length - 1 ? i *= -1 : i += 1
    }, 200)
    return () => {
      clearInterval(timer)
    }
  }, [])
  useEffect(() => {

    const timer = setTimeout(() => {
      setIsModal(true);
    }, 3000);
    return () => {
      clearTimeout(timer)
    }

  }, [])
  return (
    <>
      <Head>
        <title>Yoland | Home</title>
        <meta name="description" content="my portfolio" />
      </Head>
      <AnimatePresence>
        {
          isModal && <PopUp setRefresh={setRefresh} closeModal={() => setIsModal(false)} />

        }
      </AnimatePresence>
      <main className="flex items-center text-dark  w-full min-h-screen ">
        <Layout className={"!pt-0"}>
          <div className='md:flex w-full items-center justify-between  '>
            <div className='flex-1'>
              <Image src={profilepic} alt="user" className="w-full h-auto" />
            </div>
            <div className='flex-1 flex flex-col self-center '>
              
              {/* {text} */}
              <h1 className=" break-words px-4 md:px-6 lg:px-10
            inline-block w-full text-dark font-bold capitalize !text-3xl md:!text-4xl lg:!text-6xl md:text-left
            ">{text} </h1>
            <AnimatedText className='!text-3xl md:!text-4xl lg:!text-6xl md:text-left
            
              
            '
              text={"Turning Vision"}
            />
              <p
                className='my-4 text-base font-medium mb-4
                bg-gradient-to-r from-black to-slate-400 bg-clip-text
                text-transparent
                tracking-tight
                px-8 md:px-0'
              >
                As a skilled full-stac developer , I am dedicated to turning ideas inot innovative web application Explore my
                latest projects abd articles showcasting my experties in React.js ,nodejs ,web development
              </p>
              <div className='
              mb-4
              w-full
              flex items-center justify-center md:justify-start self-start gap-4'>
                <Link
                  className="flex items-center bg-dark text-white min-w-[8rem] 
              justify-center
              py-2
              ease 
              duration-700
              border-2 
              border-dark
              before:hover:bg-light
              hover:text-dark
              font-bold
              transition-[height]
              
              relative
              before:content-['Resume']
              before:overflow-hidden
              before:text-center
              before:text-gray-600
              before:absolute
              before:left-0
              before:top-0
              before:grid
              before:place-items-center
              before:h-0
              before:w-full
              before:z-[1]
              hover:before:h-full
              before:hover:duration-700
              before:duration-75
              before:transition-[height]
              
                "
                  href="./dummy.pdf"
                  target='_blank'
                >
                  Resume
                </Link>
                <Link href="contact"
                  className="
                flex items-center bg-light text-dark min-w-[8rem] 
              justify-center
              py-2
              ease 
              duration-700
              before:hover:bg-slate-500
              hover:text-white
              font-bold
              transition-[height]
              
              relative
              
              before:content-['Contact']
              border-b    
              
              border-dark
              before:overflow-hidden
              before:text-center
              before:text-white
              before:absolute
              before:left-0
              before:top-auto
              before:bottom-0
              before:grid
              before:place-items-center
              before:h-0
              before:w-full
              before:z-[1]
              hover:before:h-full
              before:hover:duration-700
              before:duration-75
              before:transition-[height]
                "

                >
                  Contact Me
                </Link>
              </div>

            </div>
          </div>
          {/* testimonails */}
          <Testimonials test={test} />
          <Marquee
            className='mb-4'
          >
            I can be a React component, multiple React components, or just some text.
          </Marquee>
        </Layout>
        <HireMe />
        <div
          className='absolute right-0 bottom-8 inline-block w-24 '
        >
          <Image src={lightBulb} alt='yoland' />
        </div>
      </main>
    </>
  )
}
