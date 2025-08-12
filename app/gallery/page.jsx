
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const perPage = 12;

  async function load(p = 1) {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/unsplash?page=${p}&per_page=${perPage}`, { cache: 'no-store' });
      const json = await res.json();
      const items = json?.photos || [];
      if (items.length < perPage) setDone(true);
      setPhotos((prev) => (p === 1 ? items : [...prev, ...items]));
    } catch (e) {
      console.error('Unsplash fetch failed:', e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(1);
  }, []);

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center dark:text-white text-black">
        🎨 My Gallery My Clicks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((image) => (
          <motion.a
            key={image.id}
            href={image.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="overflow-hidden rounded-2xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1c1c1c]"
          >
            <img
              src={image.regular}
              alt={image.alt}
              className="w-full h-64 object-cover object-center hover:brightness-110 transition-all duration-300"
              loading="lazy"
            />
            {(image.title || image.alt) && (
              <div className="p-4 text-center font-semibold text-gray-800 dark:text-gray-200">
                {image.title || image.alt}
              </div>
            )}
          </motion.a>
        ))}
      </div>

      {/* Load more */}
      <div className="mt-10 flex justify-center">
        {!done ? (
          <button
            onClick={() => {
              const next = page + 1;
              setPage(next);
              load(next);
            }}
            disabled={loading}
            className="px-5 py-2 rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-800 hover:bg-neutral-100 disabled:opacity-60
                       dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            {loading ? 'Loading…' : 'Load more'}
          </button>
        ) : (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">You’ve reached the end.</p>
        )}
      </div>

      {/* Tiny attribution (Unsplash guidelines) */}
      <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
        Photos from <a className="underline" href="https://unsplash.com/@yubraj00001" target="_blank" rel="noreferrer">@yubraj00001</a> on Unsplash.
      </p>
    </div>
  );
}