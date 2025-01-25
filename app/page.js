import React from 'react';
import Home from './components/3D/Home';
import Resume from './components/quick/Resume';
import Blog from './components/quick/Blog';
import EmbeddedBlog from './components/quick/EmbeddedBlog';
const MyComponent = () => {
  return (
    <div className=' w-full h-screen'>
     <a href='https://blog.yubrajkhatri.com.np/' target='_blank'>
    <Blog />
    <iframe
      
        src="https://gallery.yubrajkhatri.com.np/"
        width="100%"
        height="1000"
        style={{
          border: "none",
        }}
        title="Embedded Blog"
      ></iframe>
    </a>
  
    </div>
  );
};

export default MyComponent;