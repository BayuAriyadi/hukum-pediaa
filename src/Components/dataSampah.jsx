import React from 'react';

const DataSampah = () => {
    const data = [
        {
            no: 1,
            status: 'Berlaku',
            title: 'Nomor 5 Tahun 2023',
            description: 'Pengelolaan Sampah',
            mencabut: 'Nomor 17 Tahun 2014, Nomor 3 Tahun 2015',
            tglDiundangkan: '28 Agustus 2023'
        },
        {
            no: 2,
            status: 'Berlaku',
            title: 'Nomor 3 Tahun 2016',
            description: 'Perubahan Atas Peraturan Daerah Kota Banjarbaru Nomor 32 Tahun 2011 Tentang Retribusi Pelayanan Dan Pengelolaan Persampahan/Kebersihan',
            mengubah: 'Nomor 32 Tahun 2011',
            dicabut: 'Nomor 11 Tahun 2023',
            tglDiundangkan: '09 Mei 2016'
        },
        {
            no: 3,
            status: 'Berlaku',
            title: 'Nomor 32 Tahun 2011',
            description: 'Retribusi Pelayanan dan Pengelolaan Persampahan/Kebersihan',
            diubah: 'Nomor 3 Tahun 2016',
            dicabut: 'Nomor 11 Tahun 2023',
            tglDiundangkan: '29 Desember 2011'
        },
        {
            no: 4,
            status: 'Tidak Berlaku',
            title: 'Nomor 15 Tahun 2009',
            description: 'Perubahan Atas Perda Nomor 15 Tahun 2000 tentang Retribusi Pelayanan Pengelolaan Persampahan dan Kebersihan',
            dicabut: 'Nomor 32 Tahun 2011',
            mengubah: 'Nomor 15 Tahun 2000',
            mencabut: 'Nomor 15 Tahun 2000',
            tglDiundangkan: '26 November 2009'
        },
        {
            no: 5,
            status: 'Berlaku',
            title: 'Nomor 15 Tahun 2000',
            description: 'Retribusi Pelayanan Pengelolaan Persampahan Dan Kebersihan',
            diubah: 'Nomor 15 Tahun 2009',
            dicabut: 'Nomor 32 Tahun 2011',
            tglDiundangkan: '09 Oktober 2000'
        },
    ];

    return (
        <div div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" >
            <div className="max-w-screen-xl mt-8">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="divide-y bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tgl Disahkan</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item) => (
                            <tr key={item.no}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.no}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Berlaku' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap hover:cursor-pointer ">
                                    <div className="text-sm text-blue-500 font-semibold">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.description}</div>
                                    {item.mencabut && <div className="text-sm text-orange-500">mencabut {item.mencabut}</div>}
                                    {item.mengubah && <div className="text-sm text-gray-700">mengubah {item.mengubah}</div>}
                                    {item.dicabut && <div className="text-sm text-gray-700">dicabut {item.dicabut}</div>}
                                    {item.diubah && <div className="text-sm text-gray-700">diubah {item.diubah}</div>}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.tglDiundangkan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataSampah;
