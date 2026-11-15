import AnimatedContent from '@/components/AnimatedContent'
import ContactButton from '@/components/ContactButton'
import { contact } from '@/data/content'

function Contact() {
  return (
    <section
      id="contact"
      data-starfield
      aria-labelledby="contact-heading"
      className="px-5 pt-20 pb-24 text-center md:px-10 md:pt-32 md:pb-36"
    >
      <AnimatedContent distance={40} duration={0.7}>
        <h2
          id="contact-heading"
          className="hero-heading text-[clamp(3rem,13vw,11rem)] leading-none font-black tracking-tight uppercase"
        >
          {contact.heading}
        </h2>
      </AnimatedContent>

      <AnimatedContent distance={30} duration={0.7} delay={0.1}>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light text-[#D7E2EA] md:text-2xl">{contact.intro}</p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <ContactButton href={`mailto:${contact.email}`} />
          <a
            href={`mailto:${contact.email}`}
            className="text-sm break-all text-[#D7E2EA]/80 underline-offset-4 transition-colors duration-200 hover:text-[#D7E2EA] hover:underline md:text-base"
          >
            {contact.email}
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-3 md:gap-5">
          {contact.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="inline-block min-w-36 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-center text-xs font-medium tracking-widest text-[#D7E2EA] uppercase transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:min-w-44 sm:px-10 sm:py-3.5 sm:text-base"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </AnimatedContent>
    </section>
  )
}

export default Contact
