
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useToprate from "../hooks/useToprate";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browser = () => {
    const gptPage = useSelector((store) => store.gpt.showGpt);
    useNowPlaying()
    usePopular()
    useToprate()
    // console.log(movies);

    return (
        <div>
            <Header />
            {
                gptPage === true ? <GptSearchPage /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            }


        </div>
    )
};

export default Browser;