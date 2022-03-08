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
                className="text-center grid grid-cols-1 space-y-2 m-2 font-bold"
            >
                {/* Web of Rogues */}
                <div
                    className = "bg-lime-1000 text-lime-400 rounded-2xl p-3 w-40 h-40 flex flex-col items-center justify-center"
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
                        >
                        Github
                    </a>
                    <a
                        href='https://nickdbmiller.github.io/Web-of-Rogues-Game/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Live Site
                    </a>
                </div>

                {/* efficient.ly */}
                <div
                    className = "bg-lime-700 text-lime-400 rounded-2xl p-3 w-40 h-40 flex flex-col items-center justify-center"
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
                    >
                        Github
                    </a>
                    <a
                        href='https://builtefficiently.netlify.app/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Live Site
                    </a>
                </div>

                {/* Bored? Game! */}
                <div
                    className = "bg-slate-900 text-indigo-600 rounded-2xl p-3 w-40 h-40 flex flex-col items-center justify-center"
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
                    >
                        Github
                    </a>
                    <a
                        href='https://competent-noyce-c7b535.netlify.app/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Live Site
                    </a>
                </div>

                {/* Needful */}
                <div
                    className = "bg-rose-500 text-rose-100 rounded-2xl p-3 w-40 h-40 flex flex-col items-center justify-center"
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
                    >
                        Github
                    </a>
                    <a
                        href='https://needfulshop.netlify.app/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Live Site
                    </a>
                </div>
            </div>
        </section>
    )
}
