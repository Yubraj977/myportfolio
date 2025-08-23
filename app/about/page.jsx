'use client';

import React from 'react';
import { FiMapPin, FiBook, FiCode, FiHeart, FiCoffee, FiBookOpen } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 px-6 py-10">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About Me
            <span className="block h-[3px] w-32 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Software Developer | Problem Solver | Learner
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Main Story */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiBookOpen className="text-blue-500" />
                My Story
              </h2>
              
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Hi! I&apos;m <span className="font-semibold text-neutral-900 dark:text-neutral-100">Yubraj Khatri</span>, 
                  a passionate software developer currently pursuing my Bachelor&apos;s in Computer Science with a 
                  Software Development concentration at <span className="font-semibold">SUNY Brockport</span>.
                </p>
                
                <p>
                  Originally from <span className="font-semibold">Nepal</span>, I moved to the United States to pursue my 
                  education and career in technology. My journey in programming started with curiosity about how 
                  websites and applications work, which led me to dive deep into web development and software engineering.
                </p>
                
                <p>
                  I&apos;m passionate about creating <span className="font-semibold">meaningful digital experiences</span> that 
                  solve real-world problems. Whether it&apos;s building a restaurant website that showcases Nepalese culture 
                  or developing a movie streaming platform, I believe in crafting solutions that make a difference.
                </p>
                
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                  or learning about the latest trends in software development. I&apos;m always excited to take on new 
                  challenges and collaborate on innovative projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Facts */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FiBook className="text-green-500" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-sm">SUNY Brockport</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">B.S. Computer Science</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">GPA: 3.52 | 2024 - Present</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FiMapPin className="text-red-500" />
                Location
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Brockport, NY, USA
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                Originally from Nepal
              </p>
            </div>

            {/* Interests */}
            <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FiHeart className="text-pink-500" />
                Interests
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FiCode className="text-blue-500 text-xs" />
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCoffee className="text-amber-500 text-xs" />
                  <span>Open Source Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiBookOpen className="text-green-500 text-xs" />
                  <span>Learning New Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values & Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">My Development Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiCode className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Clean Code</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Writing maintainable, readable code that stands the test of time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiHeart className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">User-Centric</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Building solutions that prioritize user experience and accessibility.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiBookOpen className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Continuous Learning</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Staying curious and adapting to the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Interested in working together or just want to chat about tech?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </div>
  );
}