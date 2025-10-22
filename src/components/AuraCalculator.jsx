import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import batman from '../assets/batman.png'
import darthvader from '../assets/darthvader.png'
import joao from '../assets/joao.png'
import ironman from '../assets/ironman.png'
import jack from '../assets/jack.png'
import lebron from '../assets/lebron.png'
import Hero from './Hero'

const images = [batman, darthvader, joao, ironman, jack]

function AuraCalculator() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)
  const [fotoAleatoria, setFotoAleatoria] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    let aleatoria = Math.floor(Math.random() * 5)
    setFotoAleatoria(aleatoria)
  }, [])

  return (
    <div>
      <div className="bg-[#2D1859] h-full ">

        <Hero numeroFoto={fotoAleatoria}></Hero>

        <div className="text-white font-bold text-xl flex flex-col items-center justify-center p-10">
          <h1 className="">Personagens com mais AURA</h1>

          <div className='max-w-120 lg:max-w-350'>
            {/* Incicio do Carrossel */}
            <motion.div ref={carousel} className='carousel cursor-grab overflow-hidden' whileTap={{ cursor: "grabbing" }}>
              <motion.div className='flex'
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >

                {images.map(image => (
                  <motion.div className='min-w-100 p-5' key={image}>
                    <img src={image} alt="Texto alt" className="w-full rounded-2xl select-none pointer-events-none shadow-xl"
                      draggable="false" />
                  </motion.div>
                ))}

              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="bg-[#1A1040] flex flex-col items-center justify-center h-full p-5 lg:grid lg:grid-cols-5 lg:pt-15">
          <div className='lg:col-start-2 col-span-2 lg:flex lg:flex-col lg:gap-15'>

            <h1 className=" text-white font-bold text-xl">O que é AURA?</h1>
            <p className=" text-white font-semibold">Aura é o impacto emocional e simbólico que um personagem exerce sobre os outros — um “campo invisível” de presença, mistério ou poder, criado pela combinação de narrativa, estética e comportamento.</p>

            <div className=" text-white font-bold text-xl flex flex-col items-center justify-center lg:items-start">
              <button className="bg-[#A66832] w-70 h-10 rounded-2xl transition duration-300 ease-in-out hover:bg-white hover:border-[#A66832] hover:border-2 hover:text-[#A66832]">Calcule aqui sua AURA</button>
            </div>

          </div>

          <div className='hidden lg:flex lg:col-start-4'>
            <img src={lebron} alt="GOAT JAMES" className='rounded-2xl w-80 shadow-2xl border-4 border-[#A66832] select-none pointer-events-none' />
          </div>


        </div>
      </div>
    </div>
  )
}
export default AuraCalculator