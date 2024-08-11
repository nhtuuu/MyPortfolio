import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container, type ISourceOptions } from '@tsparticles/engine'
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from 'tsparticles' // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

interface Props {
  className?: string
}

export default function ParticlesComponent({ className }: Props) {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 99
      },
      background: {
        color: {
          value: '#011627'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'connect'
          }
        },
        modes: {
          connect: {
            distance: 80,
            radius: 60,
            links: {
              color: '#FF7F00',
              opacity: 0.5
            }
          }
        }
      },
      particles: {
        number: {
          value: 500,
          density: {
            enable: true
          }
        },
        color: {
          value: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: { min: 0.3, max: 1 }
        },
        move: {
          enable: true,
          speed: 7,
          random: false
        }
      },
      detectRetina: true
    }),
    []
  )

  if (init) {
    return <Particles className={className} id='tsparticles' particlesLoaded={particlesLoaded} options={options} />
  }

  return <></>
}
