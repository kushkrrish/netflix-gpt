import Header from "./Header";
import { useState } from "react";

const Login=()=>{
    const [signIn,setSignIn]=useState(false);
    const toggleSign=()=>{
        setSignIn(!signIn);
    }
    return (
        <div >
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg" alt="img"/>
            </div>
            <form className=" w-3/12 p-10 absolute bg-black my-36 mx-auto left-0 right-0 opacity-85 rounded-lg" >
                <h1 className="font-extrabold text-3xl py-4 text-white">{signIn===false?"Sign In":"Sign Up"}</h1>
                {signIn && <input type="text" placeholder="Full Address" className="p-3 my-3 w-full bg-gray-700 text-white font-extrabold"/>}
                <input type="text" placeholder="Email Address" className="p-3 my-3 w-full bg-gray-700 text-white font-extrabold"/>
                <input type="password" placeholder="password" className="p-3 my-3 w-full bg-gray-700 text-white font-extrabold"/>
                <button className="my-3 p-3 bg-red-800 w-full text-white font-bold rounded-s-sm">Sign in</button>
                <h1 className="font-bold  text-white text-sm my-2 p-2 cursor-pointer" onClick={toggleSign}> { signIn===false?"New to Netflix? Sign Up Now" : "already user? sign in"}</h1>

            </form>
            
        </div>
    )
}

export default Login;