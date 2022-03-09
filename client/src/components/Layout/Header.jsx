import LinkIcons from "../LinkIcons";

export default function Header(props) {
    return (
        <header
            className="bg-lime-700 text-lime-1000 flex flex-row justify-between sm:justify-evenly items-center p-3 2xl:justify-center 2xl:space-x-40
            sticky top-0 z-50"
        >
            <h1
                className="text-3xl font-bold"
            >
                Nick DB Miller
            </h1>
            <LinkIcons
                modalToggle = {props.modalToggle}
                setModalToggle = {props.setModalToggle}
            />
        </header>
    )
}
