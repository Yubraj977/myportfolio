'use client';

import { motion } from 'framer-motion';



const stack = {
  Languages: [
    { name: 'JavaScript', logo: '🟨', level: 'Advanced', years: '3+' },
    { name: 'TypeScript', logo: '🔷', level: 'Intermediate', years: '2+' },
    { name: 'Python', logo: '🐍', level: 'Intermediate', years: '2+' },
    { name: 'Java', logo: '☕', level: 'Intermediate', years: '2+' },
    { name: 'HTML5', logo: '📄', level: 'Advanced', years: '4+' },
    { name: 'CSS3', logo: '🎨', level: 'Advanced', years: '4+' },
  ],
  'Frontend Frameworks': [
    { name: 'React', logo: '⚛️', level: 'Advanced', years: '3+' },
    { name: 'Next.js', logo: '🧭', level: 'Advanced', years: '2+' },
    { name: 'Tailwind CSS', logo: '💨', level: 'Advanced', years: '3+' },
    { name: 'Framer Motion', logo: '🎞️', level: 'Intermediate', years: '1+' },
    { name: 'React Native', logo: '📱', level: 'Intermediate', years: '1+' },
  ],
  'Backend & Database': [
    { name: 'Node.js', logo: '🟢', level: 'Intermediate', years: '2+' },
    { name: 'Express.js', logo: '🚂', level: 'Intermediate', years: '2+' },
    { name: 'MongoDB', logo: '🍃', level: 'Intermediate', years: '2+' },
    { name: 'Supabase', logo: '🟢', level: 'Intermediate', years: '1+' },
    { name: 'Firebase', logo: '🔥', level: 'Intermediate', years: '2+' },
    { name: 'PostgreSQL', logo: '🐘', level: 'Beginner', years: '1+' },
  ],
  'Cloud & DevOps': [
    { name: 'Vercel', logo: '▲', level: 'Advanced', years: '2+' },
    { name: 'Netlify', logo: '🌐', level: 'Intermediate', years: '2+' },
    { name: 'Cloudinary', logo: '☁️', level: 'Intermediate', years: '1+' },
    { name: 'Git', logo: '🔧', level: 'Advanced', years: '3+' },
    { name: 'GitHub Actions', logo: '⚙️', level: 'Beginner', years: '1+' },
  ],
  'Development Tools': [
    { name: 'VSCode', logo: '🧠', level: 'Advanced', years: '4+' },
    { name: 'Postman', logo: '📮', level: 'Intermediate', years: '2+' },
    { name: 'Figma', logo: '🎨', level: 'Intermediate', years: '2+' },
    { name: 'GitHub Copilot', logo: '🤖', level: 'Advanced', years: '1+' },
    { name: 'iTerm2', logo: '💻', level: 'Intermediate', years: '2+' },
    { name: 'Notion', logo: '📓', level: 'Advanced', years: '3+' },
  ],
  'Currently Learning': [
    { name: 'Docker', logo: '🐳', level: 'Learning', years: '0.5+' },
    { name: 'GraphQL', logo: '🧬', level: 'Learning', years: '0.5+' },
    { name: 'Rust', logo: '🦀', level: 'Learning', years: '0.5+' },
    { name: 'WebSockets', logo: '🔌', level: 'Learning', years: '0.5+' },
    { name: 'AWS', logo: '☁️', level: 'Learning', years: '0.5+' },
  ],
};

export default function StackPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="px-6 py-10 max-w-6xl mx-auto text-black dark:text-white"
      style={{ perspective: 1000 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">🧱 My Tech Stack</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Technologies, frameworks, and tools I use to build amazing digital experiences
        </p>
        
        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm">Beginner</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Learning</span>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {Object.entries(stack).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {items.map(({ name, logo, level, years }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-card border border-border rounded-xl p-5 shadow-md dark:shadow-lg flex items-center justify-center flex-col gap-3 transition-all duration-300"
                >
                  <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                    {logo}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">{name}</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                      {level} • {years}
                    </div>
                  </div>

                  {/* Level indicator */}
                  <div className="absolute top-2 right-2">
                    <div className={`w-2 h-2 rounded-full ${
                      level === 'Advanced' ? 'bg-green-500' :
                      level === 'Intermediate' ? 'bg-yellow-500' :
                      level === 'Beginner' ? 'bg-orange-500' :
                      'bg-green-500'
                    }`} />
                  </div>

                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300 bg-green-400 dark:bg-green-600 blur-xl z-[-1]" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}