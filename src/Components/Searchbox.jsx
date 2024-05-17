const Search = () => {
    return (

        <div div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" >
            <div className="max-w-screen-xl mt-8">
                <form action="#" className="sm:flex sm:gap-4">
                    <div className="sm:flex-1">
                        <label htmlFor="search" className="sr-only">Search</label>

                        <input
                            type="text"
                            placeholder="Cari..."
                            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                    >
                        <span className="text-sm font-medium"> Cari </span>

                        <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div >
    );
}

export default Search