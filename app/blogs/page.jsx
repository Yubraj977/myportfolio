"use client";

import BlogFeed from '../components/BlogFeed';
import { FiExternalLink, FiRss } from 'react-icons/fi';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 px-6 py-10">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Latest from my blog
            <span className="block h-[3px] w-24 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Thoughts on software development, tutorials, and lessons learned.
          </p>
          
          {/* Blog CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://blog.yubrajkhatri.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              <FiExternalLink className="text-sm" />
              Visit Full Blog
            </a>
            
            <a
              href="https://blog.yubrajkhatri.com.np/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-6 py-3 rounded-lg font-semibold transition"
            >
              <FiRss className="text-sm" />
              RSS Feed
            </a>
          </div>
        </div>

        {/* Blog Feed */}
        <BlogFeed showAll={true} maxPosts={10} />
        
        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-8">
            <h2 className="text-xl font-bold mb-3">Want to stay updated?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Get notified when I publish new posts about software development, tutorials, and tech insights.
            </p>
            <a
              href="https://blog.yubrajkhatri.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Follow My Blog
              <FiExternalLink className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}