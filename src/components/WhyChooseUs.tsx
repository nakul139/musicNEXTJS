"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent = [
  {
    title: "Welcome to Harmony Music Academy",
    description:
      "Discover a world of music education at Harmony Music Academy. Our mission is to nurture talent and inspire creativity through high-quality, personalized instruction for students of all ages.",
  },
  {
    title: "Our Programs",
    description:
      "We offer private and group lessons in piano, guitar, violin, drums, voice, and more. Whether you're a complete beginner or an advanced musician, we have programs tailored to fit your skill level and goals.",
  },
  {
    title: "Experienced Instructors",
    description:
      "Our passionate and qualified instructors bring years of teaching and performance experience. They focus on technique, theory, and creativity to help each student grow musically and confidently.",
  },
  {
    title: "Join Our Community",
    description:
      "Be part of a vibrant music community! We host regular recitals, workshops, and events that provide opportunities for students to perform, collaborate, and celebrate their progress.",
  },
];

function WhyChooseUs() {
  return (
    <div className="">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
