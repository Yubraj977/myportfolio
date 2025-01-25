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
    </a>
  
    </div>
  );
};

export default MyComponent;