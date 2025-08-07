import { useSelector } from "react-redux";
import store from "../utils/appStore";
import MovieList from "./MovieList";

const GptMovieSuggestion=()=>{

    const movieStore=useSelector((store)=>store.gpt)
    if(!movieStore.movieResult){
        return;
    }

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90 ">
           <div className="">
                 {movieStore.movieResult.map((movie,index)=>(
                    <MovieList key={movieStore.movieName[index]} title={movieStore.movieName[index]} movies={movie}/>
                ))}
           </div>
        </div>
    )
}

export default GptMovieSuggestion;