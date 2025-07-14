"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Eric Vetro",
    designation: "Vocal Coach",
    image:
      "https://imgs.search.brave.com/kY_HfyqhI8iirt8wcoxyTxCvIBRd2OcG0Wb2J7-Anz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/cjV3LXUwUGpvM2k0/LVlwcTAyX3BMLTlM/VVpVPS80MDAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNTk5/eDA6NjAxeDIpL2Vy/aWMtdmV0cm8tdm9j/YWwtY29hY2gtMi0x/MDE2MjMtYjkyMWEw/MTMxMmY2NGUwMWE5/YzllZTJhMzkwNWRj/ZTUuanBn",
  },
  {
    id: 2,
    name: "Leslie Ann Jones",
    designation: "Recording Engineer",
    image:
      "https://imgs.search.brave.com/oBuF-9dHTr0NT4VkxFaI5nT_6IMVPaKALRodmHjoNPY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmlsbGJvYXJkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9MRVNMSUUt/QU5OLUpPTkVTLWNy/LUNvdXJ0ZXN5LW9m/LVN0ZXZlLUplbm5p/bmdzLWJpbGxib2Fy/ZC0xNTQ4LmpwZz93/PTk0MiZoPTYyMyZj/cm9wPTE",
  },
  {
    id: 3,
    name: "Rickey Minor",
    designation: "Music Director",
    image:
      "https://imgs.search.brave.com/uDcscnRE2s2FQx1t1Tm-6Ca0WzTibW1NOd_SSqxWdH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjAy/MzQ3NjcwL3Bob3Rv/L2xvcy1hbmdlbGVz/LWNhLW11c2ljLWRp/cmVjdG9yLXJpY2tl/eS1taW5vci1hdHRl/bmRzLXRoZS0yMDE2/LWNyZWF0aXZlLWFy/dHMtZW1teS1hd2Fy/ZHMtZGF5LTEtYXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWVEOHlsZGg4R2Zs/bDFnaENkN0NzdFZi/ckVsS0cxOTh2bFIw/aVJ5d3U5Szg9",
  },
  {
    id: 4,
    name: "Manny Marroquin",
    designation: "Mixing Engineer",
    image:
      "https://imgs.search.brave.com/6oUEN78prTGoXvFoqucjS5uBASY9TMq7ed3e6lV4jhw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L21w/NzRZTmY5bXlRVHdU/Vlo1c1VhWEguanBn",
  },
  {
    id: 5,
    name: "Debra Byrd",
    designation: "Vocal Coach",
    image:
      "https://imgs.search.brave.com/Y9CUcuYkRdhGEvT3k9yGZuDuWW5k1s7WRSODKPczwAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/MTgzMTg2L3Bob3Rv/L2xvcy1hbmdlbGVz/LWNhLXZvY2FsLWNv/YWNoLWRlYnJhLWJ5/cmQtYXJyaXZlcy1h/dC10aGUtYW1lcmlj/YW4taWRvbC1zZWFz/b24tMTAtdG9wLTEz/LWZpbmFsaXN0cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VW05eHRPZ1ZZbXZy/WmNueWUtQU5kbGxC/cEVLNk9YeENTaVBu/Q1R6Z0lNZz0",
  },
];

export const Instructor = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructor
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full ">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};
