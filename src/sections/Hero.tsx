import type { CSSProperties } from 'react'
import AnimatedContent from '@/components/AnimatedContent'
import ContactButton from '@/components/ContactButton'
import Magnet from '@/components/Magnet'
import { hero, navLinks } from '@/data/content'
import portrait from '@/assets/portrait.webp'

// --f is the heading font size, --top is where the portrait area starts:
// just above the bottom edge of the heading, so the head only overlaps its lower part.
const heroVars = { '--top': 'calc(var(--nav) + var(--f) * 0.66)' } as CSSProperties

// Optional faint blue glow behind the head, in the portrait's rim-light blue.
const SHOW_GLOW = true

function Hero() {
  return (
    <section
      id="top"
      data-starfield
      style={heroVars}
      className="relative flex h-svh min-h-[560px] flex-col overflow-x-clip [--f:15.5vw] [--nav:3.5rem] sm:[--f:13vw] md:[--f:14vw] md:[--nav:4rem] lg:[--f:14.5vw] lg:[--nav:4.25rem]"
    >
      <AnimatedContent trigger="mount" distance={20} reverse duration={0.7} className="relative z-20">
        <nav className="flex h-(--nav) items-end justify-between gap-3 px-5 md:px-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8rem] font-medium tracking-wider whitespace-nowrap text-[#D7E2EA] uppercase transition-opacity duration-200 hover:opacity-70 sm:text-sm md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </AnimatedContent>

      <div className="overflow-hidden">
        <AnimatedContent trigger="mount" distance={40} duration={0.7} delay={0.15}>
          <h1 className="hero-heading w-full text-center text-[length:var(--f)] leading-none font-black tracking-tight whitespace-nowrap uppercase">
            {hero.heading}
          </h1>
        </AnimatedContent>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-5 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <AnimatedContent trigger="mount" distance={20} duration={0.7} delay={0.35}>
          <p
            className="max-w-[15.5em] leading-snug font-light tracking-wide text-[#D7E2EA] uppercase"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {hero.taglineLines.map((line) => (
              <span key={line} className="block text-balance">
                {line}
              </span>
            ))}
          </p>
        </AnimatedContent>
        <AnimatedContent trigger="mount" distance={20} duration={0.7} delay={0.5}>
          <ContactButton />
        </AnimatedContent>
      </div>

      {/* Avatar: a floating head anchored just above the bottom edge of the heading, with a gap left below it. */}
      <div className="pointer-events-none absolute inset-x-0 top-(--top) bottom-0 z-10 flex items-start justify-center">
        <AnimatedContent trigger="mount" distance={30} duration={0.7} delay={0.6}>
          <Magnet
            padding={150}
            magnetStrength={3}
            className="pointer-events-auto"
            style={{ display: 'block' }}
          >
            {/* 818x1044 floating head, already centred in its frame. Width is capped at the native 818px so it is
                never upscaled, at 98vw on phones, and so that its height is 92% of the space under the heading. */}
            <div className="relative w-[min(818px,98vw,calc((100svh-var(--top))*0.72))]">
              {SHOW_GLOW && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-[45%] left-1/2 aspect-square w-[210%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(46, 112, 238, 0.13) 0%, rgba(46, 112, 238, 0.10) 20%, rgba(46, 112, 238, 0.06) 42%, rgba(46, 112, 238, 0.025) 66%, rgba(46, 112, 238, 0.007) 85%, rgba(46, 112, 238, 0) 100%)',
                  }}
                />
              )}
              <img
                src={portrait}
                alt="3D avatar of Mueez"
                width={818}
                height={1044}
                draggable={false}
                className="relative block h-auto w-full max-w-none select-none"
              />
            </div>
          </Magnet>
        </AnimatedContent>
      </div>
    </section>
  )
}

export default Hero
