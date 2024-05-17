const Komen = () => {
    return (
        <>
            <div className=" mx-4 mt-4">
                <h3 className="text-lg font-semibold">Comments</h3>
                <div>
                    <label htmlFor="OrderNotes" className="sr-only">Order notes</label>

                    <div className="overflow-hidden">
                        <textarea
                            id="OrderNotes"
                            className="w-full resize-none border-x-0 border-t-0 border-gray-200 px-0 align-top sm:text-sm"
                            rows="4"
                            placeholder="Enter any additional order notes..."
                        ></textarea>

                        <div className="flex items-center justify-end gap-2 py-3">
                            <button
                                type="button"
                                className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                            >
                                Clear
                            </button>

                            <button
                                type="button"
                                className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-2 p-2 border-t">
                    <p className="text-gray-700">This is a comment.</p>
                    <span className="text-sm text-gray-500">Commented by User on Date</span>
                </div>
                <div className="mt-2 p-2 border-t">
                    <p className="text-gray-700">This is another comment.</p>
                    <span className="text-sm text-gray-500">Commented by User on Date</span>
                </div>
            </div>
        </>
    );
}

export default Komen