import Footer from "../Components/Footer";
import ListDiscuss from "../Components/ListDiscuss";
import Navbar from "../Components/Navbar";
import Peraturan from "../Components/Peraturan";
import Search from "../Components/Searchbox";

const Diskusi = () => {
    return (
        <>
            <Navbar />
            <Peraturan />
            <Search />
            <ListDiscuss />
            <Footer />
        </>
    );
}

export default Diskusi