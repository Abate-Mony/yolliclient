import Link from "next/link"
import { CircularText } from "./Icons"
import { motion } from 'framer-motion'
const MotionLink = motion(Link)
const MotionCircle = motion(CircularText)
const HireMe = () => {
    return (
        <motion.div
            animate={{
                y: [40, 10]
            }}
            transition={{
                duration: 1,
                repeat: Infinity,


            }}

            className="fixed right-4  bottom-4 grid place-content-center overflow-hidden"
        >
            <div


                className="w-36 h-36 lg:w-40 lg:h-40   grid place-content-center relative">

                <motion.div className="w-full border-10 h-full"
                    animate={{
                        rotate: ["0deg", "360deg"]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                    }}

                >
                    <CircularText className="fill-dark" />
                </motion.div>
                <MotionLink

                    href="mailto:abcd@gmail.com" className="flex
                items-center justify-center
                left-1/2 top-1/2 -translate-x-1/2 absolute
                -translate-y-1/2
                text-white
                rounded-full
                w-20 h-20 bg-dark 
                text-sm lg:text-lg
                font-semibold
                " >Hire Me </MotionLink>
            </div>

        </motion.div>
    )
}

export default HireMe