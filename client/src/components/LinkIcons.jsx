import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function LinkIcons() {
    return (
        <div
            className='space-x-4 text-4xl'
        >
            <a
                href='https://www.linkedin.com/in/ndbmiller'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href='https://github.com/nickdbmiller'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a
                href="mailto:nickbarrettmiller@gmail.com?subject=Nice Portfolio!&body=Hi Nick,"
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faSquareEnvelope} />
            </a>
        </div>
    )
}
