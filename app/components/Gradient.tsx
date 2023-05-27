"use client";

import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function Gradient({ className }: { className?: string }) {
  const variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={classNames("absolute -z-10 blur-3xl", className)}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
}

