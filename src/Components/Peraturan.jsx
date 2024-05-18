import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Peraturan = (props) => {
    const navigate = useNavigate()

    const location = useLocation()
    const { nama, data, itemNo } = location.state || { nama: '', data: [], itemNo: null }

    useEffect(() => {
        // Scroll to top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    if (!data.length || itemNo === null) {
        return <div>Data tidak tersedia</div>;
    }

    const item = data ? data.find(d => d.no === itemNo) : null;

    const itemTitle = item ? item.judul : null;

    console.log('Received state in Peraturan:', { nama, data, itemNo });
    console.log('Item found:', item);

    return (
        <>

            <header className=" bg-teal-600 rounded-xl mx-5">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-t-5 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-white sm:text-3xl">Peraturan Pemerintah Tentang {nama} </h1>
                            <h2 className="text-sm mt-2 text-white">{itemTitle}</h2>

                            <p className="mt-1.5 text-sm text-white">Let's Discuss!</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                            <button
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-gray-400 bg-white px-5 py-3 text-teal-800 transition hover:bg-blue-700 hover:text-white focus:outline-none focus:ring"

                                onClick={() => navigate('/ErrorPages')}
                            >
                                <span className="text-sm font-medium"> Unduh </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Peraturan;