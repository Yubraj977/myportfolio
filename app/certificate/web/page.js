import React from "react";
import Image from "next/image";
function page() {
  return (
    <div>
        <a href="https://www.freecodecamp.org/certification/Yubraj/responsive-web-design" 
        target="blank"
        className="cursor-pointer"
        >

  
      <Image
        src={"/web.png"}
        width={10000}
        height={10000}
        alt="Certificate of completion for Responsive Web Design course"
      ></Image>
            </a>
    </div>
  );
}

export default page;
