import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios'

const Testimonials = ({ test }) => {
    const _show = {
        hidden: {
            opacity: 0,
            y: 20,
        },

        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }
    useEffect(() => {






    }, [])

    return (


        <section class="text-neutral-700= px-4  dark:text-neutral-300 text-dark container mx-auto mb-10" id="testimonials">
            <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <h3 class="mb-6 text-3xl text-dark font-bold">Testimonials</h3>
                <p class="mb-6 pb-2 md:mb-12 md:pb-0 text-dark">
                    what people say about me gives me more reason to build and satisfied my customers in a way be for me
                </p>
            </div>

            <div class="grid gap-6 text-center md:grid-cols-3">
                {
                    test.reverse()?.map((tst, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={_show}
                                initial="hidden"
                                whileInView="show"


                            >
                                <div
                                    class="block rounded-lg testimonial bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                    <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                                    {/* <div
                                        class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="testimonials" />
                                    </div> */}
                                    <div
                                        class="mx-auto
                                        -mt-12 h-24
                                        w-24 overflow-hidden rounded-full 
                                        border-white bg-white
                                        dark:border-neutral-800 dark:bg-neutral-800/95
                                        flex items-center justify-center border-4 ring-2 ring-neutral-400
                                        ">

                                        <h1 className="text-3xl">{tst?.name[0] + tst?.name[1]}</h1>
                                    </div>
                                    <div class="p-6">
                                        <h4 class="mb-4 text-2xl font-semibold">{tst?.name || "n/a"}</h4>
                                        <hr />
                                        <p class="mt-4 line-clamp-3	">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                class="inline-block h-7 w-7 pr-2"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                            </svg>
                                            {tst?.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )

                    })
                }

            </div>
        </section>
    )

}

export default Testimonials