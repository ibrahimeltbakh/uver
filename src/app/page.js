"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroView from "./components/Hero/HeroView";
import MainView from "./components/Main/MainView";
import CollageSuccess from './components/cards/CollageSuccessCard';
import CollageSuccessView from './components/Collage Success/CollageSuccessView';
import CollageApplicationView from "./components/Collage application/CollageApplicationView";

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
  const heroPhoneRef = useRef(null);
  const mainPhoneContainerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const mainSectionRef = useRef(null);

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


  useEffect(() => {
    const timer = setTimeout(() => {
      const heroPhone = heroPhoneRef.current;
      const mainPhoneContainer = mainPhoneContainerRef.current;
      const heroSection = heroSectionRef.current;
      const mainSection = mainSectionRef.current;

      if (!heroPhone || !mainPhoneContainer || !heroSection || !mainSection) return;


      const heroPhoneWrapper = heroPhone.querySelector('.hero-phone-wrapper') || heroPhone;
      const mainPhoneWrapper = mainPhoneContainer.querySelector('.hero-phone-wrapper') || mainPhoneContainer;


      if (mainPhoneWrapper) gsap.set(mainPhoneWrapper, { opacity: 0 });

      try { gsap.set(heroPhoneWrapper, { clearProps: "all" }); } catch (e) { }

      const ctx = gsap.context(() => {
        let scrollTriggerInstance = null;
        let cloneEl = null;
        let tl = null;

        const createCloneAtRect = (rect) => {
          cloneEl = heroPhoneWrapper.cloneNode(true);
          cloneEl.style.position = 'fixed';
          cloneEl.style.zIndex = 9999;
          cloneEl.style.pointerEvents = 'none';
          cloneEl.style.margin = '0';
          cloneEl.style.boxSizing = 'border-box';

          cloneEl.style.left = `${rect.left}px`;
          cloneEl.style.top = `${rect.top}px`;
          cloneEl.style.width = `${rect.width}px`;
          cloneEl.style.height = `${rect.height}px`;
          cloneEl.style.transformOrigin = 'left top';
          cloneEl.style.opacity = '1';

          document.body.appendChild(cloneEl);

          heroPhoneWrapper.style.visibility = 'hidden';
        };

        const removeCloneAndRestore = () => {
          if (cloneEl && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
          cloneEl = null;
          heroPhoneWrapper.style.visibility = '';
        };

        const setup = () => {
          if (scrollTriggerInstance) {
            scrollTriggerInstance.kill(true);
          }
          if (tl) {
            tl.kill();
            tl = null;
          }

          const heroRect = heroPhoneWrapper.getBoundingClientRect();
          const mainRect = mainPhoneWrapper ? mainPhoneWrapper.getBoundingClientRect() : null;

          const scrollY = window.scrollY || window.pageYOffset;
          const heroAbsTop = heroRect.top + scrollY;
          const mainAbsTop = mainRect ? mainRect.top + scrollY : (mainSection.getBoundingClientRect().top + scrollY);


          const heroBottom = heroSection.getBoundingClientRect().bottom + (window.scrollY || 0);
          const mainTopAbs = mainSection.getBoundingClientRect().top + (window.scrollY || 0);
          const totalDistance = Math.max(window.innerHeight, mainTopAbs - heroBottom + window.innerHeight * 0.3);


          tl = gsap.timeline({
            paused: true,
            defaults: { ease: "power2.inOut" }
          });


          tl.addLabel('start');
          tl.to({}, { duration: 0.0001 });

          tl.addLabel('toCenter');
          tl.to({}, { duration: 0.001 });


          tl.addLabel('toTarget');


          scrollTriggerInstance = ScrollTrigger.create({
            trigger: heroSection,
            start: "top top",
            end: `+=${totalDistance}`,
            scrub: 1,
            onEnter: (self) => {

              if (!cloneEl) {
                const rect = heroPhoneWrapper.getBoundingClientRect();
                createCloneAtRect(rect);


                const centerX = window.innerWidth / 2 - rect.width / 2;
                const centerY = window.innerHeight / 2 - rect.height / 2;

                let targetLeft = 0;
                let targetTop = 0;
                let finalScale = 1;
                if (mainRect) {

                  targetLeft = mainRect.left;
                  targetTop = mainRect.top;
                  const scaleX = mainRect.width / rect.width;
                  const scaleY = mainRect.height / rect.height;
                  finalScale = Math.min(scaleX, scaleY) * 0.95;
                } else {
                  targetLeft = rect.left;
                  targetTop = rect.top;
                }


                tl.clear();


                tl.to(cloneEl, {
                  duration: 1,
                  left: centerX,
                  top: centerY,
                  scale: 1,
                  ease: "power2.inOut",
                  onUpdate: () => { },
                }, 0);


                tl.to(cloneEl, {
                  duration: 1,
                  left: () => {

                    return targetLeft;
                  },
                  top: () => {

                    return targetTop;
                  },
                  scale: finalScale,
                  ease: "power2.inOut",
                  onUpdate: () => { },
                }, 1);

                tl.eventCallback('onComplete', () => {
                  if (mainPhoneWrapper) {
                    gsap.set(mainPhoneWrapper, { opacity: 1 });
                  }
                  removeCloneAndRestore();
                });


                tl.eventCallback('onReverseComplete', () => {

                  removeCloneAndRestore();
                  if (mainPhoneWrapper) gsap.set(mainPhoneWrapper, { opacity: 0 });
                });
              }
            },
            onUpdate: (self) => {

              if (tl) {
                tl.totalProgress(self.progress);
              }
            },
            onLeave: () => {

              if (tl) tl.progress(1, true);

            },
            onEnterBack: () => {

              if (cloneEl) removeCloneAndRestore();
              if (mainPhoneWrapper) gsap.set(mainPhoneWrapper, { opacity: 0 });
            },
          });
        };

        setup();


        const handleResize = () => {

          if (cloneEl) removeCloneAndRestore();
          ScrollTrigger.refresh();
          setup();
        };
        window.addEventListener('resize', handleResize);

        // cleanup on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
          if (scrollTriggerInstance) scrollTriggerInstance.kill();
          if (tl) tl.kill();
          removeCloneAndRestore();
        };
      });


    }, 300);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative min-h-screen overflow-hidden bg-(--main-color) text-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden  md:px-4 lg:px-6 border border-red-800">
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

      <main className="relative z-10 flex min-h-screen items-center justify-center px-2 py-10    ">
        <section className="w-full md:max-w-[80%] rounded-4xl border-8 border-black bg-white">
          <div ref={heroSectionRef}>
            <HeroView phoneRef={heroPhoneRef} />
          </div>
          <div ref={mainSectionRef}>
            <MainView phoneContainerRef={mainPhoneContainerRef} />
          </div>
          <CollageSuccessView />
          <CollageApplicationView />
        </section>
      </main>
    </div>
  );
}

