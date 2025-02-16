import { useRef } from "react";
import gsap from "gsap";

import AnimatedTitle from "../components/AnimatedTitle";
import Button from "../components/Button";

function Story() {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    const { left, top, width, height } = element.getBoundingClientRect();

    const xPos = clientX - left;
    const YPos = clientY - top;

    const rotateX = gsap.utils.mapRange(0, width, -5, 5, xPos);
    const rotateY = gsap.utils.mapRange(0, height, 5, -5, YPos);

    gsap.to(element, {
      transform: `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        transform: "rotateX(0deg) rotateY(0deg)",
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  return (
    <section
      id="story"
      className="relative min-h-dvh w-full bg-black text-blue-50"
    >
      <div className="relative size-full flex flex-col items-center py-10 pb-24">
        <p className="font-general text-sm md:text-xs uppercase">
          The open ip universe
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="text-center relative z-10 mt-5 pointer-events-none mix-blend-difference"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content perspective-normal transform-3d">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain bg-no-repeat"
                />
              </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="w-full flex justify-center -mt-50 sm:-mt-30 md:-mt-52">
          <div className="w-fit md:ml-auto md:mr-56">
            <p className="text-center font-circular-web text-base sm:text-2xl md:text-sm text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the <br />
              boundless pillar. Discover its secrets and shape <br />
              your fate amidst infinite opportunities.
            </p>

            <Button
              id="realme-btn"
              title="discover prologue"
              containerClass="mt-10 mx-auto md:mt-6 md:mr-auto md:ml-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
