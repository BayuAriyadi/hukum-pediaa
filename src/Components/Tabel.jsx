import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Tabel = () => {
    const [data, setData] = useState([
        { id: 1, nama: 'Pengelolaan Sampah', jumlah: 5 },
        { id: 2, nama: 'Lalu lintas', jumlah: 1 },
        { id: 3, nama: 'Pertanian', jumlah: 2 },
        { id: 4, nama: 'Perikanan', jumlah: 3 },
        { id: 5, nama: 'Pasar', jumlah: '5' },
    ]);

    const [sampah, setSampah] = useState([
        {
            no: 1,
            status: 'Berlaku',
            title: 'nomor 5 Tahun 2023',
            judul: 'Pengelolaan Sampah',
            mencabut: 'nomor 17 Tahun 2014, nomor 3 Tahun 2015',
            tglDiundangkan: '28 Agustus 2023'
        },
        {
            no: 2,
            status: 'Berlaku',
            title: 'nomor 3 Tahun 2016',
            judul: 'Perubahan Atas Peraturan Daerah Kota Banjarbaru nomor 32 Tahun 2011 Tentang Retribusi Pelayanan Dan Pengelolaan Persampahan/Kebersihan',
            mengubah: 'nomor 32 Tahun 2011',
            dicabut: 'nomor 11 Tahun 2023',
            tglDiundangkan: '09 Mei 2016'
        },
        {
            no: 3,
            status: 'Berlaku',
            title: 'nomor 32 Tahun 2011',
            judul: 'Retribusi Pelayanan dan Pengelolaan Persampahan/Kebersihan',
            diubah: 'nomor 3 Tahun 2016',
            dicabut: 'nomor 11 Tahun 2023',
            tglDiundangkan: '29 Desember 2011'
        },
        {
            no: 4,
            status: 'Tidak Berlaku',
            title: 'nomor 15 Tahun 2009',
            judul: 'Perubahan Atas Perda nomor 15 Tahun 2000 tentang Retribusi Pelayanan Pengelolaan Persampahan dan Kebersihan',
            dicabut: 'nomor 32 Tahun 2011',
            mengubah: 'nomor 15 Tahun 2000',
            mencabut: 'nomor 15 Tahun 2000',
            tglDiundangkan: '26 idvember 2009'
        },
        {
            no: 5,
            status: 'Berlaku',
            title: 'nomor 15 Tahun 2000',
            judul: 'Retribusi Pelayanan Pengelolaan Persampahan Dan Kebersihan',
            diubah: 'nomor 15 Tahun 2009',
            dicabut: 'nomor 32 Tahun 2011',
            tglDiundangkan: '09 Oktober 2000'
        },

    ]);

    const [lintas, setLintas] = useState([
        {
            no: 1,
            status: 'Berlaku',
            title: 'nomor 25 Tahun 2000',
            judul: 'Rambu-rambu, Marka Jalan, Alat Pemberian Isyarat Lalu Lintas Dalam Wilayah Kota Banjarbaru',
            tglDiundangkan: '26 Desember 2000'
        }
    ]);

    const [tani] = useState([
        {
            no: 1,
            status: 'Berlaku',
            title: 'nomor 2 Tahun 2024',
            judul: 'Penyelenggaraan Ketahanan Pangan, Pertanian dan Perikanan',
            tglDiundangkan: '24 Februari 2024'
        },
        {
            no: 2,
            status: 'Berlaku',
            title: 'nomor 3 Tahun 2023',
            judul: 'Perlindungan Lahan Pertanian Pangan Berkelanjutan',
            tglDiundangkan: '7 Februari 2023'
        },
    ]);

    const [Perikanan] = useState([
        {
            no: 1,
            status: 'Berlaku',
            title: 'Nomor 2 Tahun 2024',
            judul: 'Penyelenggaraan Ketahanan Pangan, Pertanian dan Perikanan',
            tglDiundangkan: '26 Februari 2024'
        },
        {
            no: 2,
            status: 'Berlaku',
            title: 'Nomor 14 Tahun 2019',
            judul: 'Perubahan Atas Peraturan Daerah Kota Banjarbaru Nomor 31 Tahun 2011 tentang Retribusi Penjualan Produksi Daerah Bidang Perikanan',
            mengubah: 'Nomor 31 Tahun 2011',
            dicabut: 'Nomor 11 Tahun 2023',
            tglDiundangkan: '31 Oktober 2019'
        },
        {
            no: 3,
            status: 'Berlaku',
            title: 'Nomor 31 Tahun 2011',
            judul: 'Retribusi Penjualan Produksi Usaha Daerah Bidang Perikanan',
            diubah: 'Nomor 14 Tahun 2019',
            dicabut: 'Nomor 11 Tahun 2023',
            tglDiundangkan: '29 Desember 2011'
        },
    ])

    const [pasar] = useState([
        {
            no: 1,
            status: 'Berlaku',
            title: 'Nomor 5 Tahun 2021',
            judul: 'Perubahan Atas Peraturan Daerah Kota Banjarbaru Nomor 10 Tahun 2011 Tentang Retribusi Pelayanan Pasar dan Retribusi Pasar Pertokoan',
            mengubah: 'Nomor 10 Tahun 2011',
            dicabut: 'Nomor 11 Tahun 2023',
            tglDiundangkan: '26 April 2021'
        },
        {
            no: 2,
            status: 'Berlaku',
            title: 'Nomor 2 Tahun 2019',
            judul: 'Penyelenggaraan Pasar Rakyat',
            tglDiundangkan: '08 Juli 2019'
        },
        {
            no: 3,
            status: 'Berlaku',
            title: 'Nomor 10 Tahun 2011',
            judul: 'Retribusi Pelayanan Pasar dan Retribusi Pasar Pertokoan',
            mencabut: 'Nomor 3 Tahun 2005',
            diubah: 'Nomor 5 Tahun 2021',
            dicabut: 'Nomor 11 Tahun 2023',
            tglDiundangkan: '21 April 2011'
        },
        {
            no: 4,
            status: 'Berlaku',
            title: 'Nomor 6 Tahun 2006',
            judul: 'Pembentukan Organisasi dan Tata Kerja Unit Pelaksana Teknis (UPTD ) Pengelola Pasar di Lingkungan Dinas Pendapatan Daerah Kota Banjarbaru',
            tglDiundangkan: '14 Juli 2006'
        },
        {
            no: 5,
            status: 'Tidak Berlaku',
            title: 'Nomor 16 Tahun 2000',
            judul: 'Retribusi Pasar',
            dicabut: 'Nomor 10 Tahun 2011',
            tglDiundangkan: '09 Oktober 2000'
        },
    ])

    const navigate = useNavigate()

    const handleNavigate = (item) => {
        let dataToSend = [];
        if (item.id === 1) {
            dataToSend = sampah;
        } else if (item.id === 2) {
            dataToSend = lintas;
        } else if (item.id === 3) {
            dataToSend = tani;
        } else if (item.id === 4) {
            dataToSend = Perikanan;
        } else if (item.id === 5) {
            dataToSend = pasar;
        }
        console.log('Navigating to Listinfo with state:', { nama: item.nama, data: dataToSend });
        navigate(('/Listinfo'), { state: { nama: item.nama, data: dataToSend } });
    }

    useEffect(() => {
        // Scroll to top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


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
                                        onClick={() => handleNavigate(item)}
                                    >{item.nama}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-right">
                                        <a
                                            className="hover:cursor-pointer group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-2 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                            onClick={() => handleNavigate(item)}
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