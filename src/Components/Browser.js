
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useToprate from "../hooks/useToprate";

const Browser=()=>{
    useNowPlaying()
    usePopular()
    useToprate()
    // console.log(movies);

    return (
        <div>
            <Header/>
            <MainContainer />
            <SecondaryContainer/>
            
        </div>
    )
};

export default Browser;