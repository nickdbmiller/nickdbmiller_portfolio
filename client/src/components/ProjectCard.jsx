export default function ProjectCard(props) {
    return (
        <div
            className = {props.bg}
        >
            <div
                className="text-lg"
            >
                <h3
                    className = {props.text}
                >
                    {props.title}
                </h3>
            </div>
        </div>
    )
}
