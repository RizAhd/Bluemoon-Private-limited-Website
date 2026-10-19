/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface NavLinkItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface FluidHeroNavbarProps {
  /** Brand text to display during intro splash and in navbar. */
  brandName?: string;
  /** Smaller line under the brand in the intro (e.g. legal suffix) */
  brandTagline?: string;
  /** Optional custom logo node to override the default text wordmark */
  brandLogo?: React.ReactNode;
  /** Optional background video URL if video hero is preferred */
  videoSrc?: string;
  /** Hero background image (wide, desktop) */
  heroImage?: string;
  /** Optional portrait crop of the hero image for phones */
  heroImageMobile?: string;
  /** Alt text for the hero image */
  heroImageAlt?: string;
  /** First line of hero headline */
  headlineFirst?: string;
  /** Second line of hero headline */
  headlineSecond?: string;
  /** Optional kicker tag/subtitle above headline */
  headlineKicker?: string;
  /** Optional supporting paragraph under the headline */
  description?: string;
  /** Optional actions (buttons) and details rendered under the headline */
  children?: React.ReactNode;
  /** Call to action button label in navbar */
  ctaText?: string;
  /** Call to action link */
  ctaHref?: string;
  /** Navigation links array */
  navLinks?: NavLinkItem[];
  /** Whether to play the intro splash animation. Defaults to true */
  showIntroAnimation?: boolean;
  /** Whether to render the floating responsive navbar. Defaults to true */
  showNavbar?: boolean;
  /** Primary accent color (hex, rgb, hsl). */
  accentColor?: string;
  /** Optional custom class name for the outermost container */
  className?: string;
  /** Callback fired when the intro animation completes */
  onIntroComplete?: () => void;
  /** Callback fired when the hero entrance animation finishes */
  onHeroComplete?: () => void;
}

/** sessionStorage key: the intro plays once per browser session. */
const INTRO_SEEN_KEY = 'bm-intro-seen';

/**
 * Runs before the hero paints. When the intro was already seen this session,
 * or the visitor prefers reduced motion, it flags <html> so CSS shows the
 * finished hero straight away with no splash and no entrance delay.
 */
const INTRO_GATE_SCRIPT = `try{if(sessionStorage.getItem('${INTRO_SEEN_KEY}')||matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.introSeen='1'}}catch(e){}`;

function shouldSkipIntro() {
  if (typeof window === 'undefined') return false;
  try {
    return (
      document.documentElement.dataset.introSeen === '1' ||
      sessionStorage.getItem(INTRO_SEEN_KEY) === '1' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  } catch {
    return false;
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, '1');
  } catch {
    // storage blocked: intro simply plays again next time
  }
  document.documentElement.dataset.introSeen = '1';
}

// ============================================================================
// Self-Contained Vector Icons & Emblems
// ============================================================================

/** Crescent moon emblem for the Bluemoon brand */
export function MoonMark({
  className = '',
  style = {},
  fill = 'currentColor',
  size = 48,
}: {
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  size?: number | string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M15.6 2.2a10 10 0 1 0 6.2 13.5A8.2 8.2 0 0 1 15.6 2.2Z"
      />
    </svg>
  );
}

function SpeakerMutedIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function SpeakerActiveIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function MenuIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ============================================================================
// Brand Wordmark Renderer
// ============================================================================

export function BrandWordmark({
  brandName = 'Bluemoon',
  isScrolled = false,
}: {
  brandName?: string;
  accentColor?: string;
  isScrolled?: boolean;
}) {
  return (
    <div className="flex items-center select-none group">
      <div
        className={`flex items-baseline font-semibold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
          isScrolled ? 'text-neutral-900' : 'text-white'
        }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <span>{brandName}</span>
      </div>
    </div>
  );
}

// ============================================================================
// Subcomponent 1: Intro Animation (Fully Responsive)
// ============================================================================

interface IntroOverlayProps {
  brandName: string;
  brandTagline?: string;
  accentColor: string;
  onComplete: () => void;
}

// Intro timeline (ms). Kept short so the hero arrives in about 1.4s.
const INTRO_SPIN_AT = 40; // crescent spins in
const INTRO_REVEAL_AT = 380; // lockup slides into place, wordmark rises
const INTRO_EXIT_AT = 1250; // overlay dissolves, hero entrance starts
const INTRO_UNMOUNT_AT = 1900;
const HERO_ENTRANCE_MS = 1000; // keep in sync with the 1s fluidHeroEntrance keyframes

function IntroOverlay({ brandName, brandTagline, accentColor, onComplete }: IntroOverlayProps) {
  // Stages: 1 idle, 2 crescent spins in, 3 lockup revealed, 4 dissolving, 5 gone
  const [stage, setStage] = useState(1);
  const [unmounted, setUnmounted] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), INTRO_SPIN_AT);
    const t2 = setTimeout(() => setStage(3), INTRO_REVEAL_AT);
    const t3 = setTimeout(() => {
      setStage(4);
      onCompleteRef.current?.();
      window.dispatchEvent(new CustomEvent('intro-animation-complete'));
    }, INTRO_EXIT_AT);
    const t4 = setTimeout(() => {
      setStage(5);
      setUnmounted(true);
    }, INTRO_UNMOUNT_AT);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (unmounted) return null;

  const isAnimating = stage >= 2;
  const isRevealed = stage >= 3;
  const isFading = stage >= 4;
  const letters = brandName.split('');

  return (
    <div
      className={`fluid-intro fixed inset-0 z-[99999] bg-white flex items-center justify-center overflow-hidden px-5 select-none transition-[opacity,visibility,transform] duration-[650ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        isFading ? 'opacity-0 scale-[1.02] invisible pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'
      }`}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center relative max-w-full transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isRevealed ? 'translate-x-0' : 'translate-x-8 sm:translate-x-14'
        } ${isFading ? '-translate-y-[14vh] opacity-0 duration-[650ms]' : ''}`}
      >
        {/* Animated crescent mark */}
        <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
          <div
            className={`w-full h-full flex items-center justify-center will-change-transform ${
              isAnimating ? 'fluid-star-intro' : 'scale-[0.12] opacity-0'
            }`}
          >
            <MoonMark fill={accentColor} size="100%" />
          </div>
        </div>

        {/* Wordmark: name rises letter by letter, legal suffix slides up beneath */}
        <div className="flex flex-col ml-3 sm:ml-4">
          <div className="flex items-end overflow-hidden h-[1.15em] text-[clamp(2rem,6vw,3.4rem)] leading-none">
            {letters.map((char, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <span
                  className={`inline-block font-semibold tracking-[-0.045em] text-[#0b1f4d] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                    isRevealed ? 'translate-y-0' : 'translate-y-[110%]'
                  }`}
                  style={{
                    transitionDelay: `${index * 28}ms`,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {char}
                </span>
              </span>
            ))}
          </div>
          {brandTagline && (
            <div className="overflow-hidden mt-1 sm:mt-1.5">
              <span
                className={`block whitespace-nowrap font-semibold uppercase text-[clamp(0.56rem,1.75vw,0.86rem)] tracking-[0.2em] text-[#1d4ed8] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                  isRevealed ? 'translate-y-0' : 'translate-y-[120%]'
                }`}
                style={{ transitionDelay: '220ms', fontFamily: 'var(--font-display)' }}
              >
                {brandTagline}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Subcomponent 2: Floating Responsive Navbar
// ============================================================================

interface NavbarProps {
  brandName: string;
  brandLogo?: React.ReactNode;
  navLinks: NavLinkItem[];
  ctaText: string;
  ctaHref: string;
  visible: boolean;
  accentColor: string;
}

function FloatingNavbar({
  brandName,
  brandLogo,
  navLinks,
  ctaText,
  ctaHref,
  visible,
  accentColor,
}: NavbarProps) {
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleSelect = (name: string) => {
    setActiveItem(name);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1002] px-4 sm:px-8 xl:px-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
          visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-6 pointer-events-none'
        } ${
          mobileMenuOpen
            ? 'bg-transparent border-b border-transparent py-4 sm:py-5'
            : scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.06)] py-2.5 sm:py-3.5'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <a href="/" className="flex items-center gap-2 outline-none select-none" aria-label={`${brandName} Home`}>
          {brandLogo ? (
            brandLogo
          ) : (
            <BrandWordmark brandName={brandName} accentColor={accentColor} isScrolled={mobileMenuOpen ? false : scrolled} />
          )}
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 list-none m-0 p-0 ml-auto mr-5 xl:mr-8">
          {navLinks.map((link) => {
            const isActive = activeItem === link.name;
            return (
              <div key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={() => handleSelect(link.name)}
                  className={`text-xs xl:text-sm tracking-wide font-medium transition-all duration-300 py-1 inline-block ${
                    scrolled
                      ? isActive
                        ? 'text-neutral-900 font-semibold'
                        : 'text-neutral-600 hover:text-neutral-950'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href={ctaHref}
            className={`px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-[11px] xl:text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow hover:scale-105 active:scale-95 ${
              scrolled ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-white/90 backdrop-blur-md text-neutral-900 hover:bg-white'
            }`}
          >
            {ctaText}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors z-[1002] ${
            mobileMenuOpen ? 'text-white hover:bg-white/10' : scrolled ? 'text-neutral-900 hover:bg-black/5' : 'text-white hover:bg-white/10'
          }`}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      <div
        className={`fixed inset-0 z-[1001] lg:hidden bg-neutral-950/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-center items-center px-6 sm:px-10 py-12 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="flex flex-col gap-4 sm:gap-6 list-none m-0 p-0 text-center w-full max-w-sm my-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleSelect(link.name)}
                className={`block py-1.5 text-xl sm:text-2xl font-light tracking-tight transition-colors duration-200 ${
                  activeItem === link.name ? 'text-white font-medium' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 sm:pt-6">
            <a
              href={ctaHref}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white text-neutral-900 shadow-xl transition-transform active:scale-95 text-center"
            >
              {ctaText}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

// ============================================================================
// Subcomponent 3: Full Screen Fluid Hero Banner (Fully Responsive)
// ============================================================================

interface HeroBannerProps {
  stage: 'idle' | 'animating' | 'done';
  videoSrc?: string;
  heroImage: string;
  heroImageMobile?: string;
  heroImageAlt: string;
  headlineFirst: string;
  headlineSecond: string;
  headlineKicker?: string;
  description?: string;
  children?: React.ReactNode;
}

function HeroBannerSection({
  stage,
  videoSrc,
  heroImage,
  heroImageMobile,
  heroImageAlt,
  headlineFirst,
  headlineSecond,
  headlineKicker,
  description,
  children,
}: HeroBannerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) videoRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [stage]);

  const frameClass =
    stage === 'animating'
      ? 'fluid-hero-animating'
      : stage === 'done'
      ? 'translate-y-0 scale-100 opacity-100'
      : 'translate-y-[105vh] scale-[0.78] opacity-0';

  const shown = stage !== 'idle';
  const shouldRenderVideo = Boolean(videoSrc && !videoError);
  // Reveal helper: text slides up from a clipped line.
  const rise = (delay: string) => ({
    className: `transition-transform duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
      shown ? 'translate-y-0' : 'translate-y-[120%]'
    }`,
    style: { transitionDelay: delay },
  });
  const fade = (delay: string) => ({
    className: `transition-[opacity,transform] duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`,
    style: { transitionDelay: delay },
  });

  return (
    <section className="fluid-hero relative w-full h-[calc(100svh-var(--header-h,74px))] min-h-[560px] max-h-[980px] overflow-hidden bg-white flex items-center justify-center">
      <div className={`fluid-hero-frame relative w-full h-full overflow-hidden origin-center will-change-transform ${frameClass}`}>
        {/* Background Visual Layer with Counter-Scale */}
        <div
          className={`absolute inset-0 w-full h-full overflow-hidden will-change-transform ${
            stage === 'animating' ? 'fluid-media-counter-scale' : 'scale-100'
          }`}
        >
          {shouldRenderVideo ? (
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <picture>
              {heroImageMobile && <source media="(max-width: 767px)" srcSet={heroImageMobile} />}
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-full object-cover object-center select-none"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          )}

          {/* Navy tint so white text always reads clearly */}
          <div className="absolute inset-0 pointer-events-none z-[2] bg-[linear-gradient(180deg,rgba(6,18,46,0.62)_0%,rgba(6,18,46,0.42)_42%,rgba(6,18,46,0.78)_100%)]" />
          {/* Extra soft shade behind the centred text block */}
          <div className="absolute inset-0 pointer-events-none z-[2] bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,rgba(6,18,46,0.42),transparent_75%)]" />
        </div>

        {/* Centered headline, copy and actions */}
        <div className="absolute inset-0 z-[3] flex flex-col justify-center items-center text-center px-5 sm:px-6 md:px-8 lg:px-12 max-w-5xl lg:max-w-7xl mx-auto">
          {headlineKicker && (
            <div className="overflow-hidden mb-3 sm:mb-4">
              <span
                {...rise('0.4s')}
                className={`${rise('0.4s').className} inline-block text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] font-semibold text-white/85`}
              >
                {headlineKicker}
              </span>
            </div>
          )}

          <div className="overflow-hidden block max-w-full">
            <h1
              {...rise('0.55s')}
              className={`${rise('0.55s').className} text-white! font-semibold! text-[clamp(2.1rem,6.2vw,4.5rem)]! lg:text-[clamp(2.6rem,4.4vw,4.75rem)]! tracking-[-0.035em]! leading-[1.08]! m-0! max-w-[92vw] sm:max-w-4xl lg:max-w-none break-words lg:break-normal lg:whitespace-nowrap`}
            >
              {headlineFirst}
            </h1>
          </div>

          <div className="overflow-hidden block max-w-full mt-1 sm:mt-1.5">
            <p
              {...rise('0.72s')}
              className={`${rise('0.72s').className} text-[#93c5fd]! font-semibold text-[clamp(2.1rem,6.2vw,4.5rem)] lg:text-[clamp(2.6rem,4.4vw,4.75rem)] tracking-[-0.035em] leading-[1.08] m-0! max-w-[92vw] sm:max-w-4xl lg:max-w-none break-words lg:break-normal lg:whitespace-nowrap`}
              style={{ ...rise('0.72s').style, fontFamily: 'var(--font-display)' }}
            >
              {headlineSecond}
            </p>
          </div>

          {description && (
            <p
              {...fade('0.95s')}
              className={`${fade('0.95s').className} mt-5! sm:mt-6! mb-0! max-w-[38rem] text-base sm:text-lg leading-relaxed text-white/85`}
            >
              {description}
            </p>
          )}

          {children && (
            <div {...fade('1.1s')} className={`${fade('1.1s').className} mt-7 sm:mt-9 w-full flex flex-col items-center`}>
              {children}
            </div>
          )}
        </div>

        {shouldRenderVideo && (
          <button
            type="button"
            onClick={toggleAudio}
            className={`absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white flex items-center justify-center cursor-pointer outline-none transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-black/70 shadow-lg ${
              shown ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
            }`}
            aria-label={isMuted ? 'Turn audio on' : 'Turn audio off'}
            title={isMuted ? 'Turn audio on' : 'Turn audio off'}
          >
            {isMuted ? <SpeakerMutedIcon /> : <SpeakerActiveIcon />}
          </button>
        )}
      </div>
    </section>
  );
}

// ============================================================================
// Main Combined Component
// ============================================================================

export default function FluidHeroNavbar({
  brandName = 'Bluemoon',
  brandTagline,
  brandLogo,
  videoSrc,
  heroImage = '',
  heroImageMobile,
  heroImageAlt = '',
  headlineFirst = '',
  headlineSecond = '',
  headlineKicker = '',
  description,
  children,
  ctaText = 'Request a Quote',
  ctaHref = '/quote',
  navLinks = [],
  showIntroAnimation = true,
  showNavbar = true,
  accentColor = '#1d4ed8',
  className = '',
  onIntroComplete,
  onHeroComplete,
}: FluidHeroNavbarProps) {
  // Hero stages: 'idle' -> 'animating' -> 'done'
  const [stage, setStage] = useState<'idle' | 'animating' | 'done'>(showIntroAnimation ? 'idle' : 'done');
  const [playIntro, setPlayIntro] = useState(showIntroAnimation);
  const [navbarVisible, setNavbarVisible] = useState(!showIntroAnimation);
  const startedRef = useRef(false);

  const startHeroAnimation = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    setStage('animating');

    setTimeout(() => {
      setStage('done');
      setNavbarVisible(true);
      markIntroSeen();
      onHeroComplete?.();
      window.dispatchEvent(new CustomEvent('hero-animation-complete'));
    }, HERO_ENTRANCE_MS);
  }, [onHeroComplete]);

  const handleIntroComplete = useCallback(() => {
    onIntroComplete?.();
    startHeroAnimation();
  }, [onIntroComplete, startHeroAnimation]);

  useEffect(() => {
    if (!showIntroAnimation) return;

    // Already seen this session, or reduced motion: show the finished hero now.
    if (shouldSkipIntro()) {
      startedRef.current = true;
      setPlayIntro(false);
      setStage('done');
      setNavbarVisible(true);
      return;
    }

    // Safety fallback timer if intro completes or is skipped
    const fallbackTimer = setTimeout(() => startHeroAnimation(), INTRO_EXIT_AT + 400);
    return () => clearTimeout(fallbackTimer);
  }, [showIntroAnimation, startHeroAnimation]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {showIntroAnimation && <script dangerouslySetInnerHTML={{ __html: INTRO_GATE_SCRIPT }} />}

      {/* Self-contained CSS animation keyframes */}
      <style>{`
        @keyframes fluidHeroEntrance {
          0% { transform: translateY(105vh) scale(0.78); opacity: 0.4; border-radius: 14px; }
          38% { transform: translateY(0) scale(0.8); opacity: 1; border-radius: 8px; }
          50% { transform: translateY(0) scale(0.82); border-radius: 6px; }
          100% { transform: translateY(0) scale(1); opacity: 1; border-radius: 0px; }
        }
        @keyframes fluidMediaCounterScale {
          0% { transform: scale(1.18); }
          38% { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        @keyframes starIntro {
          0% { transform: scale(0.12) rotate(-160deg); opacity: 0; }
          30% { opacity: 1; }
          75% { transform: scale(1.04) rotate(3deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .fluid-hero-animating {
          animation: fluidHeroEntrance 1s cubic-bezier(0.65, 0, 0.35, 1) forwards !important;
        }
        .fluid-media-counter-scale {
          animation: fluidMediaCounterScale 1s cubic-bezier(0.65, 0, 0.35, 1) forwards !important;
        }
        .fluid-star-intro {
          animation: starIntro 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
          transform-origin: center center;
        }
        /* Intro already seen this session or reduced motion: no splash, hero shown as-is */
        [data-intro-seen] .fluid-intro { display: none !important; }
        [data-intro-seen] .fluid-hero-frame { transform: none !important; translate: none !important; scale: none !important; opacity: 1 !important; animation: none !important; }
        [data-intro-seen] .fluid-hero [class*="translate-y-"] { translate: none !important; transform: none !important; }
        [data-intro-seen] .fluid-hero .opacity-0 { opacity: 1 !important; }
      `}</style>

      {playIntro && <IntroOverlay brandName={brandName} brandTagline={brandTagline} accentColor={accentColor} onComplete={handleIntroComplete} />}

      {showNavbar && (
        <FloatingNavbar
          brandName={brandName}
          brandLogo={brandLogo}
          navLinks={navLinks}
          ctaText={ctaText}
          ctaHref={ctaHref}
          visible={navbarVisible}
          accentColor={accentColor}
        />
      )}

      <HeroBannerSection
        stage={stage}
        videoSrc={videoSrc}
        heroImage={heroImage}
        heroImageMobile={heroImageMobile}
        heroImageAlt={heroImageAlt}
        headlineFirst={headlineFirst}
        headlineSecond={headlineSecond}
        headlineKicker={headlineKicker}
        description={description}
      >
        {children}
      </HeroBannerSection>
    </div>
  );
}
