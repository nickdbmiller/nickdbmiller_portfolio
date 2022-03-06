import ConversationBubble from "../ConversationBubble";

export default function Intro() {
    return (
        <section
            className="flex flex-row"
        >
            <img
                src="https://i.imgur.com/u0yC6n7.jpg"
                alt="Headshot of Nick Miller."
                className="rounded-2xl h-auto w-40"
            />
            <ConversationBubble
                text = {'"Hi, I\'m Nick! Making things simple is what I do."'}
                className = "bg-lime-900 text-lime-100 rounded-2xl p-3"
            />
        </section>
    )
}
