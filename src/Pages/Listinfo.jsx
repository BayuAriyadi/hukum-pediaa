import CardDiscuss from "../Components/CardDiscuss";
import Footer from "../Components/Footer";
import Metadata from "../Components/Metadata";
import Navbar from "../Components/Navbar";
import Peraturan from "../Components/Peraturan";
import DataSampah from "../Components/dataSampah";

const Listinfo = () => {
    return (
      <>
        <Navbar />
        <Peraturan />
        <CardDiscuss />
        <DataSampah />
        <Metadata />
        <Footer />
      </>  
    );
}

export default Listinfo