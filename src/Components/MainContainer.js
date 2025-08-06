import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
    const movies=useSelector(store=>store.movie?.NowPlaying);
    if(!movies){
        return;
    }
    const heroMovie=movies[0];
    return (
        <div>
            <div>
                <VideoTitle movieTitle={heroMovie.title} movieOverview={heroMovie.overview}  />
            </div>
            <div>
                <VideoBg movieId={heroMovie.id}/>
            </div>
        </div>
    )
}

export default MainContainer;