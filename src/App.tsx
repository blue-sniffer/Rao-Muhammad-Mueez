import Particles from '@/components/Particles'
import Hero from '@/sections/Hero'
import TechMarquee from '@/sections/TechMarquee'
import About from '@/sections/About'
import WhatIDo from '@/sections/WhatIDo'

function App() {
  return (
    <>
      {/* The page's single animated background */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <Particles particleCount={200} particleSpread={10} speed={0.1} particleColors={["#ffffff", "#c7d2fe", "#e5e5e5"]} alphaParticles />
      </div>
      <main className="relative z-10 overflow-x-clip">
        <Hero />
        <TechMarquee />
        <About />
        <WhatIDo />
      </main>
    </>
  )
}

export default App
