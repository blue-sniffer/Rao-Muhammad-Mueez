import { cn } from '@/lib/utils'

// Custom code: a static gradient pill link. No registry component is needed for a styled anchor.
function ContactButton({ className, href = '#contact' }: { className?: string; href?: string }) {
  return (
    <a
      href={href}
      className={cn(
        'inline-block rounded-full px-8 py-3 text-xs font-medium tracking-widest whitespace-nowrap text-white uppercase outline-2 -outline-offset-[3px] outline-white transition-opacity duration-200 hover:opacity-90 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base',
        className,
      )}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
    >
      Contact Me
    </a>
  )
}

export default ContactButton
