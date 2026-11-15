import { useEffect, useState } from 'react'
import Particles from '@/components/Particles'

// The page's single animated background (React Bits Particles) as a fixed layer.
// - Sections that let it show through are marked with data-starfield. While none of them is on screen
//   (the white "What I do" section and the opaque Projects stack cover it), the layer is set to display:none,
//   which makes Particles stop its render loop, so WebGL does no work under the pinned cards.
// - On small screens it draws fewer particles at a lower pixel ratio.
function Starfield() {
  const [covered, setCovered] = useState(false)
  const [small, setSmall] = useState(() => window.matchMedia('(max-width: 639px)').matches)

  useEffect(() => {
    const query = window.matchMedia('(max-width: 639px)')
    const onChange = () => setSmall(query.matches)
    query.addEventListener('change', onChange)

    const visible = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setCovered(visible.size === 0)
    })
    document.querySelectorAll('[data-starfield]').forEach((section) => observer.observe(section))

    return () => {
      query.removeEventListener('change', onChange)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{ display: covered ? 'none' : undefined }}
      aria-hidden="true"
    >
      <Particles
        particleCount={small ? 70 : 140}
        pixelRatio={small ? 1 : undefined}
        particleSpread={10}
        speed={0.1}
        particleColors={['#ffffff', '#c7d2fe', '#e5e5e5']}
        alphaParticles
      />
    </div>
  )
}

export default Starfield
