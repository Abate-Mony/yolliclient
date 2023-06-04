import Link from "next/link"
import { motion } from "framer-motion";
const Logo = ({ }) => {
    const MotionLink = motion(Link)
    return (
        <div className="flex item-center justify-center mt-2">
            <MotionLink

                href={"/"} className="h-16 w-16 bg-dark text-light flex justify-center 
            items-center rounded-full shadow hover:ring-8 hover:ring-slate-300 
            text-xl md:text-2xl font-black
            ring-4 ring-blue-100 transition-all duration-700"
                
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)",
                        "rgba(253,29,29,1)",
                        "rgba(252,176,69,1)",
                        "rgba(131,58,180,1)",
                        "#121212"],
                        scale: 1.2,
                    transition: {
                        repeat: Infinity,
                        duration: 0.4
                    }
                }}


            >
                R_Y
            </MotionLink>
        </div>
    )
}

export default Logo