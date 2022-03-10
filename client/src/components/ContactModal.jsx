import { useState } from 'react';
import { send } from 'emailjs-com';

export default function ContactModal(props) {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
    const USER_ID = process.env.REACT_APP_USER_ID

    const defaultInput = {
        from_name: '',
        message: '',
        reply_to: '',
        subject: '',
    }

    const [buttonText, setButtonText] = useState("Send")
    const [toSend, setToSend] = useState(defaultInput)

    const handleClose = () => {
        props.setModalToggle(false)
    }
        
    const onSubmit = (e) => {
        e.preventDefault()
        send(
                SERVICE_ID,
                TEMPLATE_ID,
                toSend,
                USER_ID
            )
        .then((res) => {
            console.log('SUCCESS!', res.status, res.text);
            setButtonText("Sent!")
            setToSend(defaultInput)
            handleClose()
        })
        .catch((err) => {
            console.error('ERROR SENDING EMAIL:', err);
            alert('ERROR SENDING EMAIL:', err)
        });

        setButtonText("Send")
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    if (!props.modalToggle) {
        return null
    }

    return (
        // Modal
        <section
            onClick={() => handleClose()}
            className="fixed left-0 top-0 right-0 bottom-0 bg-lime-1000 bg-opacity-50 flex items-center justify-center"
        >
            {/* Content */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="sm:w-96 rounded-2xl bg-lime-700 border-t-2 border-b-4 border-b-lime-1000 border-t-lime-100 drop-shadow-2xl"
            >

                {/* Header */}
                <div
                    className="sm:p-3 rounded-2xl bg-lime-900 m-1 sm:m-3"
                >

                    {/* Modal Title */}
                    <h4
                        className="text-lime-500 text-2xl text-center"
                    >
                        "Get in touch!"
                    </h4>
                </div>

                {/* Modal Body */}
                <div
                    className="px-3 sm:p-3 text-lime-100 flex items-center justify-center"
                >
                    {/* Email Form */}
                    <form
                        onSubmit={(e) => onSubmit(e)}
                        className="sm:space-y-4"
                    >
                        {/* Sender Name */}
                        <div
                            className='text-center'
                        >
                            <label
                                className='block'
                                htmlFor="from_name"
                            >
                                "What's your name?"
                            </label>
                            <input
                                required
                                className="text-lime-1000 p-1 sm:p-4 bg-lime-100 rounded-lg border-b-2 border-lime-1000"
                                id='from_name'
                                type='text'
                                name='from_name'
                                placeholder='From'
                                value={toSend.from_name}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        {/* Sender Email */}
                        <div
                            className='text-center'
                        >
                            <label
                                className='block'
                                htmlFor="reply_to"
                            >
                                "What's your email?"
                            </label>
                            <input
                                required
                                className="text-lime-1000 p-1 sm:p-4 bg-lime-100 rounded-lg border-b-2 border-lime-1000"
                                id='reply_to'
                                type='email'
                                name='reply_to'
                                placeholder='Email'
                                value={toSend.reply_to}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        {/* Subject */}
                        <div
                            className='text-center'
                        >
                            <label
                                className='block'
                                htmlFor="subject"
                            >
                                Subject
                            </label>
                            <input
                                required
                                className="text-lime-1000 p-1 sm:p-4 bg-lime-100 rounded-lg border-b-2 border-lime-1000"
                                id='subject'
                                type='text'
                                name='subject'
                                placeholder='Subject'
                                value={toSend.subject}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        {/* Message */}
                        <div
                            className='text-center'
                        >
                            <label
                                className='block'
                                htmlFor="message"
                            >
                                Your message
                            </label>
                            <textarea
                                required
                                className="text-lime-1000 pt-1 px-1 sm:px-4 sm:pt-4 sm:pb-24 bg-lime-100 rounded-lg border-b-2 border-lime-1000 resize-none"
                                id='message'
                                type='text'
                                name='message'
                                placeholder='Message...'
                                value={toSend.message}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        {/* Modal Footer */}
                        <div
                            className="pt-3 pb-6 flex items-center justify-center space-x-4"
                        >
                            {/* Submit */}
                            <button
                                className="px-5 py-3 rounded-2xl inline-block bg-lime-400 border-b-2 border-lime-1000
                                text-lime-900 uppercase tracking-wider font-semibold text-sm
                                hover:bg-lime-300 hover:-translate-y-0.5 transform transition
                                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-lime-400 focus:ring-opacity-50
                                active:bg-lime-500"
                                type='submit'
                            >
                                {buttonText}
                            </button>
                            <button
                                onClick={() => handleClose()}
                                className="px-5 py-3 rounded-2xl inline-block bg-gray-300
                                text-lime-1000 uppercase tracking-wider font-semibold text-sm
                                hover:bg-gray-200
                                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-300 focus:ring-opacity-50
                                active:bg-gray-400"
                                type='button'
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
