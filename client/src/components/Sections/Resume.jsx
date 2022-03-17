import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

import pdf from "../../assets/pdf/NICK_MILLER_Resume_2022.pdf"

export default function Resume() {
    return (
        <a
            href={pdf}
            target="_blank"
            rel='noreferrer'
            className='hover:-translate-y-2 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-400 focus:ring-opacity-50'
        >
            <section
                className="bg-lime-900 text-lime-100 rounded-2xl p-3 text-center text-2xl sm:text-4xl active:text-lime-500 hover:text-lime-300 hover:bg-lime-1000"
            >
                <p>Download my Resume!</p>
                <FontAwesomeIcon icon={faArrowRightToBracket} className="rotate-90"/>
            </section>
        </a>
    )
}
