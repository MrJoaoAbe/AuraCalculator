import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import batman from '../assets/batman.png'
import darthvader from '../assets/darthvader.png'
import joao from '../assets/joao.png'

function AuraCalculator() {
  return (
    <div>
      <div className="bg-[#2D1859] h-screen">
        <div className="text-white font-bold text-xl flex flex-col items-center justify-center p-10">
          <h1 className="">Personagens com mais AURA</h1>
          <Carousel>
            <CarouselContent>
              <CarouselItem><img src={batman} alt="Batman" /></CarouselItem>
              <CarouselItem><img src={darthvader} alt="Darthvader" /></CarouselItem>
              <CarouselItem><img src={joao} alt="Joao" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="bg-[#1A1040] flex flex-col items-center justify-center h-70 p-5">
          <h1 className="text-white font-bold text-xl mb-2">O que é AURA?</h1>
          <p className="text-white font-semibold">Aura é o impacto emocional e simbólico que um personagem exerce sobre os outros — um “campo invisível” de presença, mistério ou poder, criado pela combinação de narrativa, estética e comportamento.</p>

          <div className="text-white font-bold text-xl flex flex-col items-center justify-center mt-7">
            <button className="bg-[#A66832] w-70 h-10 rounded-2xl">Calcule aqui sua AURA</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default AuraCalculator