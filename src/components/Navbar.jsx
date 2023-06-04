import Link from "next/link"
import { Logo } from "."
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md'
import { useRouter } from "next/router"
import { motion, useScroll } from "framer-motion"
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon, } from './Icons'
import { useState } from 'react'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { scrollYProgress } = useScroll();
    const CustomLinks = ({ href, className, title }) => {
        const router = useRouter();
        return (
            <li className={`${className} group relative`}

                onClick={() => {
                    if (toggle) {

                        setToggle(false)
                    }
                }}
            >
                <Link href={href} className="">{title}</Link>
                <span className={`h-[2px]
                ${router.asPath === href ? "w-full" : "w-0"}
                color_change
                bg-dark
                ease
                opacity-60
                inline-block duration-500 transition-all
                group-hover:opacity-100
                group-hover:w-full 
                absolute  left-1/2 -translate-x-1/2 -bottom-0.5`}></span>
            </li>
        )
    }
    return (
        <header className="sticky top-0 w-full z-[200]
        shadow
         bg-light">
            <nav className="container   mx-auto 
            relative
            py-2 md:py-8 font-medium md:flex items-center justify-between">
                <div className=" min-h-12 border-dark flex justify-between
                pl-4 items-center
                containe mx-auto md:hidden left-0 top-0  relative">
                    <Link href="/" className="text-xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Yolli Portfoli</Link>
                    <span className="block left-4 absolute top-auto bottom-2 bg-gray-400 h-[2px] w-10"> </span>
                    <span

                        className="w-12 h-12 grid place-items-center rounded-full mr-4 bg-slate-300 "
                        onClick={() => setToggle(!toggle)}
                    >
                        {

                            !toggle ? (

                                <MdOutlineMenu size={25} />
                            ) : (


                                <MdOutlineClose size={25} />)
                        }

                    </span>
                </div>

                <ul className="hidden md:flex gap-4 px-4 items-center">
                    <CustomLinks href="/" title="Home">Home</CustomLinks>
                    <CustomLinks href="/#testimonials" title="Testimonials">Home</CustomLinks>
                    <CustomLinks href="/about" title="About">About</CustomLinks>
                    <CustomLinks href="/projects" title="Projects">Projects</CustomLinks>
                    <CustomLinks href="/contact" title="Contact-Me">Articles</CustomLinks>
                </ul>
                <ul className="hidden md:flex gap-4  px-4 items-center justify-center flex-wrap ">
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="https://twitter.com" target="_blank">
                            <TwitterIcon />
                        </a>
                    </motion.li>
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="https://github.com/ramyolli" target="_blank">
                            <GithubIcon />
                        </a>
                    </motion.li>
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="" target="_blank">
                            <LinkedInIcon />
                        </a>
                    </motion.li>
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="/" target="_blank">
                            <PinterestIcon />
                        </a>
                    </motion.li>
                    {/* <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""
                            whileHover={{
                                y: -9
                                , x: 90
                            }}

                            href="" target="_blank">
                            <DribbbleIcon />

                        </a>
                    </motion.li> */}

                </ul>
                <div className="absolute  hidden md:block left-1/2 top-2 -translate-x-1/2">

                    <Logo></Logo>

                </div>
                <motion.div
                    className="progress-bar
        bg-orange-400
        left-0
        h-4
        absolute top-auto bottom-0 "
                    style={{ scaleX: scrollYProgress }}
                />
            </nav>
            <nav className={`container 
            
            ${toggle ? "visible opacity-100" : "invisible opacity-0 "}
            transition-all duration-700
            mx-auto pt-6
            py-4 font-medium flex flex-col bg-dark fixed 
            w-[min(300px,calc(100vw-3rem))]
            h-[min(300px,calc(100vh-3rem))]
            -translate-y-1/2
            left-1/2 top-1/2 -translate-x-1/2
            shadow-lg shadow-blue-300
            rounded-lg md:hidden items-center justify-between
            py-22
            text-white`}>
                <span
                    className="w-8 h-8 grid place-items-center absolute -right-8 shadow ring-[2px] ring-red-400
                -top-8 rounded-full hover:text-white hover:bg-orange-600 transition-colors duration-700   text-red-500 "
                    onClick={() => setToggle(!toggle)}

                >
                    <MdOutlineClose size={25} />

                </span>
                <ul className="flex flex-col gap-y-2 gap-4 px-4 items-center">
                    <CustomLinks href="/" title="Home">Home</CustomLinks>
                    <CustomLinks href="/#testimonials" title="Testimonials">Home</CustomLinks>

                    <CustomLinks href="/about" title="About">About</CustomLinks>
                    <CustomLinks href="/projects" title="Projects">Projects</CustomLinks>
                    <CustomLinks href="/contact" title="Contact-Me">Articles</CustomLinks>
                </ul>
                <ul className="flex gap-4 px-4 mb-6 items-center justify-center flex-wrap ">
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="https://twitter.com" target="_blank">
                            <TwitterIcon />
                        </a>
                    </motion.li>
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="" target="_blank">
                            <GithubIcon />
                        </a>
                    </motion.li>
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="" target="_blank">
                            <LinkedInIcon />
                        </a>
                    </motion.li>
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""


                            href="" target="_blank">
                            <PinterestIcon />
                        </a>
                    </motion.li>
                    <motion.li
                        className="w-6"
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            y: [-4, 0, -2]
                            ,

                        }}
                    >

                        <a
                            className=""
                            whileHover={{
                                y: -9
                                , x: 90
                            }}

                            href="" target="_blank">
                            <DribbbleIcon />

                        </a>
                    </motion.li>

                </ul>
                <div className="absolute left-1/2 top-2 -translate-x-1/2">

                    {/* <Logo></Logo> */}

                </div>
                <motion.div
                    className="progress-bar
        bg-orange-400
        left-0
        h-4
        absolute top-auto bottom-0 "
                    style={{ scaleX: scrollYProgress }}
                />
            </nav>

        </header>
    )
}

export default Navbar