"use client"
import Image from 'next/image';
import React from 'react'


function Card({name,genre,language,duration,thumbnail,date,rating,id,link}) {

    return (
        <a href={`${link}`}>
        <div className="main   lg:w-64 lg:h-[30rem] w-40 h-[19rem] hover:scale-100 bg-slate-400 dark:bg-opacity-10 bg-opacity-20 flex flex-col justify-between  relative" >

            <div className="image  w-full lg:h-5/6 h-4/6 relative">
                <Image
                src={thumbnail}
                alt={name || ""}
                fill
                className='object-contain'
                unoptimized
                />
            </div>

            <div className='info  p-2 flex flex-col justify-center items-center mb-4 '>
                <h1 className='dark:text-white font-bold w-full '>{name}</h1>

                <div className='w-full justify-between flex py-2 dark:text-white'>
                    <h1 className=' dark:text-white font-allerta'> <span className='text-[#fa6900]'> ★  </span>{rating}  </h1>
                    <h2 className='font-allereta text-sm bg-slate-900 px-4  text-white rounded-lg'>{date}</h2>
                </div>
                <div className='text-white flex justify-start font-inter text-sm  absolute bottom-1 left-2'>{language}</div>

            </div>
        </div>
        </a>
    )
}

export default Card