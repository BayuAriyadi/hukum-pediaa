import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';



const Tabel = () => {
    const [data, setData] = useState([
        { id: 1, judul: 'Pengelolaan Sampah', jumlah: 5, link: '/Listinfo'},
        { id: 2, judul: 'Lalu lintas', jumlah: 1, link: '/ErrorPages'},
        { id: 3, judul: 'Pertanian', jumlah: 2, link: '/ErrorPages' },
        { id: 4, judul: 'Perikanan', jumlah: 3, link: '/ErrorPages' },
        { id: 5, judul: 'Pajak', jumlah: '25', link: '/ErrorPages' },
    ]);


    const navigate = useNavigate()

    return (
        <>
            <div className="mx-auto max-w-xl my-4">
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <tbody className="divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900
                                        hover:cursor-pointer hover:text-blue-500"
                                        onClick={() => navigate(item.link)}
                                    >{item.judul}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-right">
                                        <a
                                            className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-2 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                            href="#"
                                        >
                                            <span className="absolute -end-full transition-all group-hover:end-4">
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
                                            </span>

                                            <span className="text-sm font-medium transition-all group-hover:me-4"
                                                onClick={() => navigate(item.link)}
                                            > {item.jumlah} </span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Tabel;