"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export function ExpandableCardDemo1() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-centerv  bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full md:max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={200}
                height={10}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4  border-red-600 bg-white dark:bg-[#232225]  ">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-900  dark:text-neutral-200">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-900 dark:text-neutral-400">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold  bg-green-500 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4 bg-neutral-100 dark:bg-neutral-900">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=" text-sm md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]
                  
                  ">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul className="max-w-2xl mx-auto w-full gap-4  mt-4">
      {cards.map((card, index) => (
        //This is the each box of the project section 
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={`card-${card.title}-${id}`}
          onClick={() => setActive(card)}
          className="p-4  border-red-600  flex  md:flex-row justify-between items-center  dark:hover:bg-neutral-700   rounded-xl cursor-pointer relative  bg-slate-100 hover:bg-neutral-200  dark:bg-[#232225]  my-4 lg:mt-0 md:mt-0">
          <div className="flex lg:gap-4  md:flex-row  w-full  border-green-500 gap-4">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <Image
                width={100}
                height={50}
                src={card.src}
                alt={card.title}
                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top " />
            </motion.div>

            <div className=" flex flex-col justify-between">
              <div>
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="lg:ont-medium   font-bold text-neutral-900 dark:text-neutral-100 text-center md:text-left">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className=" text-neutral-900 dark:text-slate-100  text-sm lg:text-sm  text-center md:text-left">
                {card.description}
              </motion.p>
              </div>
              <motion.button
            layoutId={`button-${card.title}-${id}`}
            className="px-4 py-2 lg:hidden text-sm rounded-full font-bold  md:block  right-10 bottom bg-[#1f6764]   text-white mt-4 md:mt-0">
            {card.ctaText}
          </motion.button>
            </div>


          </div>
          {/* <motion.button
            layoutId={`button-${card.title}-${id}`}
            className=" hidden px-4 py-2 text-sm rounded-full font-bold   md:block lg:block right-10 bottom bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0">
            {card.ctaText}
          </motion.button> */}
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    description: "(Free Code Camp)",
    title: "JavaScript algorithms and data structure  ",
    src: "/dsa.png",
    ctaText: "View",
    ctaLink: "https://www.freecodecamp.org/certification/khatri_977/javascript-algorithms-and-data-structures",
    content: () => {
      return (
        (<p>
   Earning the  <span className="text-green-500">“JavaScript Algorithms and Data Structures” </span> certification from freeCodeCamp has been a significant milestone in my web development journey. This comprehensive program delved into the core principles of JavaScript, including variables, arrays, objects, loops, and functions. It also introduced me to advanced programming paradigms such as  <span className="text-green-500 font-bold"> Object-Oriented Programming (OOP) and Functional Programming (FP).</span> Through practical projects, I applied my knowledge to solve   <span className="text-green-500">complex algorithmic challenges</span>, enhancing my problem-solving skills and deepening my understanding of data structures. This certification not only solidified my foundation in JavaScript but also equipped me with the tools to develop efficient and scalable applications.
For a detailed overview of the curriculum and the skills acquired, you can refer to freeCodeCamp’s official page on the JavaScript Algorithms and Data Structures certification
                  </p>)
      );
    },
  },
  {
    description: "(Free Code Camp)", 
    title: "Responsive Web Design",
    src: "/web.png",
    ctaText: "View",
    ctaLink: "https://www.freecodecamp.org/certification/Yubraj/responsive-web-design",
    content: () => {
      return (
        
        (
<p> Completing the <span className="fong-bold text-green-500">Responsive Web Design Certification</span> from freeCodeCamp allowed me to master the foundational skills required to create <span className="fong-bold text-green-500">modern, responsive, and user-friendly websites</span>. The certification involved over <span className="fong-bold text-green-500">300 hours of rigorous training</span>, covering essential topics such as <span className="fong-bold text-green-500">HTML, CSS, and advanced layout techniques</span>. This achievement demonstrates my ability to design and implement <span className="fong-bold text-green-500">mobile-friendly, visually appealing, and accessible web pages</span>, ensuring optimal user experiences across all devices. It highlights my commitment to continuous learning and proficiency in <span className="fong-bold text-green-500">creating seamless, interactive designs</span> that meet modern web standards. </p>
                  )
      );
    },
  },

  
  // {
  //   description: "Led Zeppelin",
  //   title: "Stairway To Heaven",
  //   src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
  //   ctaText: "Play",
  //   ctaLink: "https://ui.aceternity.com/templates",
  //   content: () => {
  //     return (
  //       (<p>Led Zeppelin, a legendary British rock band, is renowned for their
  //                   innovative sound and profound impact on the music industry. Formed in
  //                   London in 1968, they have become a cultural icon in the rock music
  //                   world. <br /> <br />Their songs often reflect a blend of blues, hard
  //                   rock, and folk music, capturing the essence of the 1970s rock era.
  //                   With a career spanning over a decade, Led Zeppelin has released
  //                   numerous hit albums and singles that have garnered them a massive fan
  //                   following both in the United Kingdom and abroad.
  //                 </p>)
  //     );
  //   },
  // },
  // {
  //   description: "Mustafa Zahid",
  //   title: "Toh Phir Aao",
  //   src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
  //   ctaText: "Play",
  //   ctaLink: "https://ui.aceternity.com/templates",
  //   content: () => {
  //     return (
  //       (<p> , a Bollywood movie starring Emraan Hashmi, is
  //                   renowned for its intense storyline and powerful performances. Directed
  //                   by Mohit Suri, the film has become a significant work in the Indian
  //                   film industry. <br /> <br />The movie explores themes of love,
  //                   redemption, and sacrifice, capturing the essence of human emotions and
  //                   relationships. With a gripping narrative and memorable music,
  //                   has garnered a massive fan following both in
  //                   India and abroad, solidifying Emraan  status as a
  //                   versatile actor.
  //                 </p>)
  //     );
  //   },
  // },
];
