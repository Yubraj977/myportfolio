import React from "react";
import Image from "next/image";
function page() {
  return (
    <div>
      <a
        href="https://www.freecodecamp.org/certification/khatri_977/javascript-algorithms-and-data-structures"
        className="cursor-pointer"
        target="blank"
      >
        <Image
          src={"/dsa.png"}
          width={10000}
          height={10000}
          alt="Certificate of completion for Data Structures and Algorithms course"
        ></Image>
      </a>
    </div>
  );
}

export default page;
