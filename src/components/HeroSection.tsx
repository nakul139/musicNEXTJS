import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comperhensive music courses and transform your musical
          journey today. Wheather you&#39;re a beginner or looking to refine
          your skills, join us to unlock your true potential in music.
        </p>
        <div className="mt-8  ">
          <Link href={"./courses"}>
            <Button>Explore courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
