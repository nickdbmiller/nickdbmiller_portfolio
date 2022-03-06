import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <div
            className='space-y-6'
        >
            <Header />
            <div
                className='space-y-6 mx-8'
            >
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
