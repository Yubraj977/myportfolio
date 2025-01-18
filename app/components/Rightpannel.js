import React from 'react'
import Link from 'next/link';
import { ExpandableCardDemo } from './Ancertenity/ExpandableCard'
import { ExpandableCardDemo1 } from './Ancertenity/ExpandableCard1';
const Rightpannel = () => {
  return (
    <div className=' w-full  overflow-hidden px-4 max-w-screen-lg  border-yellow-400 h-screen'>
      <h1 className='font-bold  text-xl text-center lg:border md:border border-2 bg-neutral-100 dark:bg-neutral-500'> MY PROJECTS</h1>
      <ExpandableCardDemo/>
     
      {/* <h1 className='font-bold font-bold text-xl text-center lg:border md:border border-2 bg-neutral-500'> Certfications and acedemic Flex</h1> */}
     <hr className='mt-12'/>
    
    <div className="  p-2 ">

    <section className="mb-8">
          <h2 className="text-center font-bold">Certificates</h2>
          {/* <ul className=" list-inside list-none">
            <li className='bg-neutral-900 py-3  rounded-lg px-2 cursor-pointer'> <Link href="/certificate/dsa">this page!JavaScript Algorithms and Data Structures - Free Code Camp </Link></li>
            <li className="bg-neutral-900 py-3 mt-4 rounded-lg px-2 cursor-pointer"> <Link href="/certificate/web">Responsive Web Design - Free Code Camp </Link>  </li>
            <li className="bg-neutral-900 py-3 mt-4 rounded-lg px-2 cursor-pointer">Responsive Web Design - Free Code Camp</li>
            
          </ul> */}
          <ExpandableCardDemo1/>
        </section>
    </div>
    </div>
  )
}

export default Rightpannel
