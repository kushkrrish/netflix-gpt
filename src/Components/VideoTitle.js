const VideoTitle = ({ movieTitle, movieOverview }) => {
    return (
        <div className="w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold">{movieTitle}</h1>
            <p className="py-6 text-sm w-1/4">{movieOverview}</p>
            <div className="">
                <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
                    ▶️ Play
                </button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
                    More Info
                </button>
            </div>
        </div>
    )
}
export default VideoTitle;