import { motion } from 'framer-motion';

export function LoadingSpinner({ size = 'md', color = 'blue' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    purple: 'border-purple-500',
    gray: 'border-gray-500'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="text-center">
        <LoadingSpinner size="xl" color="blue" />
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">Loading...</p>
      </div>
    </div>
  );
}

export function ComponentLoader() {
  return (
    <div className="flex items-center justify-center p-8">
      <LoadingSpinner size="lg" color="blue" />
    </div>
  );
}