"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroView from "./components/Hero/HeroView";
import MainView from "./components/Main/MainView";
import CollageSuccessView from './components/Collage Success/CollageSuccessView';
import CollageApplicationView from "./components/Collage application/CollageApplicationView";
import AboutUsView from "./components/AboutUs/AboutUsView";
import PhoneScrollAnimation from "./components/animations/PhoneScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const countries = [
  "UNITED KINGDOM",
  "CZECH REPUBLIC",
  "AUSTRALIA",
  "GERMANY",
  "CANADA",
  "UNITED STATES",
  "SOUTH KOREA",
  "SWITZERLAND",
  "SPAIN",
  "SINGAPORE",
  "JAPAN",
  "NETHERLANDS",
];

const marqueeWords = [...countries, ...countries];

export default function Home() {
  const marqueeRef = useRef(null);


  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      const track = marqueeRef.current;

      const tween = gsap.fromTo(
        track,
        { y: 0 },
        {
          y: () => -track.scrollHeight / 2,
          duration: 26,
          ease: "none",
          repeat: -1,
          onRepeat: () => gsap.set(track, { y: 0 }),
        },
      );

      const handleResize = () => {
        tween.invalidate();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        tween.kill();
      };
    }, marqueeRef);

    return () => ctx.revert();
  }, []);



  return (
    <div className="relative min-h-screen overflow-hidden bg-(--main-color) text-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden  md:px-4 lg:px-6 ">
        <div
          ref={marqueeRef}
          className="flex flex-col items-center justify-around gap-8 text-center text-white/70"
        >
          {marqueeWords.map((country, index) => (
            <p
              key={`${country}-${index}`}
              className="text-[clamp(3rem,12vw,9rem)] font-bold uppercase tracking-[0.25em] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.45)]"
              style={{
                WebkitTextFillColor: "transparent",
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.05) 75%)",
                WebkitBackgroundClip: "text",
              }}
            >
              {country}
            </p>
          ))}
        </div>
      </div>


      <main className="relative z-10 flex min-h-screen items-center justify-center md:px-2 md:py-10">
        <section className="w-full md:max-w-[80%] md:rounded-4xl md:border-8 md:border-black bg-white">

          <PhoneScrollAnimation
            heroContent={<HeroView />}
            mainContent={<MainView />}
          />

          <CollageSuccessView />
          <CollageApplicationView />
          <AboutUsView />
        </section>
      </main>
    </div>
  );
}

