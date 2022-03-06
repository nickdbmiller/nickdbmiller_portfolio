import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function LinkIcons() {
    return (
        <div
            className='space-x-4 text-4xl'
        >
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithubSquare} />
            <FontAwesomeIcon icon={faSquareEnvelope} />
        </div>
    )
}
