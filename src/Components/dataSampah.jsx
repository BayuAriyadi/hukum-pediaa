import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DataSampah = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const {nama, data} = location.state || {nama: '', data: []};

    useEffect(() => {
        // Scroll to top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const handleNavigateNext = (itemNo) => {
        console.log('Navigating to Discuss with state:', { nama, data, itemNo });
        navigate('/Discuss', { state: { nama, data, itemNo} });
    };

    


    if (!data) {
        return <div>Data tidak tersedia</div>;
    }

    

    return (
        <div div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" >
            <div className="max-w-screen-xl mt-8">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="divide-y bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tgl Disahkan</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-idwrap text-sm font-medium text-gray-900">{item.no}</td>
                                <td className="px-6 py-4 whitespace-idwrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Berlaku' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-idwrap hover:cursor-pointer "
                                    onClick={() => handleNavigateNext(item.no)}
                                >
                                    <div className="text-sm text-blue-500 font-semibold">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.judul}</div>
                                    {item.mencabut && <div className="text-sm text-orange-500">mencabut {item.mencabut}</div>}
                                    {item.mengubah && <div className="text-sm text-gray-700">mengubah {item.mengubah}</div>}
                                    {item.dicabut && <div className="text-sm text-gray-700">dicabut {item.dicabut}</div>}
                                    {item.diubah && <div className="text-sm text-gray-700">diubah {item.diubah}</div>}
                                </td>
                                <td className="px-6 py-4 whitespace-idwrap text-sm text-gray-500">{item.tglDiundangkan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataSampah;
