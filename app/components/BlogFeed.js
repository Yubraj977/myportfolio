'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiExternalLink, FiRss, FiRefreshCw } from 'react-icons/fi';
import { LoadingSpinner } from './LoadingSpinner';

export default function BlogFeed({ showAll = false, maxPosts = 3 }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add cache busting parameter
      const response = await fetch(`/api/blog-feed?t=${Date.now()}`, {
        cache: 'no-store'
      });
      const data = await response.json();
      
      if (data.success) {
        setPosts(data.posts.slice(0, showAll ? data.posts.length : maxPosts));
      } else {
        setPosts(data.posts || []);
        setError(data.error);
      }
    } catch (err) {
      console.error('Failed to fetch blog posts:', err);
      setError('Failed to load blog posts');
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  };

  const truncateDescription = (text, maxLength = 120) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="lg" color="blue" />
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="text-center py-12">
        <FiRss className="mx-auto text-4xl text-neutral-400 mb-4" />
        <p className="text-neutral-600 dark:text-neutral-400">
          Unable to load blog posts right now.
        </p>
        <button 
          onClick={fetchBlogPosts}
          className="mt-3 text-blue-600 hover:text-blue-500 text-sm font-medium"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <FiRss className="inline mr-2" />
              Showing cached posts - live feed temporarily unavailable
            </p>
            <button
              onClick={fetchBlogPosts}
              className="flex items-center gap-1 text-yellow-600 hover:text-yellow-500 text-sm font-medium"
              disabled={loading}
            >
              <FiRefreshCw className={`text-xs ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      )}

      <div className="grid gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => window.open(post.link, '_blank', 'noopener,noreferrer')}
            className="group bg-white dark:bg-white/[0.04] border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                    <FiClock className="text-xs" />
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>
                  <div className="w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    From Blog
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {post.description && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                    {truncateDescription(post.description)}
                  </p>
                )}

                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 text-sm font-medium transition-colors">
                  Read on Blog
                  <FiExternalLink className="text-xs group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {!showAll && posts.length >= maxPosts && (
        <div className="text-center pt-6">
          <a
            href="https://blog.yubrajkhatri.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View All Posts
            <FiExternalLink className="text-sm" />
          </a>
        </div>
      )}
    </div>
  );
}