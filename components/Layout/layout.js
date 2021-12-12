import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function layout({children}) {
    return (
        <>
        <Header/>
        <br/><br/>
        {children}
        <Footer/>

        </>
    )
}
