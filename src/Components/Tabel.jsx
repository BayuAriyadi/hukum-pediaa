import { useNavigate } from "react-router-dom";

const Tabel = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Lalu - lintas</td>

                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    onClick={() => navigate('/')}
                                >
                                    1983
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Pendidikan</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    15
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Kesehatan</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    10
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Lingkungan Hidup</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    8
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Tenaga Kerja</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    12
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Pajak dan Retribusi</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    9
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Transportasi</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    7
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Telekomunikasi</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    6
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Pertanian</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    11
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Perdagangan</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    14
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Peraturan Pemerintah tentang Keamanan dan Pertahanan</td>
                            <td className="whitespace-nowrap px-4 py-2" align="right">
                                <a
                                    href="#"
                                    onClick={() => navigate('/ErrorPages')}
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    13
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Tabel;