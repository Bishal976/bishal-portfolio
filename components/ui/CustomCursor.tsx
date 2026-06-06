"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 500, mass: 0.3 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 500, mass: 0.3 });
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = () => {
      isHovering.current = true;
      if (ringRef.current) {
        ringRef.current.style.width = "40px";
        ringRef.current.style.height = "40px";
        ringRef.current.style.borderColor = "rgba(108, 99, 255, 0.8)";
        ringRef.current.style.background = "rgba(108, 99, 255, 0.08)";
      }
    };

    const onLeave = () => {
      isHovering.current = false;
      if (ringRef.current) {
        ringRef.current.style.width = "24px";
        ringRef.current.style.height = "24px";
        ringRef.current.style.borderColor = "rgba(108, 99, 255, 0.4)";
        ringRef.current.style.background = "transparent";
      }
    };

    window.addEventListener("mousemove", move);

    const interactables = document.querySelectorAll("a, button, [data-cursor]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll("a, button, [data-cursor]");
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-2 h-2 rounded-full bg-[#6C63FF]" />
      </motion.div>

      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-[rgba(108,99,255,0.4)] transition-all duration-200"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: "24px",
          height: "24px",
        }}
      />
    </>
  );
}
