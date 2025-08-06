import { useEffect } from "react";
import options from "../utils/movieOpt";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlicee";

const VideoBg = ({ movieId }) => {
    const dispatch = useDispatch();
    const fetchVideo = async () => {
        const fetchData = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", options);
        const json = await fetchData.json();
        console.log(json);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailer(trailer))

    }
    useEffect(() => {
        fetchVideo();
    }, []);
    const trailerVideo = useSelector(store => store.movie?.Trailer);
    return (
        <div className="w-screen ">
            <iframe
                className="w-screen aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo?.key+
                    "?&autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

        </div>
    )
}
export default VideoBg;