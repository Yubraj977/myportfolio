'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    company: "Taste of Nepal",
    image: "/testimonial1.jpg", // You'll need to add actual images
    rating: 5,
    text: "Yubraj created an absolutely stunning website for our restaurant. His attention to detail and understanding of our cultural needs was exceptional. The site perfectly captures the essence of our Nepalese cuisine and has significantly increased our online presence.",
    project: "Restaurant Website Development",
    linkedin: "https://linkedin.com/in/example"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Startup Founder",
    company: "TechFlow Solutions",
    image: "/testimonial2.jpg",
    rating: 5,
    text: "Working with Yubraj was fantastic. He delivered our web application ahead of schedule and exceeded our expectations. His technical skills combined with excellent communication made the entire process smooth and enjoyable.",
    project: "Web Application Development",
    github: "https://github.com/example"
  },
  {
    id: 3,
    name: "Dr. Amanda Roberts",
    role: "Academic Director",
    company: "Himal Academy",
    image: "/testimonial3.jpg",
    rating: 5,
    text: "Yubraj transformed our outdated school website into a modern, responsive platform that parents and students love. His understanding of educational needs and user experience design is impressive.",
    project: "Educational Website Redesign",
    linkedin: "https://linkedin.com/in/example"
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Product Manager",
    company: "Digital Innovations Inc.",
    image: "/testimonial4.jpg",
    rating: 5,
    text: "Yubraj's mobile app development skills are top-notch. ArrayWall is beautifully designed and performs flawlessly across different devices. His attention to performance optimization and user experience is remarkable.",
    project: "Mobile App Development",
    email: "alex@example.com"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 px-6 py-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            What People Say
            <span className="block h-[3px] w-32 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Feedback from clients, colleagues, and collaborators I&apos;ve had the pleasure of working with
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Projects Completed</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6"
          >
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Client Satisfaction</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6"
          >
            <div className="text-3xl font-bold text-purple-600 mb-2">5.0</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Average Rating</div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-500 fill-current text-sm" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Project */}
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                Project: {testimonial.project}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  {testimonial.linkedin && (
                    <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer"
                       className="text-neutral-400 hover:text-blue-600 transition">
                      <FiLinkedin className="text-sm" />
                    </a>
                  )}
                  {testimonial.github && (
                    <a href={testimonial.github} target="_blank" rel="noopener noreferrer"
                       className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition">
                      <FiGithub className="text-sm" />
                    </a>
                  )}
                  {testimonial.email && (
                    <a href={`mailto:${testimonial.email}`}
                       className="text-neutral-400 hover:text-green-600 transition">
                      <FiMail className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
            Join these satisfied clients and let&apos;s create something amazing together. 
            I&apos;m passionate about delivering high-quality solutions that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Start a Project
            </a>
            <a 
              href="/stack" 
              className="inline-flex items-center justify-center bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-6 py-3 rounded-lg font-semibold transition"
            >
              View My Skills
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}