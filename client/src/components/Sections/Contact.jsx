import ConversationBubble from "../ConversationBubble";

export default function Contact() {
    return (
        <section
            className="bg-lime-400 rounded-2xl p-4 w-72 text-lg"
        >
            <a
                href="mailto:nickbarrettmiller@gmail.com?subject=Nice Portfolio!&body=Hi Nick,"
                target='_blank'
                rel='noreferrer'
                className="flex flex-row space-x-4"
            >
                <ConversationBubble
                    text = {'Click here to get in touch.'}
                    className = "bg-lime-100 text-lime-1000 rounded-2xl p-3"
                />
                <ConversationBubble
                    text = {'"Let\'s see how I can make your problems simple!"'}
                    className = "bg-lime-900 text-lime-100 rounded-2xl p-3"
                />
            </a>
        </section>
    )
}
