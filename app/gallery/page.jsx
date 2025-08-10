'use client';

import { motion } from 'framer-motion';


const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1606788075761-59a3f3cdae2e',
    alt: 'Urban Edit',
    title: 'Cyberpunk Mood',
  },
  {
    src: 'https://images.unsplash.com/photo-1587574293340-ec6f7524c4be',
    alt: 'Neon Vibes',
    title: 'City Lights',
  },
  {
    src: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    alt: 'Abstract Concept',
    title: 'Dreamspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1620121692029-d88db57e1737',
    alt: 'Design Art',
    title: 'Gradient Flow',
  },
  {
    src: 'https://images.unsplash.com/photo-1602526216438-61c5f3a56f0f',
    alt: 'Video Frame',
    title: 'Color Theory',
  },
  {
    src: 'https://images.unsplash.com/photo-1536859355448-76f92ebdc33d',
    alt: 'Dark Aesthetic',
    title: 'Moodboard',
  },
];

export default function GalleryPage() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center dark:text-white text-black">
        🎨 My Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="overflow-hidden rounded-2xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1c1c1c]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover object-center hover:brightness-110 transition-all duration-300"
            />
            {image.title && (
              <div className="p-4 text-center font-semibold text-gray-800 dark:text-gray-200">
                {image.title}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}