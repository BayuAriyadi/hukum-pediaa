import { useNavigate } from "react-router-dom";

const CardDiscuss = () => {
    const navigate = useNavigate()

    return (
        <>
            <header className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <article
                        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                    >
                        <span className="inline-block rounded bg-blue-600 p-2 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>
                        </span>

                        <a className="hover:cursor-pointer" onClick={() => navigate('/Discuss')}>
                            <h3 className="mt-0.5 text-lg font-medium text-gray-900  hover:text-blue-600">
                                Forum Diskusi
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Berdiskusi dengan para expert, alumni, atau siswa lainnya terkait tentang
                            <a className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 md:font-bold">
                                Peraturan Pemerintah Tentang Lalu - lintas.
                            </a>

                        </p>

                        <a className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:cursor-pointer"
                            onClick={() => navigate('/Discuss')}
                        >
                            Find out more

                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </a>
                    </article>
                </div>
            </header>

        </>
    );
}

export default CardDiscuss