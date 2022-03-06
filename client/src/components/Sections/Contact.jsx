import ConversationBubble from "../ConversationBubble";

export default function Contact() {
    return (
        <section
            className="flex flex-row bg-lime-400 rounded-2xl p-4"
        >
            <ConversationBubble
                text = {'Click here to get in touch.'}
                className = "bg-lime-100 text-lime-1000 rounded-2xl p-3"
            />
            <ConversationBubble
                text = {'"Let\'s see how I can make your problems simple!"'}
                className = "bg-lime-900 text-lime-100 rounded-2xl p-3"
            />
        </section>
    )
}
