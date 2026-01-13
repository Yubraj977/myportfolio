import React from "react";
import { ExpandableCardDemo } from "./Ancertenity/ExpandableCard";
import { ExpandableCardDemo1 } from "./Ancertenity/ExpandableCard1";

const Rightpannel = () => {
  return (
    <div
      className="
        w-full overflow-y-auto lg:max-w-sm xl:max-w-md lg:h-screen
        text-foreground
        bg-card
        transition-all duration-300
        border-l border-border
        pt-2
        animate-fade-in
      "
    >
      <div className="px-4 pb-8">

        {/* My Projects */}
        <div className="mb-6">
          <h1 className="text-center text-base font-bold tracking-wide uppercase bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 py-2.5 rounded-md shadow">
            My Projects
          </h1>
          <div className="mt-4">
            <ExpandableCardDemo />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-700 mb-6" />

        {/* Certificates */}
        <section>
          <h2 className="text-center text-sm font-semibold tracking-wider uppercase text-black dark:text-white mb-3">
            Certificates
          </h2>
          <div className="mt-3">
            <ExpandableCardDemo1 />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rightpannel;