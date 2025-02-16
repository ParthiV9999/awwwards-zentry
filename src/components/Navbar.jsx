import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

import Button from "./Button";

function Navbar() {
  const navLinks = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      id="navbar"
      className="fixed z-50 top-1 md:top-4 inset-x-2 border-none transition-all duration-700 rounded-lg"
    >
      <header className="size-full">
        <nav className="flex items-center justify-between size-full p-4 md:pr-8">
          <div className="flex-center gap-2 md:gap-4">
            <img
              loading="lazy"
              src="/img/logo.png"
              alt="logo"
              className="w-10 sm:w-full object-cover bg-no-repeat"
            />
            <Button
              title="Products"
              rightIcon={<TiLocationArrow className="rotate-135" />}
              containerClass="!bg-blue-50"
            />
            <Button
              title="Whitepaper"
              containerClass="!bg-blue-50"
              hidden="!hidden sm:!inline-flex"
            />
          </div>
          <div className="flex-center gap-12">
            <div className="hidden md:flex md:items-center md:gap-12">
              {navLinks.map((link, index) =>
                index < 2 ? (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    className="nav-hover-btn flex-center gap-2"
                  >
                    <span>{link}</span>
                    <TiLocationArrow className="text-base" />
                  </a>
                ) : (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="flex-center gap-0.5"
            >
              <audio
                ref={audioElementRef}
                src="/audio/loop.mp3"
                loop
                className="hidden"
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isIndicatorActive && "active"}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
