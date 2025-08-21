import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch RSS feed from your blog
    const response = await fetch('https://blog.yubrajkhatri.com.np/feed.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Portfolio Blog Feed)'
      },
      // Force no cache during development
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog feed: ${response.status}`);
    }

    const xmlText = await response.text();
    
    // Parse RSS XML to extract blog posts
    const posts = parseRSSFeed(xmlText);
    
    return NextResponse.json({
      success: true,
      posts: posts.slice(0, 6), // Return latest 6 posts
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Blog feed error:', error);
    
    // Return fallback posts if external feed fails
    return NextResponse.json({
      success: false,
      posts: getFallbackPosts(),
      error: 'Failed to fetch latest posts',
      lastUpdated: new Date().toISOString()
    });
  }
}

function parseRSSFeed(xmlText) {
  // Simple RSS parser - extract posts from XML
  const posts = [];
  
  try {
    // Extract item elements from RSS
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = xmlText.match(itemRegex) || [];
    
    items.forEach((item, index) => {
      if (index >= 10) return; // Limit to 10 posts
      
      const title = extractXMLValue(item, 'title');
      const link = extractXMLValue(item, 'link');
      const description = extractXMLValue(item, 'description');
      const pubDate = extractXMLValue(item, 'pubDate');
      const guid = extractXMLValue(item, 'guid');
      
      if (title && link) {
        // Fix incorrect domain from RSS feed
        const correctedLink = link.replace('tailwind-nextjs-starter-blog.vercel.app', 'blog.yubrajkhatri.com.np');
        
        console.log('Original link:', link);
        console.log('Corrected link:', correctedLink);
        
        posts.push({
          title: cleanHTML(title),
          link: correctedLink,
          description: cleanHTML(description) || '',
          publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
          slug: extractSlugFromLink(correctedLink),
          id: guid || correctedLink
        });
      }
    });
    
  } catch (error) {
    console.error('RSS parsing error:', error);
  }
  
  return posts;
}

function extractXMLValue(xml, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function cleanHTML(str) {
  if (!str) return '';
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function extractSlugFromLink(link) {
  try {
    const url = new URL(link);
    const pathParts = url.pathname.split('/').filter(Boolean);
    return pathParts[pathParts.length - 1] || 'untitled';
  } catch {
    return 'untitled';
  }
}

function getFallbackPosts() {
  return [
    {
      title: "Code, Costs, and Consequences: Why Software Reliability is Non-Negotiable",
      link: "https://blog.yubrajkhatri.com.np/blog/why-software-reliablity-matters-in-critical-systems",
      description: "Buggy software can cost billions — and sometimes lives. Here's why every developer should care about rock-solid code.",
      publishedAt: "2024-11-05T00:00:00.000Z",
      slug: "why-software-reliablity-matters-in-critical-systems",
      id: "fallback-1"
    },
    {
      title: "Hosting a Docker Container Locally and on the Web",
      link: "https://blog.yubrajkhatri.com.np/blog/Hosting-locally-own-server",
      description: "Learn how to host Docker containers both locally and deploy them to the web for scalable applications.",
      publishedAt: "2024-12-15T00:00:00.000Z",
      slug: "Hosting-locally-own-server",
      id: "fallback-2"
    },
    {
      title: "Release of Tailwind Nextjs Starter Blog v2.0",
      link: "https://blog.yubrajkhatri.com.np/blog/release-of-tailwind-nextjs-starter-blog-v2.0",
      description: "Discover the new features and improvements in version 2.0 of the popular Tailwind Nextjs Starter Blog template.",
      publishedAt: "2025-01-03T00:00:00.000Z",
      slug: "release-of-tailwind-nextjs-starter-blog-v2.0",
      id: "fallback-3"
    }
  ];
}