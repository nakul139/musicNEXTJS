"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, index) => index / cardLength);
    const closestIndex = breakpoints.reduce((acc, bp, index) => {
      const d = Math.abs(latest - bp);
      return d < Math.abs(latest - breakpoints[acc]) ? index : acc;
    }, 0);

    if (closestIndex !== activeCard) {
      setActiveCard(closestIndex);
    }
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];

 
  const gradients = useMemo(
    () => [
      "linear-gradient(to bottom right, #06b6d4, #10b981)",
      "linear-gradient(to bottom right, #ec4899, #6366f1)",
      "linear-gradient(to bottom right, #f97316, #eab308)",
    ],
    []
  );

  const [bgGradient, setBgGradient] = useState(gradients[0]);

  useEffect(() => {
    setBgGradient(gradients[activeCard % gradients.length]);
  }, [activeCard, gradients]);

  if (!content || content.length === 0) return null;

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={`${item.title}-${index}`} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="mt-6 text-base max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        style={{ background: bgGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
