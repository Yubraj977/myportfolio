export const metadata = {
    title: "Blogs | Yubraj Khatri",
    description: "Read insightful blogs by Yubraj Khatri on tech, creativity, and personal growth.",
  };
  
  export default function BlogsPage() {
    const blogs = [
      {
        title: "Code, Costs, and Consequences: Why Software Reliability is Non-Negotiable",
        date: "Nov 5, 2024",
        summary:
          "Buggy software can cost billions — and sometimes lives. Here’s why every developer should care about rock-solid code.",
      },
      {
        title: "The Future of Advertising: 2030 and Beyond",
        date: "Dec 15, 2024",
        summary:
          "From AI to brainwave tracking, here's what advertising might look like in the next decade and how we prepare for it.",
      },
      {
        title: "Living in the Metaverse: Reality, Simulation, and You",
        date: "Jan 3, 2025",
        summary:
          "Is the Metaverse just a tech buzzword, or are we already inside it? A breakdown of where digital identity is headed.",
      },
    ];
  
    return (
      <div className="px-6 py-8 max-w-3xl mx-auto text-black dark:text-white">
        <h1 className="text-3xl font-extrabold mb-6 text-center">📝 Yubraj's Blogs</h1>
  
        <div className="space-y-6">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{blog.date}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{blog.summary}</p>
              <button className="mt-3 text-blue-600 dark:text-blue-400 hover:underline text-sm">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }