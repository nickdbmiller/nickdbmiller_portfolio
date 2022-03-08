import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faBoltLightning } from '@fortawesome/free-solid-svg-icons'

import ConversationBubble from "../ConversationBubble";

export default function Projects() {
    return (
        <section
            className="flex flex-col bg-lime-400 rounded-2xl p-4 items-center"
        >
            <ConversationBubble
                text = {'"Check out some of the neat stuff I\'ve been working on!"'}
                className = "bg-lime-100 text-lime-1000 rounded-2xl p-3"
            />
            <div
                className="text-center grid grid-cols-1 sm:grid-cols-2 gap-4 m-2 font-bold mt-4"
            >
                {/* Web of Rogues */}
                <a
                    href='https://nickdbmiller.github.io/Web-of-Rogues-Game/'
                    target='_blank'
                    rel="noreferrer"
                    className = "bg-lime-1000 text-lime-400 rounded-2xl p-3 w-40 h-40 flex flex-col items-center justify-center hover:-translate-y-2 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-1000 focus:ring-opacity-50"
                >
                    <h2
                        className="font-2P text-4xl"
                    >
                        @
                    </h2>
                    <h3
                        className='text-lg'
                    >
                        Web of Rogues
                    </h3>
                    <a
                        href='https://github.com/nickdbmiller/Web-of-Rogues-Game'
                        target='_blank'
                        rel="noreferrer"
                        className='hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-400 focus:ring-opacity-50 active:text-lime-500 hover:text-neutral-50'
                        >
                        Github
                    </a>
                    <a
                        href='https://nickdbmiller.github.io/Web-of-Rogues-Game/'
                        target='_blank'
                        rel="noreferrer"
                        className='hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-400 focus:ring-opacity-50 active:text-lime-500 hover:text-neutral-50'
                    >
                        Live Site
                    </a>
                </a>

                {/* efficient.ly */}
                <a
                    href='https://builtefficiently.netlify.app/'
                    target='_blank'
                    rel="noreferrer"
                    className = "bg-lime-700 text-lime-400 rounded-2xl p-3 w-40 h-40 flex flex-col items-center justify-center hover:-translate-y-2 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-1000 focus:ring-opacity-50"
                >
                    <FontAwesomeIcon className="text-4xl" icon={faBoltLightning} />
                    <h3
                        className='text-2xl'
                    >
                        efficient.ly
                    </h3>
                    <a
                        href='https://github.com/nickdbmiller/efficient.ly'
                        target='_blank'
                        rel="noreferrer"
                        className='hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-1000 focus:ring-opacity-50 active:text-lime-500 hover:text-lime-1000'
                    >
                        Github
                    </a>
                    <a
                        href='https://builtefficiently.netlify.app/'
                        target='_blank'
                        rel="noreferrer"
                        className='hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-1000 focus:ring-opacity-50 active:text-lime-500 hover:text-lime-1000'
                    >
                        Live Site
                    </a>
                </a>

                {/* Bored? Game! */}
                <a
                    href='https://competent-noyce-c7b535.netlify.app/'
                    target='_blank'
                    rel="noreferrer"
                    className = "bg-slate-900 text-indigo-600 rounded-2xl p-3 w-40 h-40 flex flex-col items-center justify-center hover:-translate-y-2 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-400 focus:ring-opacity-50"
                >
                    <FontAwesomeIcon className="text-4xl" icon={faDice} />
                    <h3
                        className='text-2xl'
                    >
                        Bored? Game!
                    </h3>
                    <a
                        href='https://github.com/yexeniaf/BoredGame-Frontend'
                        target='_blank'
                        rel="noreferrer"
                        className='hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-400 focus:ring-opacity-50 active:text-indigo-500 hover:text-indigo-300'
                    >
                        Github
                    </a>
                    <a
                        href='https://competent-noyce-c7b535.netlify.app/'
                        target='_blank'
                        rel="noreferrer"
                        className='hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-400 focus:ring-opacity-50 active:text-indigo-500 hover:text-indigo-300'
                    >
                        Live Site
                    </a>
                </a>

                {/* Needful */}
                <a
                    href='https://needfulshop.netlify.app/'
                    target='_blank'
                    rel="noreferrer"
                    className = "bg-rose-500 text-rose-100 rounded-2xl p-3 w-40 h-40 flex flex-col items-center justify-center hover:-translate-y-2 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-100 focus:ring-opacity-50"
                >
                    <h2
                        className="font-noto-display text-4xl"
                    >
                        N
                    </h2>
                    <h3
                        className='text-2xl'
                    >
                        Needful
                    </h3>
                    <a
                        href='https://github.com/nickdbmiller/needful'
                        target='_blank'
                        rel="noreferrer"
                        className='hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-100 focus:ring-opacity-50 active:text-rose-800 hover:text-rose-900'
                    >
                        Github
                    </a>
                    <a
                        href='https://needfulshop.netlify.app/'
                        target='_blank'
                        rel="noreferrer"
                        className='hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-100 focus:ring-opacity-50 active:text-rose-800 hover:text-rose-900'
                    >
                        Live Site
                    </a>
                </a>
            </div>
        </section>
    )
}
