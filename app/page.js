"use client"
import { useEffect, useRef } from "react";
// import Avatar3D from "./components/Avtar3D";
import AboutSection from "./components/AboutMe";
const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 6; // Set playback speed to 0.5x
    }
  }, []);

  return (
    <div className="border border-opacity-5">
    {/* <div className="relative w-full h-screen overflow-hidden ">
      {/* Background video */}
      {/* <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        preload="none"
        autoPlay
        loop
        playsInline
        muted
      >
        <source src="video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Text overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
        <p className="text-lg md:text-2xl mt-4">Lets Explore more further ( ͡👁️ ͜ʖ ͡👁️)</p>
      </div>
    // </div> */} 
    
    <div className="h-screen">
   
        
       <AboutSection/>
      
    </div>
    </div>
  );
};

export default BackgroundVideo;