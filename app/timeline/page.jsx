'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LinkPreview } from '@/app/components/Ancertenity/link-preview';
import {
  FiZap, FiTrendingUp, FiUsers, FiBriefcase, FiFilm,
  FiSmartphone, FiTarget, FiCpu, FiDatabase,
  FiFeather, FiBookOpen, FiActivity, FiCode
} from 'react-icons/fi';

const timeline = [
  // Current & Recent
  { 
    year: '2025 Summer', 
    title: 'AI Education Pilot Research Project', 
    desc: 'Working on a research project developing an AI-powered educational pilot using FastAPI and OpenAI technologies to enhance learning experiences.', 
    icon: FiCpu,
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  },
  { 
    year: '2025', 
    title: 'ArrayWall Mobile App Launch', 
    desc: 'Published cross-platform wallpaper app built with React Native on both Play Store and App Store.', 
    icon: FiSmartphone,
    url: 'https://arraywall.yubrajkhatri.com.np/',
    imageSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
  },
  { 
    year: '2024', 
    title: 'Computer Science at SUNY Brockport', 
    desc: 'Started Bachelor\'s in Computer Science with Software Development concentration in Fall 2024. Currently maintaining 3.52 GPA.', 
    icon: FiBookOpen,
    url: 'https://www.brockport.edu/',
    imageSrc: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop',
  },
  { 
    year: '2024', 
    title: 'Taste of Nepal Restaurant Site', 
    desc: 'Built modern restaurant website using Next.js showcasing Nepalese cuisine near Niagara Falls.', 
    icon: FiCode,
    url: 'https://www.tastesofnepal.com/',
    imageSrc: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200&auto=format&fit=crop',
  },
  { 
    year: '2024', 
    title: 'YMSHub Movie Platform', 
    desc: 'Developed full-stack movie streaming platform with TMDB API integration and responsive design.', 
    icon: FiFilm,
    url: 'https://ymshub.yubrajkhatri.com.np/',
    imageSrc: '/ymshub.png',
  },
  { 
    year: '2023-2024', 
    title: 'VedicHoneyProducts E-commerce Site', 
    desc: 'Developed e-commerce website for VedicHoneyProducts with product catalog, shopping cart, and payment integration.', 
    icon: FiCode,
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
  },
  { 
    year: '2023-2024', 
    title: 'Himal Academy School Website', 
    desc: 'Built comprehensive school website for Himal Academy with student portal, course management, and administrative features.', 
    icon: FiBookOpen,
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
  },
  
  // Learning & Certifications
  { 
    year: '2023', 
    title: 'FreeCodeCamp Certifications', 
    desc: 'Completed JavaScript Algorithms & Data Structures and Responsive Web Design certifications.', 
    icon: FiFeather,
    url: 'https://www.freecodecamp.org/certification/Yubraj/responsive-web-design',
    imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  { 
    year: '2022', 
    title: 'Advanced React & Full-Stack Development', 
    desc: 'Mastered React ecosystem, Node.js, Express, MongoDB, and modern web development practices.', 
    icon: FiActivity,
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
  },
  { 
    year: '2021', 
    title: 'Web Development Journey Begins', 
    desc: 'Started learning HTML, CSS, JavaScript, and fell in love with creating digital experiences.', 
    icon: FiTrendingUp,
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  
  // Origins
  { 
    year: '2021', 
    title: 'First Line of Code', 
    desc: 'Wrote my first "Hello World" program and discovered my passion for problem-solving through programming.', 
    icon: FiZap,
    url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function TimelinePage() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReduced ? 0 : 0.08, delayChildren: prefersReduced ? 0 : 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <div className="h-screen overflow-y-scroll no-scrollbar px-4 md:px-6 py-10">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          📜 My Journey
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          From writing my first &ldquo;Hello World&rdquo; to building full-stack applications - 
          here&apos;s my evolution as a developer and the milestones that shaped my career.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* center spine */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full
                        bg-gradient-to-b from-blue-500/40 via-blue-400/30 to-transparent dark:from-blue-400/40 dark:via-blue-300/25" />

        <motion.ul variants={container} initial="hidden" animate="show" className="space-y-10 md:space-y-14 ">
        {timeline.map((t, i) => {
  const Icon = t.icon || FiZap;
  const left = i % 2 === 0;

  return (
    <motion.li
      key={`${t.year}-${t.title}`}
      variants={item}
      className={`relative ${i === 0 ? 'mt-16 md:mt-24' : ''}`}   // ⬅️ add this
    >
                {/* connector (md+) */}
                <div
                  className={[
                    'hidden md:block absolute top-6 h-[2px] w-[calc(50%-44%)]',
                    'bg-neutral-200 dark:bg-neutral-800',
                    left ? 'right-1/2' : 'left-1/2',
                  ].join(' ')}
                />
                {/* node */}
                <div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full
                                bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-neutral-900" />

                {/* WHOLE CARD IS THE PREVIEW/LINK */}
                <div className={['md:w-[44%] w-full', left ? 'md:mr-auto' : 'md:ml-auto'].join(' ')}>
                  <LinkPreview
                    url={t.url}
                    imageSrc={t.imageSrc}
                    isStatic
                    className="block group relative overflow-hidden bg-white/70 dark:bg-white/[0.06]
                               border border-neutral-200/70 dark:border-neutral-800 rounded-xl
                               backdrop-blur-sm shadow-sm transition-all duration-300
                               hover:shadow-xl hover:border-neutral-300/80 dark:hover:border-neutral-700
                               p-4 md:p-5 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  >
                    {/* Year & icon */}
                    <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold
                                        bg-black/5 dark:bg-white/10">
                        {t.year}
                      </span>
                      <Icon />
                    </div>

                    {/* Title (plain text now, the box itself is the link) */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {t.title}
                    </h3>

                    <p className="mt-1 text-sm md:text-[15px] text-gray-700 dark:text-gray-300">
                      {t.desc}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      More →
                    </span>
                  </LinkPreview>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
}