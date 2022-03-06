// Style agnostic div for holding text in a conversation bubble.
export default function ConversationBubble(props) {
    return (
        <div
            className={props.className}
        >
            <p>{props.text}</p>
        </div>
    )
}
