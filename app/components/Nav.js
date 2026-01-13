'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { name: 'Blogs', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Stack', path: '/stack' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Contact', path: '/contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-card/80 border-b border-border shadow-sm">
      <ul
        className="
          flex gap-2 md:gap-6
          overflow-x-auto no-scrollbar
          justify-start md:justify-center
          px-4 md:px-6 py-3 md:py-3
          text-sm md:text-base
          font-medium text-gray-700 dark:text-gray-300
          whitespace-nowrap
        "
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <li
              key={item.name}
              onClick={() => router.push(item.path)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={clsx(
                'relative px-3 py-1.5 md:px-4 md:py-2 cursor-pointer transition-all duration-200 rounded-md',
                isActive && 'text-green-600 dark:text-green-400 font-bold'
              )}
            >
              {item.name}
              <span
                className={clsx(
                  'absolute left-1/2 -bottom-[3px] h-[2px] bg-green-500 dark:bg-green-400 transition-all duration-300 ease-in-out transform -translate-x-1/2',
                  hovered === index || isActive
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0'
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}