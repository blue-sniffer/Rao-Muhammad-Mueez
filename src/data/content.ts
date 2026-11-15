import project1Top from '@/assets/placeholders/project-1-top.svg'
import project1Bottom from '@/assets/placeholders/project-1-bottom.svg'
import project1Tall from '@/assets/placeholders/project-1-tall.svg'
import project2Top from '@/assets/placeholders/project-2-top.svg'
import project2Bottom from '@/assets/placeholders/project-2-bottom.svg'
import project2Tall from '@/assets/placeholders/project-2-tall.svg'
import project3Top from '@/assets/placeholders/project-3-top.svg'
import project3Bottom from '@/assets/placeholders/project-3-bottom.svg'
import project3Tall from '@/assets/placeholders/project-3-tall.svg'

// All site copy lives here. Anything marked [PLACEHOLDER: ...] must be replaced.

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What I do', href: '#what-i-do' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  heading: 'Hi, i’m Mueez',
  // Rendered as separate lines, so no separator character can end up at a line edge.
  taglineLines: ['Master’s student in Information Technology', 'Computer Science graduate'],
}

export type TechItem = { label: string; placeholder?: boolean }

export const techStack: TechItem[] = [
  { label: 'React' },
  { label: 'TypeScript' },
  { label: 'Tailwind' },
  { label: 'Vite' },
  { label: '[PLACEHOLDER: add your tech]', placeholder: true },
]

export const about = {
  label: 'About',
  // The only facts on the site so far. Edit freely.
  text: 'I’m Mueez. I’m doing a master’s in Information Technology and I hold a bachelor’s in Computer Science.',
  placeholder: '[PLACEHOLDER: what you focus on] [PLACEHOLDER: a closing line about what you want to do next]',
}

export type ServiceItem = { title: string; description: string; placeholder?: boolean }

export const whatIDo = {
  heading: 'What I do',
  items: [
    { title: '[PLACEHOLDER: first thing you do]', description: '[PLACEHOLDER: one or two sentences about it]', placeholder: true },
    { title: '[PLACEHOLDER: second thing you do]', description: '[PLACEHOLDER: one or two sentences about it]', placeholder: true },
    { title: '[PLACEHOLDER: third thing you do]', description: '[PLACEHOLDER: one or two sentences about it]', placeholder: true },
  ] as ServiceItem[],
}

// ---------------------------------------------------------------------------------------------
// Projects. To add a project, copy one block; to remove one, delete its block. Numbers (01, 02...)
// come from the order. Replace every placeholder image with a real screenshot:
//   top / bottom: wide screenshots, shown about 2:1 on desktop and about square on phones
//   tall: the large image, shown about 4:3 on desktop and about 2:3 (portrait) on phones
// Images are cropped to fill their tile, so keep the important part in the centre.
// ---------------------------------------------------------------------------------------------

export type ProjectItem = {
  name: string
  category: string
  description: string
  /** Use '#' until there is a real URL; the button then does nothing when clicked. */
  href: string
  images: { top: string; bottom: string; tall: string }
  /** true = this entry is still placeholder text and is shown in magenta. */
  placeholder?: boolean
}

export const projectsSection = { heading: 'Projects', buttonLabel: 'Live Project' }

export const projects: ProjectItem[] = [
  {
    name: '[PLACEHOLDER: project 1 name]',
    category: '[PLACEHOLDER: category]',
    description: '[PLACEHOLDER: one sentence about project 1]',
    href: '#',
    images: { top: project1Top, bottom: project1Bottom, tall: project1Tall },
    placeholder: true,
  },
  {
    name: '[PLACEHOLDER: project 2 name]',
    category: '[PLACEHOLDER: category]',
    description: '[PLACEHOLDER: one sentence about project 2]',
    href: '#',
    images: { top: project2Top, bottom: project2Bottom, tall: project2Tall },
    placeholder: true,
  },
  {
    name: '[PLACEHOLDER: project 3 name]',
    category: '[PLACEHOLDER: category]',
    description: '[PLACEHOLDER: one sentence about project 3]',
    href: '#',
    images: { top: project3Top, bottom: project3Bottom, tall: project3Tall },
    placeholder: true,
  },
]

// Contact details: this is the only place they are written. Edit here.
export const contact = {
  heading: 'Contact',
  intro: 'Have a question or want to work together? Send me a message.',
  email: 'raomuhammadmueez@gmail.com',
  // External profile links. Each opens in a new tab; ariaLabel is what screen readers announce.
  socials: [
    { label: 'GitHub', href: 'https://github.com/blue-sniffer', ariaLabel: 'GitHub profile (opens in a new tab)' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rao-muhammad-mueez',
      ariaLabel: 'LinkedIn profile (opens in a new tab)',
    },
    { label: 'Medium', href: 'https://medium.com/@raomueez0', ariaLabel: 'Medium blog (opens in a new tab)' },
  ],
}
