import React from "react";
import { ExpandableCardDemo } from "./Ancertenity/ExpandableCard";
import { ExpandableCardDemo1 } from "./Ancertenity/ExpandableCard1";

const Rightpannel = () => {
  return (
    <div
      className="
        w-full overflow-y-auto lg:max-w-sm xl:max-w-md lg:h-screen
        text-black dark:text-white
        bg-white dark:bg-[#0f0f0f]
        transition-all duration-300
        border-l border-neutral-200 dark:border-neutral-800
        pt-2
      "
    >
      <div className="px-4 pb-8">

        {/* My Projects */}
        <div className="mb-8">
          <h1 className="text-center text-xl font-extrabold tracking-wide uppercase bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 py-3 rounded-md shadow">
            My Projects
          </h1>
          <div className="mt-6">
            <ExpandableCardDemo />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-700 mb-8" />

        {/* Certificates */}
        <section>
          <h2 className="text-center text-lg font-semibold tracking-wider uppercase text-black dark:text-white">
            Certificates
          </h2>
          <div className="mt-4">
            <ExpandableCardDemo1 />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rightpannel;