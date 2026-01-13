"use client";

import BlogFeed from '../components/BlogFeed';
import ScrollReveal from '../components/ScrollReveal';
import { FiExternalLink } from 'react-icons/fi';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <ScrollReveal animation="fade-in">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              Latest Posts
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-base text-neutral-600 dark:text-neutral-400">
                Thoughts on software development, tutorials, and lessons learned.
              </p>
              <a
                href="https://blog.yubrajkhatri.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-500 text-sm font-semibold transition"
              >
                Visit Blog
                <FiExternalLink className="text-xs" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Blog Feed */}
        <BlogFeed showAll={true} maxPosts={10} />
      </div>
    </div>
  );
}