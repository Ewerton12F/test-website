import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Freud | Psychoanalisys </title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className='bg-primary px-10'>
                <nav className='py-7 flex justify-between items-center text-white'>
                    <div className='flex'>
                        <p className='font-Oswald'>
                            Freud
                        </p>
                        <p className='mx-1'>
                            |
                        </p>
                        <p className='font-DM text-secondary'>
                            Psychoanalysis
                        </p>
                    </div>
                    <ul>
                        <li><BsFillMoonStarsFill /></li>
                    </ul>
                </nav>
            </header>
            <main className='bg-white'>
                <section className='h-[1300px] bg-gradient-to-b from-primary to-white'>
                    <div className='text-center p-10'>
                        <h1 className='text-4xl pt-12 pb-2 text-white font-Oswald'>
                            Sigmund Freud
                        </h1>
                        <hr className='mx-auto w-52'/>
                        <h3 className='text-xl py-1 text-secondary font-DM'>
                            Psychoanalysis
                        </h3>
                    </div>

                    <div className='bg-old-paper m-10 rounded-xl text-center'>
                        <div className='p-7'>
                            <h2 className='text-2xl pb-3 font-DM text-primary'>
                                Services offered
                            </h2>
                            <p className='text-xs text-gray-600 px-2'>
                                Selecione um serviço para saber mais e entrar em contato diretamente pelo Whatsapp
                            </p>
                        </div>
                    
                        <ul className='px-10'>
                            <li className='border border-primary rounded-xl'>
                                <div className='flex flex-col pt-10 pb-7'>
                                    <div className='bg-primary h-32 w-32 mx-auto rounded-xl'>
                                        <img src="" alt="" />*
                                    </div>
                                    <div>
                                        <h4 className='p-5 font-Lexend text-lg text-primary'>Avaliação da Personalidade</h4>
                                        <p className='text-sm mx-5 font-Lexend font-extralight text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit, minima ea sapiente harum impedit, quo quisquam voluptatum.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className='p-7'>
                            <p>Mais →</p>
                        </div>
                    </div>

                    <div className='m-10'>
                        <h2 className='text-2xl py-3 font-DM text-primary'>
                            Sobre o Psicanalista
                        </h2>
                        <hr className='w-12 border-secondary'/>
                        <p className='my-3'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit maiores, dolores nam soluta nemo dolor voluptatum magni nobis exercitationem aut fugit sunt a sint recusandae natus itaque quia porro!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad suscipit maiores, dolores nam soluta nemo dolor voluptatum magni nobis exercitationem aut fugit sunt a sint recusandae natus itaque quia porro!
                        </p>
                    </div>

                    <div>
                        <h2></h2>
                    </div>

                </section>
            </main>
            <footer>
                
            </footer>
        </div>
    )
}
