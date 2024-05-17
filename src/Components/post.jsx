const Post = () => {
    const Name = "Lorem Ipsum-san"

    return (
        <>
            <div className="p-4 border rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                    <img
                        className="h-8 w-8 rounded-full"
                        src="https://source.unsplash.com/random/100x100/" // Ganti dengan URL gambar profil yang sesuai
                        alt="Profile"
                    />
                    <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900">{Name}</div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Discussion Title</h2>
                <p className="text-gray-700 mt-2">This is a discussion content example. The actual content will be more detailed and structured.</p>
                <div className="mt-4">
                    <span className="text-sm text-gray-500">Posted by {Name} on 12 February 2023</span>
                </div>
            </div>
        </>
    );
}

export default Post 