import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Connect from "./Connect";
import TechStacks from "./TechStacks";

function AboutMe() {
  return (
    <MaxWidthWrapper className="pb-10 pt-5 md:pb-20 md:pt-10">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="grid">
          <Connect />
        </div>
        <div className="grid">
          <TechStacks />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default AboutMe;
