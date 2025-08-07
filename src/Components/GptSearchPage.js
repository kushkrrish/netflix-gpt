import { BgUrl } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage=()=>{
    return (
        <div>
            <div className="fixed -z-10 " >
                <img src={BgUrl} alt="bg img" />
            </div>
            <div>
                <GptSearchBar/>
                <GptMovieSuggestion/>
            </div>
        </div>
    )
}

export default GptSearchPage;