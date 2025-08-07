import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
// import openai from "../utils/openai";
import ai from "../utils/gemini";
import options from "../utils/movieOpt";
import { addMovieName, addMovieResult } from "../utils/gptSlice";

const GptSearchBar=()=>{
    const language=useSelector((store)=>store.config.lang);
    const searchText = useRef(null);
    const dispatch=useDispatch();
    const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    return  json.results;
  };

     const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: gptQuery,
    });
    console.log(response.text);
    const aiMovies=response.text.split(",");

   const promiseArray= aiMovies.map((movie)=>(searchMovieTMDB(movie)));
   const ResultantMovies=await Promise.all(promiseArray);
    dispatch(addMovieName(aiMovies));
    dispatch(addMovieResult(ResultantMovies));
   
   

    // console.log(gptResults.choices?.[0]?.message?.content);
}
    return (
        <div className="pt-[10%] flex justify-center">
            <form onSubmit={(e) => e.preventDefault()} className=" w-1/2 z-30 bg-black grid grid-cols-12">
                <input type="text" ref={searchText} placeholder={lang[language].gptSearchPlaceholder} className=" p-4 m-4 col-span-8"/>
                <button className="col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"  onClick={handleGptSearchClick}>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;