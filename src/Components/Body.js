import {  RouterProvider } from "react-router-dom"
// import Header from "./Header"
import {appRouter} from "./Header"; 


 const Body=()=>{
   
    return (
        <RouterProvider  router={appRouter}/>
    )
}


export default Body