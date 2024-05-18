import { useLocation } from "react-router-dom";

const Metadata = () => {
    const location = useLocation()
    const { nama, data, itemNo } = location.state || { nama: '', data: [], itemNo: null }



    if (!data.length || itemNo === null) {
        return <div>Data tidak tersedia</div>;
    }

    const item = data ? data.find(d => d.no === itemNo) : null;


    return (
        <div div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" >
            <div className="max-w-screen-xl mt-8">
                <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">

                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Tentang</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {nama}
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Judul</dt>
                            <dd className="text-gray-700 sm:col-span-2">{item.judul}
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Status</dt>
                            <dd className="text-gray-700 sm:col-span-2">{item.status}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Nomor</dt>
                            <dd className="text-gray-700 sm:col-span-2">{item.title}
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Bentuk</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                Peraturan Daerah
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Tanggal</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {item.tglDiundangkan}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Metadata;