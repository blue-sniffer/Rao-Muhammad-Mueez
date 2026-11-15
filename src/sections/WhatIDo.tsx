import AnimatedContent from '@/components/AnimatedContent'
import { whatIDo } from '@/data/content'
import { cn } from '@/lib/utils'

function WhatIDo() {
  return (
    <section
      id="what-i-do"
      aria-labelledby="what-i-do-heading"
      className="rounded-t-[40px] bg-white px-5 pt-16 pb-20 text-[#0C0C0C] md:rounded-t-[60px] md:px-10 md:pt-24 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <AnimatedContent distance={40} duration={0.7}>
          <h2
            id="what-i-do-heading"
            className="text-[clamp(2.75rem,9vw,7.5rem)] leading-none font-black tracking-tight uppercase"
          >
            {whatIDo.heading}
          </h2>
        </AnimatedContent>

        <ol className="mt-10 md:mt-16">
          {whatIDo.items.map((item, index) => (
            <li key={index} className="border-t border-[#0C0C0C]/15 last:border-b">
              <AnimatedContent distance={30} duration={0.6} delay={index * 0.08}>
                <div className="grid gap-x-10 gap-y-2 py-7 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1fr)] md:items-baseline md:py-10">
                  <span className="text-2xl font-black text-[#0C0C0C]/50 md:text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className={cn(
                      'text-xl font-medium uppercase md:text-3xl',
                      item.placeholder && 'text-[#A10095]',
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className={cn('font-light md:text-xl', item.placeholder ? 'text-[#A10095]' : 'text-[#0C0C0C]/75')}>
                    {item.description}
                  </p>
                </div>
              </AnimatedContent>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default WhatIDo
