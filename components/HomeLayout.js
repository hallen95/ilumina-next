import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function HomeLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}