import { BgUrl } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage=()=>{
    return (
        <div>
            <div className="absolute -z-100" >
                <img src={BgUrl} alt="bg img" />
            </div>
            <div>
                <GptSearchBar/>
            </div>
        </div>
    )
}

export default GptSearchPage;