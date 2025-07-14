"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";
const musicTestimonials = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts. Often in life, the greatest challenges bring the most valuable lessons and growth. Never let temporary setbacks stop your progress.",
    name: "Winston Churchill",
    title: "Former British Prime Minister",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail. True innovation and greatness come from forging your own way and not just following the crowd. This requires bravery, vision, and perseverance.",
    name: "Ralph Waldo Emerson",
    title: "Essayist and Philosopher",
  },
  {
    quote:
      "In the middle of every difficulty lies opportunity. Challenges test our character and resilience, pushing us to discover strengths we never knew we had. Embracing adversity is the key to unlocking our fullest potential.",
    name: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    quote:
      "The best way to predict the future is to create it. This means taking control of your destiny through actions, decisions, and consistent effort. The future belongs to those who are proactive and determined to shape their own path.",
    name: "Peter Drucker",
    title: "Management Consultant and Author",
  },
  {
    quote:
      "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. Adaptability is the cornerstone of survival and success, reminding us that flexibility in thought and action is essential.",
    name: "Charles Darwin",
    title: "Naturalist and Biologist",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      >
        <div className="text-3xl font-bold text-center mb-8 mt-20 z-10">
          <h2>Hear our Harmony: Voices of Success</h2>
        </div>
        <div className="flex justify-center w-full px-10 sm:px-6 lg:px-8 z-10">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={musicTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
