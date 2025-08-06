import { useDispatch} from "react-redux";
import options from "../utils/movieOpt";
import {addPopular} from "../utils/movieSlicee";
import { useEffect } from "react";



const usePopular=()=>{
    const dispatch=useDispatch();
    
    const fetchmovies=async()=>{
        const fetchData=await fetch("https://api.themoviedb.org/3/movie/popular",options);
        const json =await fetchData.json();
        dispatch(addPopular(json.results));
    }
    useEffect(()=>{
        fetchmovies();
    },[])
    // const movies=useSelector(store=>store.movie.NowPlaying);
    // if(movies===null){
    //     return;
    // }
}
export default usePopular;
