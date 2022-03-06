import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'


export default function Resume() {
    return (
        <section
            className="bg-lime-900 text-lime-100 rounded-2xl p-3 text-center"
        >
            <p>{'"Dowload my resume!"'}</p>
            <FontAwesomeIcon icon={faArrowRightToBracket} className="rotate-90"/>
        </section>
    )
}
