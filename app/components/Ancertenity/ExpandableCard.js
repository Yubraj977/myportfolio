"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export function ExpandableCardDemo() {
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
          className="fixed inset-0 bg-black/20 h-full w-full z-10 " />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100] ">
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
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center  bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full md:max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col  bg-slate-100 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                width={200}
                height={200}
                src={active.src}
                alt={`Screenshot of ${active.title} project - ${active.description}`}
                loading="lazy"
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4  ">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold ">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="dark:text-neutral-400 text-neutral-900 ">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4  ">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=" text-xs md:text-sm   lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-200 text-neutral-900 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
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
          className="p-4 flex  md:flex-row justify-between items-center  border-red-600  rounded-xl cursor-pointer relative 
            bg-slate-100 hover:bg-slate-200
           
            dark:bg-[#232225] hover:dark:bg-neutral-700 
             my-4 lg:mt-0 md:mt-0">
          <div className="flex lg:gap-4  md:flex-row  w-full  gap-4">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <Image
                width={100}
                height={100}
                src={card.src}
                alt={`${card.title} project thumbnail - ${card.description}`}
                loading="lazy"
                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top" />
            </motion.div>

            <div className=" flex flex-col justify-between">
              <div>
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="lg:ont-medium dark:text-white  font-bold  text-center md:text-left">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="   dark:text-white text-sm lg:text-md  text-center md:text-left">
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
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            className=" hidden px-4 py-2 text-sm rounded-full font-bold   md:block lg:block right-10 bottom bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0">
            {card.ctaText}
          </motion.button>
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
    description: "Resturant site(Naigra Falls)",
    title: "Taste of Nepal",
    src: "/tasteofnepal.png",
    ctaText: "View",
    ctaLink: "https://www.tastesofnepal.com/",
    content: () => {
      return (
        (<p>
          Taste for Nepal is a modern website I developed using <span className="fong-bold text-green-500"> Next.js, React, and Tailwind CSS</span> to represent 
          a Nepalese restaurant located near Niagara. This project showcases a seamless blend of traditional Nepali 
          culture with contemporary web design, creating an immersive experience for visitors. The site highlights the restaurant’s unique
           offerings, including authentic Nepalese cuisine and a welcoming ambiance that reflects the spirit of Nepal. By leveraging Next.js 
           for <span className="fong-bold text-green-500"> server-side rendering and optimized performance, React for dynamic components, and Tailwind CSS for a sleek, responsive design, </span>
           the website ensures a delightful and engaging browsing experience. This project demonstrates my ability to use advanced web development
            tools to create visually appealing, functional, and culturally rich websites.
                  </p>)
      );
    },
  },
  {
    description: "Handmade wallpaper app for iOS & Android",
    title: "ArrayWall",
    src: "/arraywall.png",
    ctaText: "View",
    ctaLink: "https://arraywall.yubrajkhatri.com.np/",
    content: () => {
      return (
        <p>
          ArrayWall is a free, cross‑platform wallpaper app built with
          <span className="font-bold text-green-500"> Expo/React Native</span>.
          It features fast browsing with cached images, tag‑based discovery,
          bookmarks, and one‑tap setting of wallpapers. The backend uses
          <span className="font-bold text-green-500"> Supabase (PostgreSQL)</span>
          for data and <span className="font-bold text-green-500">Cloudinary</span> for media storage,
          with secure authentication via
          <span className="font-bold text-green-500"> Clerk</span>. Published on both the
          <span className="font-bold text-green-500"> Play Store</span> and
          <span className="font-bold text-green-500"> App Store</span>, it’s optimized for
          offline use and smooth performance.
        </p>
      );
    },
  },

  
  {
    description: "Movie Website ",
    title: "YmsHub",
    src: "/ymshub.png",
    ctaText: "view",
    ctaLink: "https://ymshub.yubrajkhatri.com.np/",
    content: () => {
      return (
        (
          <p>
          YMSHub.xyz is a free online movie streaming platform that I developed, showcasing my skills in building dynamic and feature-rich web applications. The website is powered by 
          <span className="font-bold text-blue-500">Next.js, TMDB API, Tailwind CSS,</span> and other modern technologies. 
          Using the <span className="font-bold text-blue-500">TMDB API</span>, I implemented a robust data-fetching mechanism to display a wide range of movies with details such as posters, genres, and ratings. 
          Navigation is optimized through <span className="font-bold text-blue-500">React Router</span>, ensuring seamless exploration across various pages.
          The platforms user interface is crafted with <span className="font-bold text-blue-500">Tailwind CSS,</span> ensuring a responsive design that provides an excellent experience on both desktop and mobile devices.
          By utilizing the <span className="font-bold text-blue-500">server-side rendering</span> capabilities of Next.js, the application delivers faster load times and enhanced SEO performance. 
          This project highlights my expertise in API integration, responsive design, and creating user-friendly platforms, making it a hub for effortless movie exploration.
        </p>
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
