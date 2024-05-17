import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Komen from "../Components/coment";
import Post from "../Components/post";

const Koment = () => {
    return (
        <>

            <Navbar />
            <div div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" >
                <div className="max-w-screen-xl mt-8">
                    <Header />
                    <main className="p-4">
                        <Post />
                        <Komen />
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Koment