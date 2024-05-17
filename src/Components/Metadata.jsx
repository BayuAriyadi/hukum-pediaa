const Metadata = () => {
    return (
        <div div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" >
            <div className="max-w-screen-xl mt-8">
                <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                    
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Tipe Dokumen</dt>
                            <dd className="text-gray-700 sm:col-span-2">Peraturan Perundang-undangan</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Judul</dt>
                            <dd className="text-gray-700 sm:col-span-2">Undang-undang (UU) Nomor 22 Tahun 2009 tentang Lalu Lintas Dan Angkutan Jalan
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">T.E.U.
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">Indonesia, Pemerintah Pusat</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Nomor</dt>
                            <dd className="text-gray-700 sm:col-span-2">22
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Bentuk</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                Undang-undang (UU)
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Tahun</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                2009
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Metadata;