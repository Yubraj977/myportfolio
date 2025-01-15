import React from 'react'
import HTMLFlipBook from "react-pageflip";

const AboutMe = () => {
  return (
    <div>
      
      <div className="demoPage h-screen w-full">
      <section
      className=" bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/ancient-book-bg.jpg')`, // Replace with an old parchment background
        backgroundColor: '#f8f4e1', // Fallback to an aged paper color
      }}
    >
      <div className="max-w-4xl mx-auto p-10 bg-opacity-95 bg-white border-double border-8 border-yellow-800 shadow-inner">
        {/* Ornate Title */}
        <h2 className="text-5xl font-bold text-center mb-6 uppercase text-yellow-900 tracking-wider font-serif">
          ✦ About Me ✦
        </h2>

        {/* Ornate Border */}
        <div className="border-t-4 border-b-4 border-yellow-900 py-4 my-6">
          <p className="text-lg text-justify text-yellow-800 leading-loose font-serif">
            Greetings! I am <span className="font-bold italic">Yubraj Khatri</span>, a passionate developer with a love for storytelling and technology. 
            My journey combines the wisdom of the past with the innovation of the future, creating experiences that are as timeless as they are transformative.
          </p>
        </div>

        {/* Detailed Content */}
        <div className="text-yellow-800 leading-relaxed font-serif">
          <p className="mb-6 indent-12">
            With a foundation in <span className="font-bold">Web Development</span>, <span className="font-bold">App Creation</span>, 
            and <span className="font-bold">Video Editing</span>, I thrive on merging creativity with logic. Whether its crafting elegant solutions for complex problems 
            or weaving stories through cinematic visuals, my work is an homage to the harmony of art and science.
          </p>

          <p className="mb-6 indent-12">
            Inspired by ancient texts and their artistry, I infuse this spirit into modern projects. Beyond coding, I explore the music of the guitar, 
            study filmmaking techniques, and immerse myself in the timeless art of storytelling.
          </p>

          <p className="indent-12">
            My tools include <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, and <span className="font-bold">Tailwind CSS</span>, 
            all woven together to create seamless digital experiences. I work with diligence, precision, and a passion for bringing ideas to life.
          </p>
        </div>

        {/* Footer Button */}
        <div className="mt-10 text-center">
          <a
            href="/resume.pdf"
            className="inline-block bg-yellow-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-yellow-800 transition uppercase tracking-wide text-lg font-serif"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
      </div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
   
    </div>
  )
}

export default AboutMe
