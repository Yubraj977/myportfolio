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
  { year: '2031', title: 'Global Reach', desc: 'Building tools that help 1M+ developers & creators.', icon: FiZap,
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  { year: '2030', title: 'Scaling Impact', desc: 'Reliability, docs, performance, and growth.', icon: FiTrendingUp,
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
  { year: '2029', title: 'Mentorship & Community', desc: 'Mentoring juniors and running local dev meetups.', icon: FiUsers,
    url: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop',
    imageSrc: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop',
  },
  // …add the rest like above
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
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        📜 My Timeline
      </h1>

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