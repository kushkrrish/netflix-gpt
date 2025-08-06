import { createBrowserRouter, useNavigate } from "react-router-dom"
import Login from "./Login"
import Browser from "./Browser"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch,useSelector} from "react-redux"
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice"
export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browser />
    }
]);


const Header = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/browse');
            }
            else {
                navigate('/');
            }
        })
    }, []);
    
    const dispatch = useDispatch();

    const signingOut = () => {



        signOut(auth).then(() => {
            dispatch(removeUser());
            // Sign-out successful.
        }).catch((error) => {
            console.log(error);
            // An error happened.
        });
    }
    return (

        <div className="absolute z-10 px-10 py-2 bg-gradient-to-b from-black w-screen flex justify-between" >
            <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            
            <div>
                
                <button
                    onClick={signingOut}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    Sign Out
                </button>

            </div>
            {/* {user && <div>hello</div>} */}
        </div>
    )
}
export default Header