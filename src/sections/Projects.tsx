import type { MouseEvent } from 'react'
import AnimatedContent from '@/components/AnimatedContent'
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'
import { projects, projectsSection, type ProjectItem } from '@/data/content'
import { cn } from '@/lib/utils'

const radius = 'rounded-[28px] sm:rounded-[40px] md:rounded-[60px]'
const cardRadius = 'rounded-[28px]! sm:rounded-[40px]! md:rounded-[60px]!'
const tileHeight = 'h-[clamp(104px,16vw,230px)]'

// A link that still points to "#" is a placeholder: do nothing instead of jumping to the top of the page.
const ignoreEmptyLink = (event: MouseEvent<HTMLAnchorElement>) => {
  if (event.currentTarget.getAttribute('href') === '#') event.preventDefault()
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const mark = project.placeholder ? 'text-[#E24BD6]' : 'text-[#D7E2EA]'
  return (
    <article>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
        <span className="hero-heading text-5xl leading-none font-black sm:text-6xl md:text-8xl">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1 basis-40">
          <p
            className={cn(
              'text-xs font-medium tracking-[0.2em] uppercase md:text-sm',
              project.placeholder ? mark : 'text-[#D7E2EA]/60',
            )}
          >
            {project.category}
          </p>
          <h3 className={cn('text-lg leading-tight font-medium uppercase sm:text-2xl md:text-4xl', mark)}>
            {project.name}
          </h3>
          <p
            className={cn(
              'mt-1 hidden text-sm font-light sm:block md:text-lg',
              project.placeholder ? mark : 'text-[#D7E2EA]/75',
            )}
          >
            {project.description}
          </p>
        </div>
        <a
          href={project.href}
          onClick={ignoreEmptyLink}
          className="inline-block rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs font-medium tracking-widest whitespace-nowrap text-[#D7E2EA] uppercase transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
        >
          {projectsSection.buttonLabel}
          {project.href === '#' && <span className="text-[#E24BD6]"> [placeholder link]</span>}
        </a>
      </div>

      {/* Two stacked wide images on the left (40%), one tall image on the right (60%). */}
      <div className="mt-4 grid grid-cols-[2fr_3fr] gap-3 sm:mt-6 sm:gap-4">
        <div className="grid gap-3 sm:gap-4">
          <img src={project.images.top} alt="" loading="lazy" className={cn('w-full object-cover', tileHeight, radius)} />
          <img
            src={project.images.bottom}
            alt=""
            loading="lazy"
            className={cn('w-full object-cover', tileHeight, radius)}
          />
        </div>
        <div className="relative">
          <img
            src={project.images.tall}
            alt=""
            loading="lazy"
            className={cn('absolute inset-0 h-full w-full object-cover', radius)}
          />
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative -mt-10 rounded-t-[40px] bg-[#0C0C0C] pt-16 pb-10 sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px] md:pt-24"
    >
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-6xl">
        <AnimatedContent distance={40} duration={0.7}>
          <h2
            id="projects-heading"
            className="hero-heading text-[clamp(2.75rem,9vw,7.5rem)] leading-none font-black tracking-tight uppercase"
          >
            {projectsSection.heading}
          </h2>
        </AnimatedContent>
        </div>
      </div>

      {/* React Bits ScrollStack on the page scroll. Its wheel smoothing is off so the page keeps its native scroll. */}
      <ScrollStack
        useWindowScroll
        smoothScroll={false}
        stackPosition="11%"
        itemDistance={90}
        itemStackDistance={18}
        itemScale={0.035}
        baseScale={0.88}
        dimAmount={0.3}
        holdDistance={120}
        className="mx-auto mt-10 max-w-[82rem] md:mt-16"
      >
        {projects.map((project, index) => (
          <ScrollStackItem
            key={index}
            itemClassName={cn('h-auto! border-2 border-[#D7E2EA] p-4! sm:p-6! md:p-8!', cardRadius)}
            style={{ background: '#0C0C0C', color: '#D7E2EA', boxShadow: 'none' }}
          >
            <ProjectCard project={project} index={index} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  )
}

export default Projects
