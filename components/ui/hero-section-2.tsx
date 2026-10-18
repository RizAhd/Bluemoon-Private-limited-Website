"use client";

import React from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

// Icon component for contact details
const InfoIcon = ({ type }: { type: "email" | "phone" | "address" }) => {
  const icons = {
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  };
  return (
    <span className="mr-2.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent" aria-hidden="true">
      {icons[type]}
    </span>
  );
};

type ContactItem = { label: string; href: string; external?: boolean };

// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, "title" | "ref"> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
  backgroundImage: string;
  backgroundImageAlt?: string;
  contactInfo: {
    email: ContactItem;
    phone: ContactItem;
    address: ContactItem;
  };
}

// Animation variants for the container to orchestrate children animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Animation variants for individual text/UI elements
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      secondaryAction,
      backgroundImage,
      backgroundImageAlt,
      contactInfo,
      ...props
    },
    ref
  ) => {
    const contacts = [
      { type: "phone" as const, ...contactInfo.phone },
      { type: "email" as const, ...contactInfo.email },
      { type: "address" as const, ...contactInfo.address },
    ];

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:min-h-[calc(100svh-5.5rem)] md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between px-5 py-10 sm:px-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 xl:pl-[max(4rem,calc((100vw-1240px)/2))]">
          {/* Top Section: Logo & Main Content */}
          <div>
            {(logo || slogan) && (
              <motion.div className="mb-10 md:mb-12" variants={itemVariants}>
                <div className="flex items-center">
                  {logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={asset(logo.url)} alt={logo.alt} className="mr-3 h-8" />
                  )}
                  <div>
                    {logo?.text && <p className="m-0! text-lg font-bold text-foreground">{logo.text}</p>}
                    {slogan && (
                      <p className="m-0! text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {slogan}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div variants={containerVariants}>
              <motion.h1
                className="m-0! max-w-[16ch] text-4xl font-bold leading-[1.04] text-foreground md:text-5xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div className="my-7 h-1 w-20 rounded-full bg-primary" variants={itemVariants} />
              <motion.p
                className="mb-9! max-w-md text-base text-muted-foreground md:text-lg"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
                <Link className="btn btn--secondary" href={callToAction.href}>
                  {callToAction.text}
                </Link>
                {secondaryAction && (
                  <Link className="btn btn--ghost" href={secondaryAction.href}>
                    {secondaryAction.text}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section: Footer Info */}
          <motion.div className="mt-12 w-full border-t border-border pt-6" variants={itemVariants}>
            <ul className="m-0 flex list-none flex-col gap-4 p-0 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-8">
              {contacts.map((c) => (
                <li key={c.type}>
                  <a
                    href={c.href}
                    className="flex items-center no-underline transition-colors hover:text-primary!"
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <InfoIcon type={c.type} />
                    <span className="whitespace-nowrap">{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div
          className="relative min-h-80 w-full bg-navy bg-cover bg-center md:min-h-full md:w-1/2 lg:w-2/5"
          style={{ backgroundImage: `url(${asset(backgroundImage)})` }}
          role="img"
          aria-label={backgroundImageAlt}
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "circOut" }}
        />
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
