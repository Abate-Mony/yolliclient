import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profileimg from '../../public/images/profile/developer-pic-1.png'
import Skills from '@/components/Skills'
import {
    motion, useMotionValue, useSpring
    , useInView
} from 'framer-motion'
import Experience from '@/components/Experience'
const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: 3000,

    })
    const isInView = useInView(ref, {
        once: false,
        amount:0.8
    });
    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])
    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
            console.log("latest value", latest)
        })
        return () => {
        }
    }, [springValue, value])

    return (
        <span ref={ref}>

        </span>
    )
}
const About = () => {
    return (
        <>
            <Head>
                <title>
                    Yoland | About Page
                </title>
                <meta name='descriptions' content='yoland about poage here ' />
            </Head>
            <main className='flex w-full z-[20] flex-col items-center bg-light relative mb-[20rem] md:mb-0 justify-center px-4 lg:px-0'>
                <Layout
                    className="!pt-10 !pb-0   md:pb-32 !lg:px-28"
                >
                    <AnimatedText text={"Passion Fuels Purpose!"}
                        className='!text-4xl md:!text-5xl !mb-6  lg:!text-7xl md:text-left ' />
                    <div
                        className='md:grid grid-cols-8 gap-16
                        items-center
                        bg-light'
                    >

                        <div className="col-span-3 relative bg-light
                        flex flex-col items-start justify-start">

                            <div className='group mb-6'>
                                <h2 className="mb- text-lg font-bold uppercase text-dark/75">Biography </h2>
                                <div className='group-hover:w-32 ease w-20 duration-700 h-[2px] bg-slate-400/40 ' />
                            </div>


                            <div
                                className='flex items-start 
                            gap-x-2
                            '
                            >

                                <span className="icons
                            
                            sticky top-20
                            w-10 block flex-none h-10 bg-slate-500 rounded-full">
                                </span>
                                <p
                                    className='my-4 text-base font-medium mb-4
                        bg-gradient-to-r from-black to-slate-400 bg-clip-text
                        text-transparent
                        tracking-tight
                        px-2 md:px-0
                        
                        '
                                >
                                    Hi, Im <span className="underline mx-3 text-red-500 "> Ramato Yoland Bintu</span> , a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                    and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                    new and innovative ways to bring my clients visions to life.

                                </p>
                            </div>
                            <div
                                className='flex items-start 
                            gap-x-2
                            '
                            >

                                <span className="icons
                            
                            sticky top-20
                            w-10 block flex-none h-10 bg-slate-500 rounded-full">
                                </span>
                                <p
                                    className='my-4 text-base font-medium mb-4
                        bg-gradient-to-r from-black to-slate-400 bg-clip-text
                        text-transparent
                        tracking-tight
                        px-2 md:px-0
                        
                        '
                                >


                                    I believe that design is about more than just making things look pretty  its about solving problems and
                                    creating intuitive, enjoyable experiences for users.

                                </p>
                            </div>
                            <div
                                className='flex items-start 
                            gap-x-2
                            '
                            >

                                <span className="icons
                            
                            sticky top-20
                            w-10 block flex-none h-10 bg-slate-500 rounded-full">
                                </span>
                                <p
                                    className='my-4 text-base font-medium mb-4
                        bg-gradient-to-r from-black to-slate-400 bg-clip-text
                        text-transparent
                        tracking-tight
                        px-2 md:px-0
                        
                        '
                                >


                                    Whether Im working on a website, mobile app, or
                                    other digital product, I bring my commitment to design excellence and user-centered thinking to
                                    every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.

                                </p>
                            </div>


                        </div>
                        <div
                            className='hidden md:grid
                            bottom-0 
                            w-full 
                            left-0
                              col-span-3 gap-16
                            h-max
                             border-solid
                             border-dark bg-light  shadow-sm
                            relative
                            border-2
                            z-10
                            group
                            '

                        >
                            <div className='w-[calc(100%+0.5rem)] -right-2
                        rounded-xl
                        rounded-r-lg absolute h-[calc(100%+0.5rem)] 
                        group-hover:bg-dark/75
                        transition-colors duration-500 ease
                        group-hover:-right-[0.7rem]
                        group-hover:transition-[right]
                        
                        bg-dark top-0 -z-10' />
                            <Image src={profileimg} alt='user' className='w-full
                group-hover:grayscale
                transition-all duration-300
                h-auto bg-white' />
                        </div>
                        <div className="col-span-2 hidden md:flex
                         flex-col items-end justify-between space-y-10
                        ">
                            <div className='text-end space-y-2'>
                                <span
                                    className='text-4xl md:text-5xl  lg:text-7xl font-extrabold
                                [text-shadow:_0_1px_0_var(--tw-shadow-color)] drop-shadow-2xl shadow-orange-500'

                                >
                                    <AnimatedNumber value={50} />  <sup className='inline-block text-green-300'>+</sup>
                                </span>
                                <h2 className='text-lg italic '>Satifies Clients </h2>
                            </div>
                            <div className='text-end space-y-2'>
                                <span
                                    className='text-4xl md:text-5xl  lg:text-7xl font-extrabold
                                [text-shadow:_0_1px_0_var(--tw-shadow-color)] drop-shadow-2xl shadow-orange-500'

                                >
                                    <AnimatedNumber value={40} /><sup className='inline-block text-green-400'>+</sup>
                                </span>
                                <h2 className='text-lg italic '>Projects Completed </h2>
                            </div>
                            <div className='text-end space-y-2'>
                                <span
                                    className='text-4xl md:text-5xl  lg:text-7xl font-extrabold
                                [text-shadow:_0_1px_0_var(--tw-shadow-color)] drop-shadow-2xl shadow-orange-500'

                                >
                                    <AnimatedNumber value={3} /><sup className='inline-block text-green-600'>+</sup>
                                </span>
                                <h2 className='text-lg italic '>Years Of Experience</h2>
                            </div>
                        </div>
                    </div>
                </Layout>

            </main>
            <div
                className='fixed
                            bottom-0 min-h-[30rem]
                            w-full 
                            left-0
                            md:static md:hidden col-span-5 gap-16
                            -z-1
                            '

            >

                <Image src={profileimg} alt='user' className='w-full h-auto' />

            </div>
            <div className="col-span-2 md:hidden grid grid-cols-3 items-end border- justify-center bg-light relative z-10 py-10 px-4
                         flex-col  space-y-10
                        ">
                <div className='flex flex-col justify-center items-center text-center'>
                    <span
                        className='text-4xl md:text-5xl  lg:text-7xl font-extrabold
                                [text-shadow:_0_1px_0_var(--tw-shadow-color)]
                                mb-0
                                leading-none
                                drop-shadow-2xl shadow-orange-500'

                    >
                        <AnimatedNumber value={50} /><sup className='inline-block text-green-300'>+</sup>
                    </span>
                    <h2 className='text-sm italic leading-tight'>Satifies
                        <br />
                        Clients </h2>
                </div>
                <div className='  flex flex-col justify-center items-center text-center'>
                    <span
                        className='text-4xl md:text-5xl  lg:text-7xl font-extrabold
                                [text-shadow:_0_1px_0_var(--tw-shadow-color)] drop-shadow-2xl shadow-orange-500'

                    >
                        <AnimatedNumber value={40} /><sup className='inline-block text-green-400'>+</sup>
                    </span>
                    <h2 className='text-sm italic '>Projects Completed </h2>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <span
                        className='text-4xl md:text-5xl  lg:text-7xl font-extrabold
                                [text-shadow:_0_1px_0_var(--tw-shadow-color)] drop-shadow-2xl shadow-orange-500'
                    >
                        <AnimatedNumber value={3} /><sup className='inline-block text-green-600'>+</sup>
                    </span>
                    <h2 className='text-sm italic leading-none '>Years Of Experience</h2>
                </div>
            </div>
            {/* <Skills/> */}
            <Experience></Experience>
            
          
  
        </>
    )
}

export default About