import Header from './Header'
import Footer from './Footer'
import ContactModal from '../ContactModal'

export default function Layout(props) {
    return (
        <div
            className='space-y-6'
        >
            <Header
                modalToggle = {props.modalToggle}
                setModalToggle = {props.setModalToggle}
            />
            <div
                className='space-y-6 mx-8 flex flex-col items-center'
            >
                {props.children}
            </div>
            <Footer
                modalToggle = {props.modalToggle}
                setModalToggle = {props.setModalToggle}
            />
            <ContactModal
                modalToggle = {props.modalToggle}
                setModalToggle = {props.setModalToggle}
            />
        </div>
    )
}
