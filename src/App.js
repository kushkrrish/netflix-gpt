import { Provider } from "react-redux";
import Body from "./Components/Body"
import store from "./utils/appStore";

const App=()=>{
    return (
        <Provider store={store}>
        <Body/>
        </Provider>
    )
}

export default App;