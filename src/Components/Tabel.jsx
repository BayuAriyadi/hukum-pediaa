import { useNavigate } from "react-router-dom";

const Tabel = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="p-8">
                <div className="mx-auto max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Lalu Lintas</a>
                        </div>

                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium"
                                onClick={() => navigate('/Listinfo')}
                            > 192 </span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>
                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Pendidikan</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>15</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>

                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Kesehatan</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>10</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>

                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Lingkungan Hidup</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>8</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>

                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Tenaga Kerja</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>12</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>

                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Pajak dan Retribusi</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>9</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>

                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Transportasi</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>7</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>

                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Telekomunikasi</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>6</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>

                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Pertanian</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>11</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>

                <div className="mx-auto mt-5 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-2">
                        <div className="sm:flex-1 whitespace-nowrap align-middle font-medium text-gray-900">
                            <a>Peraturan Pemerintah tentang Perdagangan</a>
                        </div>
                        <button
                            type="submit"
                            className="group h-7 mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium" onClick={() => navigate('/ErrorPages')}>14</span>
                        </button>
                    </form>
                    <span class="flex items-center mt-2">
                        <span class="h-px flex-1 bg-black"></span>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Tabel;