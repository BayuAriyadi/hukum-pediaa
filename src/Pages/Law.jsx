import Footer from "../Components/Footer";
import List from "../Components/ListLaw";
import Navbar from "../Components/Navbar";
import Tabel from "../Components/Tabel";

const Law = () => {
    return (
        <>
            <Navbar />
            <List />
            <div className="mr-32 ml-32">
                <Tabel />
            </div>

            <Footer />
        </>
    );
}

export default Law;