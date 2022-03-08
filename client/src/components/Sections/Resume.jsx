import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

import pdf from "../../assets/pdf/NICK_MILLER_Resume_2022.pdf"

export default function Resume() {
    return (
        <a
            href={pdf}
            target="_blank"
            rel='noreferrer'
        >
            <section
                className="bg-lime-900 text-lime-100 rounded-2xl p-3 text-center text-2xl"
            >
                <p>{'"Dowload my resume!"'}</p>
                <FontAwesomeIcon icon={faArrowRightToBracket} className="rotate-90"/>
            </section>
        </a>
    )
}
