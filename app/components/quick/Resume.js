// components/resume.js
import React from 'react';

const Resume = () => {
  return (
    <div className="bg-[#1e1e1e] text-[#d3c7a7] p-10 min-h-screen">
      <div className="max-w-4xl mx-auto bg-[#262626] shadow-md p-8 rounded-lg">
        {/* Header Section */}
        <header className="mb-8 border-b border-[#3c3c3c] pb-4">
          <h1 className="text-4xl font-bold font-serif tracking-wide text-[#e4e4e4]">Yubraj Khatri</h1>
          <p className="text-lg italic text-[#b3b3b3]">Software Developer | Problem Solver | Learner</p>
        </header>

        {/* Contact Info */}
        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase mb-2 text-[#e8e2d1]">Contact</h2>
          <p>Email: <a href="mailto:yubrajkhatri977@gmail.com" className="text-[#c8a27b]">yubrajkhatri977@gmail.com</a></p>
          <p>Phone: +585-957-2805</p>
          <p>
            <a href="https://yubrajkhatri.com.np/" target="_blank" className="underline text-[#c8a27b]">Portfolio</a> |
            <a href="https://github.com/Yubraj977" target="_blank" className="underline text-[#c8a27b]"> GitHub</a> |
            <a href="https://linkedin.com/in/yubraj-khatri-155786243" target="_blank" className="underline text-[#c8a27b]"> LinkedIn</a>
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase mb-2 text-[#e8e2d1]">Education</h2>
          <p>
            <strong>State University of New York at Brockport</strong> <br />
            Bachelor in Computer Science - Software Development Concentration <br />
            GPA: 3.52 <br />
            Aug 2024 - Present
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase mb-2 text-[#e8e2d1]">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Languages: HTML, CSS, JavaScript, MongoDB, Java, Python</li>
            <li>Frameworks: React.js, Express.js, Tailwind CSS, Node.js, Next.js</li>
            <li>Tools: Photoshop, Excel, Git, Notion</li>
            <li>Soft Skills: Time Management, Empathy, Adaptability</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase mb-2 text-[#e8e2d1]">Projects</h2>
          <div>
            <p>
              <strong>Movie Downloading Site (YmsHub)</strong> -{' '}
              <a href="https://ymshub.yubrajkhatri.com.np/" target="_blank" className="underline text-[#c8a27b]">LINK</a>
            </p>
            <p>Technologies: MERN, Redux, Firebase, MongoDB</p>
            <p>Description: Fully functional movie downloading site with state management and CRUD operations.</p>
          </div>

          <div className="mt-4">
            <p>
              <strong>Vedic Honey Products</strong> -{' '}
              <a href="https://vedichoneyproducts.vercel.app/" target="_blank" className="underline text-[#c8a27b]">LINK</a>
            </p>
            <p>Technologies: React, Tailwind, Chart.js</p>
            <p>Description: Local honey selling website with an admin dashboard for tracking sales.</p>
          </div>

          <div className="mt-4">
            <p>
              <strong>Himal Academy</strong> -{' '}
              <a href="https://www.himalacademy.com/" target="_blank" className="underline text-[#c8a27b]">LINK</a>
            </p>
            <p>Technologies: React, Tailwind CSS</p>
            <p>Description: High school website with responsive design and smooth navigation.</p>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase mb-2 text-[#e8e2d1]">Certificates</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript Algorithms and Data Structures - Free Code Camp</li>
            <li>Responsive Web Design - Free Code Camp</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;