import LogoLoop, { type LogoItem } from '@/components/LogoLoop'
import { techStack, type TechItem } from '@/data/content'
import { cn } from '@/lib/utils'

const toLogo = (item: TechItem): LogoItem => ({
  title: item.label,
  node: (
    <span
      className={cn(
        'inline-block rounded-full border-2 px-8 py-3 font-medium tracking-wider whitespace-nowrap uppercase',
        item.placeholder
          ? 'border-dashed border-[#B600A8] text-[#B600A8]'
          : 'border-[#D7E2EA]/25 text-[#D7E2EA]',
      )}
    >
      {item.label}
    </span>
  ),
})

const rowOne = techStack.map(toLogo)
const rowTwo = [...techStack].reverse().map(toLogo)

function TechMarquee() {
  return (
    <section aria-label="Tech stack" className="flex flex-col gap-3 pt-24 pb-10 sm:pt-32 md:pt-40">
      <LogoLoop logos={rowOne} direction="right" speed={60} logoHeight={26} gap={12} scrollBoost={1} draggable={false} ariaLabel="Tech stack, row one" />
      <LogoLoop logos={rowTwo} direction="left" speed={60} logoHeight={26} gap={12} scrollBoost={1} draggable={false} ariaLabel="Tech stack, row two" />
    </section>
  )
}

export default TechMarquee
