import Footer from "../Components/Footer";
import ListDiscuss from "../Components/ListDiscuss";
import Metadata from "../Components/Metadata";
import Navbar from "../Components/Navbar";
import Peraturan from "../Components/Peraturan";
import Search from "../Components/Searchbox";

const DiscussPage = () => {
    return (
        <>
            <Navbar />
            <Peraturan />
            <Metadata />
            <Search />
            <ListDiscuss />
            <Footer />
        </>
    );
}

export default DiscussPage