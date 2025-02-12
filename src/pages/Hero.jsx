import { useState, useEffect, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import Button from "../components/Button";
import VideoPreview from "../components/VideoPreview";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  return (
    <section id="hero" className="relative w-screen overflow-x-hidden h-dvh">
      {loading && (
        <div className="flex-center absolute z-100 h-dvh w-full overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 w-full overflow-hidden h-dvh bg-blue-200"
      >
        <div>
          <div className="z-50 overflow-hidden rounded-lg cursor-pointer size-64 mask-clip-path absolute-center">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="transition-all duration-500 ease-in-out origin-center scale-50 opacity-0 hover:opacity-100 hover:scale-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="object-cover object-center origin-center scale-150 size-64"
                  onLoadedData={handleVideoLoad}
                ></video>
              </div>
            </VideoPreview>
          </div>
          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="z-20 invisible object-cover object-center absolute-center size-64"
            onLoadedData={handleVideoLoad}
          ></video>

          <video
            src={getVideoSrc(
              hasClicked
                ? currentIndex > 1
                  ? currentIndex - 1
                  : totalVideos
                : 1
            )}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 object-cover object-center size-full"
            onLoadedData={handleVideoLoad}
          ></video>
        </div>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="px-5 mt-24 sm:px-10">
            <h1 className="text-blue-100 special-font hero-heading">
              R<b>E</b>DEFINE
            </h1>
            <p className="mb-5 text-lg text-blue-100 sm:text-3xl md:text-xl font-robert-regular">
              Enter the Metagame
              <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow className="rotate-40" />}
              containerClass="!bg-yellow-300"
            />
          </div>
        </div>

        <h1 className="absolute z-40 bottom-5 right-5 special-font hero-heading text-blue-75">
          G<b>A</b>MING
        </h1>
      </div>
      <h1 className="absolute bottom-5 right-5 special-font hero-heading text-blue-200">
        G<b>A</b>MING
      </h1>
    </section>
  );
}

export default Hero;
