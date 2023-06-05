
import { motion } from "framer-motion"
import { useState } from "react"
import axios from 'axios'

const PopUp = ({ closeModal,setRefresh}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("https://yolliserver.vercel.app/testimonials", {
                name,
                description

            })
            setRefresh(Math.random())
            closeModal()
        }catch(err) {
            console.log(err)
            alert("some error occurs")
        }
    }
    return (

        <motion.div


            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            aria-hidden="true" className=" z-[202] 
        bg-dark/50 h-full flex
        overflow-y-auto overflow-x-hidden fixed top-0 
        right-0 left-0  justify-center items-center w-full
        md:inset-0">


            <div
                onClick={e => e.stopPropagation()}



                className="relative p-4 w-[25rem]  max-w-[calc(100vw-2rem)] overflow-y-auto    min-h-[20rem] max-h-[calc(100vh-2.5rem)]">
                <div className="relative p-4  rounded-lg shadow bg-slate-900 ">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Add New Testimonail
                        </h3>
                        <button
                            onClick={closeModal}

                            type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="py-4 px-2">
                        <div className="grid gap-4 mb-4 ">
                            <div>
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Your Name</label>
                                <input required onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name"  />
                            </div>

                            <div className="">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="4"

                                    required onChange={e => setDescription(e.target.value)}
                                    className="block p-2.5 w-full text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write write your review here "></textarea>
                            </div>
                        </div>

                        <button type="submit" class="text-white
                        block 
                        mx-auto
                        w-[10rem]
                        bg-gradient-to-r
                        from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                        mb-4 ">add new review</button>

                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default PopUp