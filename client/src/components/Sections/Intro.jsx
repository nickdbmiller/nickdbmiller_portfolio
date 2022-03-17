import ConversationBubble from "../ConversationBubble";

export default function Intro() {
    return (
        <section
            className="flex flex-col items-center max-w-md"
        >
            <div
                className="flex flex-row space-x-4 items-center justify-center"
            >
                <img
                    src="https://i.imgur.com/u0yC6n7.jpg"
                    alt="Headshot of Nick Miller."
                    className="rounded-2xl w-40"
                />
                <ConversationBubble
                    text = "Hi, I'm Nick! Making things simple is what I do."
                    className = "bg-lime-900 text-lime-100 text-2xl rounded-2xl p-3 sm:text-4xl flex items-center"
                />
            </div>
            <h2
                className="text-4xl mt-6 text-lime-1000 text-center"
            >
                | Software Engineer |
            </h2>
        </section>
    )
}
