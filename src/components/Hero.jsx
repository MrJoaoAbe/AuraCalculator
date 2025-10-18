import BatmanGame from '../assets/batmanGame.png'
import Hollow from '../assets/hollow.jpg'
import Minecraft from '../assets/minecraft.png'
import RedDead2 from '../assets/reddead2.png'
import Tocha from '../assets/UMA ESTRELA EM CHAMAS.png'

const listaFotosAura = [BatmanGame, Hollow, Minecraft, RedDead2, Tocha]

function Hero({ numeroFoto }) {
    const imagemSelecionada = listaFotosAura[numeroFoto]

    return (
        <div className='w-full h-130 lg:h-200 overflow-hidden relative'>
            <img
                src={imagemSelecionada}
                alt="Foto"
                className='w-full h-full object-cover rounded-b-4xl shadow-2xl select-none pointer-events-none'
            />

            <h1 className='flex items-center absolute left-10 top-70 lg:left-30 lg:top-60  text-4xl text-white  p-2 lg:p-10 border-b-4 font-bold'>
                SUA AURA REVELA QUEM VOCÊ É
            </h1>
        </div>
    )
}

export default Hero