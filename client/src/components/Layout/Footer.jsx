import LinkIcons from "../LinkIcons";

export default function Footer() {
    return (
        <footer
            className="p-3 bg-lime-900 flex flex-col items-center"
        >
            <span
                className="text-lime-400"
            >
                <LinkIcons />
            </span>
            <span
                className="text-lime-100"
            >
                🄯 Nicholas Barrett-Miller 2022
            </span>
        </footer>
    )
}
