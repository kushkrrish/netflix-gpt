import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Header from "./Header"
import Login from "./Login"
import Browser from "./Browser"

 const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browser/>
        }
    ])
    return (
        <RouterProvider  router={appRouter}/>
    )
}


export default Body