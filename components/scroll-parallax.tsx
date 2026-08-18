"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollParallaxProps {
  children?: React.ReactNode;
  yOffset?: number; // The translation offset range on Y axis (moves from -yOffset/2 to yOffset/2)
  xOffset?: number; // The translation offset range on X axis (moves from -xOffset/2 to xOffset/2)
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollParallax({
  children,
  yOffset = 100,
  xOffset = 0,
  className = "",
  style = {},
}: ScrollParallaxProps) {
  const { scrollY } = useScroll();

  // Map scroll position from 0px to 800px to translate from 0 to yOffset/xOffset
  const y = useTransform(scrollY, [0, 800], [0, yOffset]);
  const x = useTransform(scrollY, [0, 800], [0, xOffset]);

  return (
    <motion.div style={{ y, x, willChange: "transform", ...style }} className={className}>
      {children}
    </motion.div>
  );
}
