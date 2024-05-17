import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
        <header className=" bg-teal-600 rounded-xl mx-5">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-t-5 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-white sm:text-3xl">Tau Hukum!</h1>

                            <p className="mt-1.5 text-sm text-white">Let's Discuss with positive vibe!</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                            <button
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-gray-400 bg-white px-5 py-3 text-teal-800 transition hover:bg-blue-700 hover:text-white focus:outline-none focus:ring"
                                type="button"
                                onClick={() => navigate(-1)}
                            >
                                <span className="text-sm font-medium"> Back </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
    );
}

export default Header;
