import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function BentoTilt({ children, className = "" }) {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = clientX - left;
    const relativeY = clientY - top;

    const tiltX = gsap.utils.mapRange(0, width, 5, -5, relativeX);
    const tiltY = gsap.utils.mapRange(0, height, -5, 5, relativeY);

    const newTransform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(.95, .95, .95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    const newTransform = `rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;

    setTransformStyle(newTransform);
  };

  useGSAP(() => {
    gsap.to(itemRef.current, {
      transform: transformStyle,
      duration: 1,
      ease: "power1.out",
    });
  }, [transformStyle]);

  return (
    <div
      ref={itemRef}
      className={`transform-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default BentoTilt;
