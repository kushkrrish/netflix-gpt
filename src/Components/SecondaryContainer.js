import { useSelector } from "react-redux";
import MovieList from "./MovieList";
// import usePopular from "../hooks/usePopular";

const SecondaryContainer=()=>{
    
    const movies=useSelector(store=>store?.movie);
    // console.log(movies.NowPlaying);
    
    return (
        <div className="bg-black">
            <div className="-mt-52 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.NowPlaying}/>
              
                <MovieList title={"Popular"} movies={movies.Popular}/>
                <MovieList title={"Toprate"} movies={movies.Toprate}/>
                <MovieList title={"Now Playing"} movies={movies.NowPlaying}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;