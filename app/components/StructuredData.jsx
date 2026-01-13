export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yubraj Khatri",
    url: "https://yubrajkhatri.com.np",
    image: "https://yubrajkhatri.com.np/personal/website-top.png",
    sameAs: [
      "https://github.com/Yubraj977",
      "https://instagram.com/001mycreativesite",
      "https://blog.yubrajkhatri.com.np"
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "SUNY Brockport"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "SUNY Brockport"
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "React",
      "Next.js",
      "React Native",
      "Artificial Intelligence",
      "FastAPI",
      "JavaScript",
      "TypeScript"
    ],
    description: "Full Stack Developer specializing in React, Next.js, React Native, and AI integration."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yubraj Khatri Portfolio",
    url: "https://yubrajkhatri.com.np",
    description: "Portfolio website of Yubraj Khatri - Full Stack Developer",
    author: {
      "@type": "Person",
      name: "Yubraj Khatri"
    },
    inLanguage: "en-US"
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01T00:00:00-00:00",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Yubraj Khatri",
      alternateName: "Yubraj977",
      description: "Full Stack Developer specializing in React, Next.js, React Native, and AI integration.",
      image: "https://yubrajkhatri.com.np/personal/website-top.png"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
