import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Hero = () => {
  return (
    <MaxWidthWrapper className="mb-16 mt-16 sm:mt-32 flex flex-col items-center justify-center text-center">
      <h1
        className={cn(
          "max-w-4xl text-4xl font-extrabold md:text-5xl lg:text-6xl",
          font.className
        )}
      >
        Hi, I am a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
          Fullstack
        </span>{" "}
        developer creating modern web apps.
      </h1>
      <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
        A frontend developer based in the Malaysia. I am passionate about
        building modern web applications using Next.js, React, and Tailwind CSS.
      </p>
    </MaxWidthWrapper>
  );
};

export default Hero;
