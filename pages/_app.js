import { useCallback } from 'react';
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const tsParticlesOptions = {
  fullscreen: { enable: false, zIndex: -1 },
  particles: {
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      straight: "false",
      random: true

    },
    number: {
      value: 3
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.9
    },
    size: {
      value: { min: 150, max: 400 }
    },
    color: {
      value: "#FDF5EA"
    }
  }
}

export default function App({ Component, pageProps }) {

  const blobsInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);



  return (
    <div>
      <Particles options={tsParticlesOptions} init={blobsInit} className="fixed z-[-1]"/>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  ) 
  
}
