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
