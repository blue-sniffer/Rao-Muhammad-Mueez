import ScrollReveal from '@/components/ScrollReveal'
import { about } from '@/data/content'

const revealText = '!font-medium text-[clamp(1.6rem,4.2vw,3.5rem)] leading-[1.3]'

function About() {
  return (
    <section id="about" aria-labelledby="about-label" className="px-5 py-20 md:px-10 md:py-32">
      {/* Editorial layout: the label sits in a narrow left column, the statement fills the rest of the width. */}
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-2 md:grid-cols-[9rem_minmax(0,1fr)] lg:grid-cols-[12rem_minmax(0,1fr)]">
        <p
          id="about-label"
          className="text-sm font-medium tracking-[0.2em] text-[#D7E2EA]/60 uppercase md:pt-[1.1em] md:text-base lg:pt-[1.6em]"
        >
          {about.label}
        </p>
        <div>
          <ScrollReveal
            baseOpacity={0.15}
            baseRotation={2}
            blurStrength={4}
            wordAnimationEnd="bottom 75%"
            containerClassName="!mt-0 !mb-0"
            textClassName={`${revealText} text-[#D7E2EA]`}
          >
            {about.text}
          </ScrollReveal>
          {/* Placeholder copy: magenta so it cannot be mistaken for real text. */}
          <ScrollReveal
            baseOpacity={0.15}
            baseRotation={2}
            blurStrength={4}
            wordAnimationEnd="bottom 75%"
            containerClassName="!mt-4 !mb-0 md:!mt-6"
            textClassName={`${revealText} text-[#E24BD6]`}
          >
            {about.placeholder}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
