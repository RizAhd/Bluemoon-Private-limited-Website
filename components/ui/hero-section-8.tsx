"use client";

import * as React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/asset";

// Define the props for the component
interface FormBuilderHeroProps {
  /** The source URL for the main illustration (ignored when `illustration` is given). */
  illustrationSrc?: string;
  /** An inline illustration element, used instead of an image. */
  illustration?: React.ReactNode;
  /** The alt text for the illustration. */
  illustrationAlt?: string;
  /** The main heading text. */
  title: React.ReactNode;
  /** The descriptive paragraph below the title. */
  description: string;
  /** The text to display on the call-to-action button. */
  buttonText: string;
  /** The URL the button should link to. */
  buttonHref?: string;
  /** Optional second, lower-emphasis action. */
  secondaryAction?: { text: string; href: string };
  /** Short credential or contact facts shown under the actions. */
  details?: { label: string; href?: string; external?: boolean }[];
}

// Animation variants for staggering children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Animation variant for individual elements
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

/**
 * A responsive hero section component with animations.
 */
export const FormBuilderHero: React.FC<FormBuilderHeroProps> = ({
  illustrationSrc,
  illustration,
  illustrationAlt = "Hero Illustration",
  title,
  description,
  buttonText,
  buttonHref = "#",
  secondaryAction,
  details,
}) => {
  return (
    <section className="relative isolate flex w-full items-center justify-center overflow-hidden bg-background px-4 py-20 md:py-32">
      {/* Soft blueprint grid behind the content, fading out toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <motion.div
        className="mx-auto flex max-w-2xl flex-col items-center text-center"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Illustration */}
        <motion.div variants={itemVariants} className="mb-8 w-full">
          {illustration ??
            (illustrationSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={asset(illustrationSrc)}
                alt={illustrationAlt}
                width={256}
                height={257}
                className="mx-auto h-auto w-40 select-none md:w-56"
              />
            ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="mb-4! text-4xl font-bold tracking-tight text-foreground [text-wrap:balance] md:text-5xl"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mb-8! max-w-lg text-base text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="secondary">
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          {secondaryAction && (
            <Button asChild size="lg" variant="ghost">
              <Link href={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          )}
        </motion.div>

        {/* Credentials and contact details */}
        {details && details.length > 0 && (
          <motion.ul
            variants={itemVariants}
            className="m-0! mt-10! flex list-none flex-wrap items-center justify-center gap-x-6 gap-y-2 p-0 text-sm text-muted-foreground"
          >
            {details.map((d) => (
              <li key={d.label}>
                {d.href ? (
                  <a
                    href={d.href}
                    className="no-underline transition-colors hover:text-primary!"
                    {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {d.label}
                  </a>
                ) : (
                  d.label
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </section>
  );
};
