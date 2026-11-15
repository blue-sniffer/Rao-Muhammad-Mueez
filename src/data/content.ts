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
