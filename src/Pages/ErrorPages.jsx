import Error404 from "../Components/404";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ErrorPages = () => {
    return (
        <>
            <Navbar />
            <Error404 />
            <Footer />
        </>
    );
}

export default ErrorPages;