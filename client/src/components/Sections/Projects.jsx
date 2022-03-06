import ConversationBubble from "../ConversationBubble";

export default function Projects() {
    return (
        <section
            className="flex flex-row bg-lime-400 rounded-2xl p-4"
        >
            <ConversationBubble
                text = {'"Check out some of the neat stuff I\'ve been working on!"'}
                className = "bg-lime-100 text-lime-1000 rounded-2xl p-3"
            />
        </section>
    )
}
