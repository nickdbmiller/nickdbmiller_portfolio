import ConversationBubble from "../ConversationBubble";

export default function Skills() {
    return (
        <section
            className="flex flex-row bg-lime-700 rounded-2xl p-4"
        >
        <ConversationBubble
            text = {'"What do I know how to do? More and more every day!"'}
            className = "bg-lime-900 text-lime-400 rounded-2xl p-3"
        />
        </section>
    )
}
