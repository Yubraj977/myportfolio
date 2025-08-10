'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { name: 'Blogs', path: '/' }, // Homepage shows blogs
  { name: 'Gallery', path: '/gallery' },
  { name: 'Stack', path: '/stack' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Playground', path: '/playground' },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <ul className="flex gap-4 overflow-x-auto no-scrollbar justify-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <li
              key={item.name}
              onClick={() => router.push(item.path)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={clsx(
                'relative px-4 py-2 cursor-pointer transition-all duration-200 rounded-md',
                isActive && 'text-blue-600 dark:text-blue-400 font-bold'
              )}
            >
              {item.name}

              {/* Bottom indicator animation */}
              <span
                className={clsx(
                  'absolute left-1/2 -bottom-[2px] h-[2px] w-0 bg-blue-500 dark:bg-blue-400 transition-all duration-300 ease-in-out',
                  hovered === index && 'w-full -translate-x-1/2',
                  isActive && 'w-full -translate-x-1/2'
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}