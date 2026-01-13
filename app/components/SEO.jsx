export default function SEO({
  title = "Yubraj Khatri - Full Stack Developer & AI Enthusiast",
  description = "Full Stack Developer specializing in React, Next.js, React Native, and AI integration. Check out my projects including AI Education Pilot, ArrayWall, and more.",
  keywords = "Yubraj Khatri, Full Stack Developer, React Developer, Next.js, React Native, AI Developer, Web Developer, Mobile App Developer, Portfolio",
  ogImage = "/personal/website-top.png",
  url = "https://yubrajkhatri.com.np",
  type = "website"
}) {
  return (
    <>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Yubraj Khatri" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Yubraj Khatri Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@Yubraj977" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#22c55e" />
      <meta name="msapplication-TileColor" content="#22c55e" />
      <link rel="canonical" href={url} />
    </>
  );
}
