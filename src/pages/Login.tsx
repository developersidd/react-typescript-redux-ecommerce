import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ErrorMessage from '../components/ui/ErrorMessage';
import Loading from '../components/ui/Loading';
import useFirebase from '../hooks/useFirebase';
import { useAppDispatch } from '../redux/app/hooks';
import { userLoggedIn } from '../redux/features/auth/authSlice';
import SetPageTitle from '../ui/SetPageTitle';
const Login = () => {

    const { googleSignIn, logInUser } = useFirebase();
    const dispatch = useAppDispatch();

    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const redirect_URL = location.state?.from || "/";
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email !== "" && password !== "") {
            setIsLoading(true);
            logInUser({ email, password })
                .then((result) => {
                    setError("");
                    dispatch(userLoggedIn(result.user));
                    navigate("/");
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => setIsLoading(false))
        } else {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Input fields can not be empty! 🤕',
            });
        }

    }

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        googleSignIn()
            .then((result) => {
                dispatch(userLoggedIn(result.user))
                navigate(redirect_URL);
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false))

    }

    return (
        <div className="flex h-[70vh] items-center justify-center">
                    <SetPageTitle title="Login" />

            <div className="p-4 md:p-6 lg:p-10 w-full sm:w-3/4 md:w-4/5 lg:w-3/6 xl:w-2/5">
                <div className="bg-white rounded-md overflow-hidden shadow-xl w-full">
                    <h3 className="text-center text-yellow-400 text-2xl my-4 font-semibold">SIGN IN </h3>
                    <div>
                        <div className="px-4 md:px-6">
                            <form className='' onSubmit={handleSubmit}>
                                <input onChange={e => setEmail(e.target.value)} value={email} className="border-2 focus:border-yellow-200 rounded-full block w-full px-4 py-2 md:py-3 mb-4 outline-none" type="email" placeholder="Your Email" />
                                <input onChange={e => setPassword(e.target.value)} value={password} className="border-2 focus:border-yellow-200 rounded-full block w-full px-4 py-2 md:py-3 mb-6 outline-none" type="password" placeholder="Your password" />
                                <div className='flex justify-center sm:justify-between  items-stretch flex-col sm:items-center sm:flex-row'>
                                    <button type='submit' className="justify-stretch sm:justify-center px-8 mr-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600 mb-4 sm:mb-0  text-white shadow-lg">
                                        Sing In </button>
                                    <p className="inline-block text-center pb-2">New to AB  Shop?<NavLink to="/register" className="text-blue-500 cursor-pointer"> Register </NavLink> </p>
                                </div>
                            </form>
                            {error && <ErrorMessage message={error} />}

                        </div>

                        <div className="p-1 md:p-2">
                            <h4 className="text-blue-500 text-lg text-center font-medium">Or sign in with </h4>
                            <ul className="flex items-center justify-center py-3 gap-5 text-blue-500 text-lg">
                                <li><span onClick={handleGoogleSignIn} className="cursor-pointer" >  <FcGoogle /> </span></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
