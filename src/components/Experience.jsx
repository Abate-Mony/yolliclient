import React from 'react'
const Details = ({ position, company, companylink, address, time, work, }) => {
    return (
        <li>
            <div>
                <h3 className="font-semibold text-lg mb-2">{position} <a href={companylink || "/"}

                    target="_blank"
                    className="text-primary capitalize  mb-1 leading-none mb-2"
                >{company}</a></h3>
                <span
                    className="capitalize text-medium text-dark/75"

                > {time} | {address}</span>
            </div>
            <p className="mb-2 font-medium w-full leading-7">{work}</p>
        </li>

    )
}


const Experience = () => {
    return (
        <div className='z-10 relative
        max-w-[75%] bg-light text-dark 
        
        px-8 
        md:px-32 '>
            <div className="absolute top-0 w-1 bg-dark rounded-sm h-full left-4 md:left-20" />
            <h2
                className="font-bold mb-4 uppercase text-4xl bg-light w-full text-center md:text-starrt"
            >
                experience
            </h2>

            <ul className="space-y-4 ">
                {


                    [1, 2, 3, 4].map((ar, index) => (
                        <Details
                            key={index}
                            position="Student " company="datagirl technology "
                            time="2022 - 2023" address="Buea ,Cameroon opposite hotel las vegas molyko "
                            work="learning to build full stack application for the web and the connect it to server for authentication" />
                    )
                    )

                }
            </ul>
        </div>
    )
}

export default Experience