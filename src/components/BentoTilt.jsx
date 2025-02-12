import { useRef, useState } from "react";

function BentoTilt({ children, className = "" }) {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = clientX - (left + width / 2);
    const relativeY = clientY - (top + height / 2);

    const tiltX = (relativeX - 0.5) * 5;
    const tiltY = (relativeY - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
}

export default BentoTilt;
