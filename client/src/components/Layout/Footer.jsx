import LinkIcons from "../LinkIcons";

export default function Footer(props) {
    return (
        <footer
            className="p-3 bg-lime-900 flex flex-col items-center"
        >
            <span
                className="text-lime-400"
            >
                <LinkIcons
                    modalToggle = {props.modalToggle}
                    setModalToggle = {props.setModalToggle}
                />
            </span>
            <span
                className="text-lime-100"
            >
                🄯 Nicholas Barrett-Miller 2022
            </span>
        </footer>
    )
}
