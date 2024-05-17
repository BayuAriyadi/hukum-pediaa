import Footer from "../Components/Footer";
import ListDiscuss from "../Components/ListDiscuss";
import Navbar from "../Components/Navbar";
import Peraturan2 from "../Components/Peraturan2";
import Search from "../Components/Searchbox";

const Diskusi = () => {
    return (
        <>
            <Navbar />
            <Peraturan2 />
            <Search />
            <ListDiscuss />
            <Footer />
        </>
    );
}

export default Diskusi