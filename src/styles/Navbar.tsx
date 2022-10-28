import { Heading } from '../componentes/Heading'

export function Navbar() {
  return (
    <div className='min-w-screen flex justify-center pt-3 pb-3'>
        <Heading className='text-hd-lg flex flex-row list-none gap-6 text-pink-900 font-soon '>
            <li className='hover:text-pink-500 hover:uppercase transition-colors hover:animate-pulse'>Home</li>
            <li className='hover:text-pink-500 hover:uppercase transition-colors hover:animate-pulse'>Sobre</li>
            <li className='hover:text-pink-500 hover:uppercase transition-colors hover:animate-pulse'>Projetos</li>
            <li className='hover:text-pink-500 hover:uppercase transition-colors hover:animate-pulse'>Contato</li>
        </Heading>
    </div>
  )
}
