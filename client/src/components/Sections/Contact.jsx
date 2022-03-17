import ConversationBubble from "../ConversationBubble";

export default function Contact(props) {
    return (
        <section
            className="bg-lime-400 rounded-2xl p-4 w-72 text-lg sm:text-2xl"
        >
            <button
                onClick={() => props.setModalToggle(!props.modalToggle)}
                className="flex flex-row space-x-4 hover:-translate-y-2 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-400 focus:ring-opacity-50"
            >
                <ConversationBubble
                    text = "Click here to get in touch."
                    className = "bg-lime-100 text-lime-1000 rounded-2xl p-3 active:text-lime-500 hover:text-lime-300 hover:bg-lime-1000"
                />
                <ConversationBubble
                    text = "Let's see how I can make your problems simple!"
                    className = "bg-lime-900 text-lime-100 rounded-2xl p-3 active:text-lime-500 hover:text-lime-300 hover:bg-lime-1000"
                />
            </button>
        </section>
    )
}
