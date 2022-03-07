import ConversationBubble from "../ConversationBubble";

export default function Intro() {
    return (
        <section
            className="flex flex-col items-center"
        >
            <div
                className="flex flex-row space-x-4"
            >
                <img
                    src="https://i.imgur.com/u0yC6n7.jpg"
                    alt="Headshot of Nick Miller."
                    className="rounded-2xl h-auto w-40"
                />
                <ConversationBubble
                    text = {'"Hi, I\'m Nick! Making things simple is what I do."'}
                    className = "bg-lime-900 text-lime-100 text-2xl rounded-2xl p-3"
                />
            </div>
            <h2
                className="text-xl mt-6 text-lime-1000"
            >
                Full Stack Software Engineer
            </h2>
        </section>
    )
}
