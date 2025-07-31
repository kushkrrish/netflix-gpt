import validation from "../utils/checkValidate";
import Header from "./Header";
import { useState,useRef } from "react";

const Login = () => {
    const [signIn, setSignIn] = useState(false);
    
    const [errMsg,seterrMsg]=useState(null);
    const email=useRef(null);
    const password=useRef(null);

    const toggleSign = () => {
        setSignIn(!signIn);
    }
    const validate=()=>{
        const check=validation(email.current.value,password.current.value);
        seterrMsg(check);
        // console.log(check);
    }


    
    return (
        <div >
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg" alt="img" />
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
            }} className=" w-3/12 p-10 absolute bg-black my-36 mx-auto left-0 right-0 opacity-85 rounded-lg" >
                <h1 className="font-extrabold text-3xl py-4 text-white">{signIn === false ? "Sign In" : "Sign Up"}</h1>

                {signIn && <input type="text" placeholder="Full Address" className="p-3 my-3 w-full bg-gray-700 text-white font-extrabold" />}

                <input type="text" placeholder="Email Address" className="p-3 my-3 w-full bg-gray-700 text-white font-extrabold" ref={email} />
                <input type="password" placeholder="password" className="p-3 my-3 w-full bg-gray-700 text-white font-extrabold" ref={password} />
                <p className="font-bold text-red-600 text-sm p-3">{errMsg}</p>
                <button className="my-3 p-3 bg-red-800 w-full text-white font-bold rounded-s-sm" onClick={validate}>{signIn===false?"sign in":"sign up"}</button>
                <h1 className="font-bold  text-white text-sm my-2 p-2 cursor-pointer" onClick={toggleSign}> {signIn === false ? "New to Netflix? Sign Up Now" : "already user? sign in"}</h1>

            </form>

        </div>
    )
}

export default Login;