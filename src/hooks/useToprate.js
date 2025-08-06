import { useDispatch} from "react-redux";
import options from "../utils/movieOpt";
import { addToprate } from "../utils/movieSlicee";
import { useEffect } from "react";



const useToprate=()=>{
    const dispatch=useDispatch();
    
    const fetchmovies=async()=>{
        const fetchData=await fetch("https://api.themoviedb.org/3/movie/top_rated",options);
        const json =await fetchData.json();
        dispatch(addToprate(json.results));
    }
    useEffect(()=>{
        fetchmovies();
    },[])
    // const movies=useSelector(store=>store.movie.NowPlaying);
    // if(movies===null){
    //     return;
    // }
}
export default useToprate;
