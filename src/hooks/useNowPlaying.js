import { useDispatch} from "react-redux";
import options from "../utils/movieOpt";
import { addNowPlayingMovies } from "../utils/movieSlicee";
import { useEffect } from "react";



const useNowPlaying=()=>{
    const dispatch=useDispatch();
    
    const fetchmovies=async()=>{
        const fetchData=await fetch("https://api.themoviedb.org/3/movie/now_playing",options);
        const json =await fetchData.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
        fetchmovies();
    },[])
    // const movies=useSelector(store=>store.movie.NowPlaying);
    // if(movies===null){
    //     return;
    // }
}
export default useNowPlaying;
