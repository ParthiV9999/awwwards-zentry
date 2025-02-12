import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "../components/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip-img",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      border: 0,
    });
  });

  return (
    <section id="about" className="relative min-h-screen w-full">
      <div className="relative mt-36 flex items-center flex-col gap-5">
        <p className="font-general text-center uppercase font-medium text-lg md:text-xs">
          Welcome to Zentry
        </p>
        <AnimatedTitle
          title="Discover the world's<br />largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Metagame begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry is the unified play layer that bridges players, agentic AI,
            and
            <br />
            blockchains, creating a new economic paradigm.
          </p>
        </div>

        <div id="clip-img" className="cursor-pointer h-dvh w-full">
          <div className="black-border mask-clip-path about-image">
            <img
              src="img/about.webp"
              alt="custom-home-intro-outer"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
