import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar=()=>{
    const language=useSelector((store)=>store.config.lang);
    return (
        <div className="pt-[10%] flex justify-center">
            <form className=" w-1/2 z-30 bg-black grid grid-cols-12">
                <input type="text" placeholder={lang[language].gptSearchPlaceholder} className=" p-4 m-4 col-span-8"/>
                <button className="col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;