import Starfield from '@/components/Starfield'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import TechMarquee from '@/sections/TechMarquee'
import WhatIDo from '@/sections/WhatIDo'

function App() {
  return (
    <>
      <Starfield />
      <main className="relative z-10 overflow-x-clip">
        <Hero />
        <TechMarquee />
        <About />
        <WhatIDo />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
