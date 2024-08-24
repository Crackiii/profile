import { Particles, initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useEffect, useState } from 'react'

import { useAppContext } from './context/AppContext'

const ParticlesC = () => {
  const [init, setInit] = useState(false)
  const { theme } = useAppContext()

  const backgroundColor = theme === 'light' ? '#f5f5f5' : '#3a3a3a22'
  const particlesColor = theme === 'light' ? '#005eff' : '#ffffff'

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: backgroundColor
          }
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: particlesColor
          },
          links: {
            color: particlesColor,
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 200
          },
          opacity: {
            value: 0.1
          },
          shape: {
            type: 'triangle'
          },
          size: {
            value: { min: 1, max: 10 }
          }
        },
        detectRetina: true
      }}
    />
  )
}

ParticlesC.displayName = 'Particles'

export default ParticlesC
