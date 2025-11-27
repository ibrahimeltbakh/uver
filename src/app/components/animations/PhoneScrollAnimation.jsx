"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PhoneScrollAnimation({ heroContent, mainContent }) {
  const heroPhoneRef = useRef(null);
  const mainPhoneContainerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const mainSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const heroPhone = heroPhoneRef.current;
      const mainPhoneContainer = mainPhoneContainerRef.current;
      const heroSection = heroSectionRef.current;
      const mainSection = mainSectionRef.current;

      if (!heroPhone || !mainPhoneContainer || !heroSection || !mainSection)
        return;

      const heroPhoneWrapper =
        heroPhone.querySelector(".hero-phone-wrapper") || heroPhone;
      const mainPhoneWrapper =
        mainPhoneContainer.querySelector(".hero-phone-wrapper") ||
        mainPhoneContainer;

      gsap.set(mainPhoneWrapper, { opacity: 0 });

      const ctx = gsap.context(() => {
        let scrollTriggerInstance = null;
        let cloneEl = null;
        let tl = null;

        const createCloneAtRect = (rect) => {
          cloneEl = heroPhoneWrapper.cloneNode(true);
          cloneEl.style.position = "fixed";
          cloneEl.style.zIndex = 9999;
          cloneEl.style.pointerEvents = "none";
          cloneEl.style.margin = "0";
          cloneEl.style.left = `${rect.left}px`;
          cloneEl.style.top = `${rect.top}px`;
          cloneEl.style.width = `${rect.width}px`;
          cloneEl.style.height = `${rect.height}px`;
          cloneEl.style.transformOrigin = "left top";

          document.body.appendChild(cloneEl);
          heroPhoneWrapper.style.visibility = "hidden";
        };

        const removeCloneAndRestore = () => {
          if (cloneEl) cloneEl.remove();
          heroPhoneWrapper.style.visibility = "";
        };

        const setup = () => {
          if (scrollTriggerInstance) scrollTriggerInstance.kill();
          if (tl) tl.kill();

          const heroRect = heroPhoneWrapper.getBoundingClientRect();
          const mainRect = mainPhoneWrapper.getBoundingClientRect();

          const heroBottom =
            heroSection.getBoundingClientRect().bottom + window.scrollY;
          const mainTopAbs =
            mainSection.getBoundingClientRect().top + window.scrollY;
          const totalDistance = Math.max(
            window.innerHeight,
            mainTopAbs - heroBottom + window.innerHeight * 0.3
          );

          tl = gsap.timeline({ paused: true });

          scrollTriggerInstance = ScrollTrigger.create({
            trigger: heroSection,
            start: "top top",
            end: `+=${totalDistance}`,
            scrub: 1,
            onEnter: () => {
              if (cloneEl) return;

              const rect = heroPhoneWrapper.getBoundingClientRect();
              createCloneAtRect(rect);

              const targetLeft = mainRect.left;
              const targetTop = mainRect.top;

              const scale =
                Math.min(
                  mainRect.width / rect.width,
                  mainRect.height / rect.height
                ) * 0.95;

              tl.to(cloneEl, {
                duration: 1,
                left: window.innerWidth / 2 - rect.width / 2,
                top: window.innerHeight / 2 - rect.height / 2,
                scale: 1,
              });

              tl.to(cloneEl, {
                duration: 1,
                left: targetLeft,
                top: targetTop,
                scale,
              });

              tl.eventCallback("onComplete", () => {
                gsap.set(mainPhoneWrapper, { opacity: 1 });
                removeCloneAndRestore();
              });

              tl.eventCallback("onReverseComplete", () => {
                removeCloneAndRestore();
                gsap.set(mainPhoneWrapper, { opacity: 0 });
              });
            },
            onUpdate: (self) => {
              tl.totalProgress(self.progress);
            },
            onLeaveBack: () => {
              gsap.set(mainPhoneWrapper, { opacity: 0 });
            },
          });
        };

        setup();
        window.addEventListener("resize", setup);

        return () => {
          window.removeEventListener("resize", setup);
          removeCloneAndRestore();
          if (scrollTriggerInstance) scrollTriggerInstance.kill();
          if (tl) tl.kill();
        };
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div ref={heroSectionRef}>
        {React.cloneElement(heroContent, { phoneRef: heroPhoneRef })}
      </div>

      <div ref={mainSectionRef}>
        {React.cloneElement(mainContent, {
          phoneContainerRef: mainPhoneContainerRef,
        })}
      </div>
    </div>
  );
}
