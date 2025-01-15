// components/blog.js
import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Code, Costs, and Consequences: Why Software Reliability is Non-Negotiable",
      date: "November 5, 2024",
      excerpt: "Buggy code costs billions of dollars and can even put lives at risk. Here's why software reliability is crucial in today's world...",
      link: "/blog/code-costs-and-consequences"
    },
    {
      title: "The Future of Advertising: Predicting Trends for 2030",
      date: "December 15, 2024",
      excerpt: "From AI-driven personalization to immersive AR experiences, the future of advertising is closer than you think. Here's what to expect...",
      link: "/blog/future-of-advertising"
    },
    {
      title: "Rhetorical Analysis of Biased News: A Deep Dive",
      date: "October 30, 2024",
      excerpt: "Analyzing how biased media shapes public opinion and how rhetorical tools are used to influence narratives...",
      link: "/blog/rhetorical-analysis-biased-news"
    },
  ];

  return (
    <div className="bg-[#121212] text-[#f3f3f3] p-10 min-h-screen font-serif">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] shadow-lg p-8 rounded-xl border border-[#2a2a2a]">
        <header className="mb-8 border-b border-[#333] pb-4">
          <h1 className="text-3xl font-bold text-[#ffffff]">Blogs</h1>
          <p className="text-lg italic text-[#cccccc]">My Thoughts, Writings, and Technical Articles</p>
        </header>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] p-6 rounded-lg border border-[#333] hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-bold text-[#ffffff]">{post.title}</h2>
              <p className="text-sm text-[#aaaaaa]">{post.date}</p>
              <p className="text-[#d9d9d9] mt-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="inline-block mt-4 text-[#76c7c0] underline hover:text-[#56a398] transition duration-300"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;