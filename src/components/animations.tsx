"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// Handwriting animation for the logo — clip reveal preserves natural kerning
export function HandwrittenLogo() {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="font-cursive text-2xl font-bold text-white md:text-[28px] inline-block whitespace-nowrap"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        no way labs
      </motion.span>
    </span>
  );
}

// Hero text reveal — word by word
export function HeroText() {
  const line1 = "Research.";
  const line2 = "Prototype. Ship.";

  return (
    <h1 className="font-display text-[52px] leading-[54px] font-bold tracking-[-0.05em] text-white md:text-[96px] md:leading-[96px]">
      <motion.span
        className="block"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {line1}
      </motion.span>
      <motion.span
        className="block"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {line2}
      </motion.span>
    </h1>
  );
}

// Hero subtitle fade in
export function HeroSubtitle({ children }: { children: ReactNode }) {
  return (
    <motion.p
      className="mt-6 max-w-[520px] text-[15px] leading-7 text-muted md:mt-8 md:text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

// Scroll-triggered reveal wrapper
export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Focus area with staggered reveal
export function FocusArea({
  num,
  title,
  desc,
  index,
}: {
  num: string;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const baseDelay = index * 0.15;

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <motion.span
        className="font-mono text-xs tracking-[0.1em] text-gold uppercase"
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.4, delay: baseDelay, ease: "easeOut" }}
      >
        {num}
      </motion.span>
      <motion.h3
        className="font-display text-xl font-semibold tracking-[-0.02em] text-white md:text-[22px]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          delay: baseDelay + 0.1,
          ease: "easeOut",
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-sm leading-6 text-muted md:text-[15px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: baseDelay + 0.25 }}
      >
        {desc}
      </motion.p>
    </div>
  );
}

// Raze section slide up
export function RazeReveal({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-b from-[#F5F0FF] to-[#EDE5FF] px-6 py-12 md:px-16 md:py-20"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.section>
  );
}

// Mascot bounce in
export function MascotReveal({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.5, y: 30 }
      }
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: [0.34, 1.56, 0.64, 1], // spring-like
      }}
    >
      {children}
    </motion.div>
  );
}

// Chat card messages appearing one by one
export function ChatMessage({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 12, scale: 0.95 }
      }
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Ethos text — line by line reveal
export function EthosReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const lines = [
    "We don\u2019t wait for the ecosystem to catch up. We",
    "build the missing pieces, stress-test them in",
    "production, and open-source the results.",
  ];

  return (
    <div ref={ref}>
      <motion.span
        className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        Ethos
      </motion.span>
      <p className="mt-4 max-w-[900px] font-display text-[26px] leading-9 font-normal tracking-[-0.02em] text-white md:mt-6 md:text-[40px] md:leading-[52px] md:tracking-[-0.03em]">
        {lines.map((line, i) => (
          <motion.span
            key={i}
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.5,
              delay: 0.2 + i * 0.2,
              ease: "easeOut",
            }}
          >
            {line}
          </motion.span>
        ))}
      </p>
    </div>
  );
}

// Divider grow animation
export function AnimatedDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="px-6 md:px-16">
      <motion.div
        className="h-px w-full bg-border"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}
