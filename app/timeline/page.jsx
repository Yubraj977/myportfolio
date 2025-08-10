'use client';

import { motion } from 'framer-motion';

const timelineData = [
  { year: '2031', title: 'Global Reach', description: 'Vision to build tools that help 1M+ developers & creators.' },
  { year: '2030', title: 'Scaling Impact', description: 'Focusing on scalable open-source tools and meaningful content.' },
  { year: '2029', title: 'Mentorship & Community', description: 'Began mentoring juniors and organizing local dev events.' },
  { year: '2028', title: 'Entrepreneurial Launch', description: 'Started MVP for my own SaaS tool and launched beta.' },
  { year: '2027', title: 'Creative Filmmaking', description: 'Combined editing, motion graphics, and cinematography.' },
  { year: '2026', title: 'Mobile Development', description: 'Learned React Native and began building mobile-first apps.' },
  { year: '2025', title: 'Vision Expansion', description: 'Freelancing, portfolio upgrades, branding and storytelling.' },
  { year: '2024', title: 'AI + Productivity Tools', description: 'Integrated GPT, built personal AI tools and side projects.' },
  { year: '2023', title: 'Backend Beginnings', description: 'Learned Node.js, Express, PostgreSQL, Supabase, and auth.' },
  { year: '2022', title: 'React + Tailwind', description: 'Crafted beautiful interfaces and built dynamic UIs.' },
  { year: '2021', title: 'HTML, CSS, JavaScript', description: 'Built my first websites and explored frontend development.' },
  { year: '2020', title: 'COVID Pause, Self-Growth', description: 'Focused on tools, design, and curiosity.' },
  { year: '2019', title: 'C Programming', description: 'Solved logic problems and cracked algorithms.' },
  { year: '2018', title: 'High School Hustle', description: 'Early curiosity in technology and leadership.' },
];

export default function TimelinePage() {
  return (
    <div className="h-screen overflow-y-scroll no-scrollbar px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        📜 My Timeline
      </h1>

      <div className="relative border-l-4 border-gray-300 dark:border-gray-700 pl-6 max-w-3xl mx-auto">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 relative"
          >
            <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-[34px] top-2 border-4 border-white dark:border-gray-900" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.year} — {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}