import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ErrorMessage from '../components/ui/ErrorMessage';
import Loading from '../components/ui/Loading';
import useFirebase from '../hooks/useFirebase';
import { useAppDispatch } from '../redux/app/hooks';
import { userLoggedIn } from '../redux/features/auth/authSlice';
import SetPageTitle from '../ui/SetPageTitle';

const SignUp = () => {

    const { createUser, updateUser } = useFirebase();
    const dispatch = useAppDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email !== "" && password !== "" && name !== "") {
            setIsLoading(true);
            createUser({ email, password })
                .then(async (result) => {
                    setError("");
                    await updateUser(name);
                    Swal.fire({
                        icon: 'success',
                        title: 'EXTRAORDINARY',
                        text: 'Registered Successfully!',
                    });
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
                text: 'Input fields can not be empty',
            });
        }
    }

    return (
        <div className="flex h-[70vh] items-center  justify-center">
                    <SetPageTitle title="Sign Up" />

            <div className="p-4 md:p-4 lg:p-10 w-full sm:w-3/4 md:w-3/5 lg:w-3/6 xl:w-2/5">
                <div className="bg-white  rounded-md overflow-hidden shadow-xl">
                    <h3 className="text-center text-yellow-400 text-2xl mt-8 font-semibold">SIGN UP </h3>
                    <div>
                        <div className="p-4 md:p-5 lg:p-6">
                            <form className='mb-4' onSubmit={handleSubmit}>
                                <input onChange={e => setName(e.target.value)} value={name} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-2 md:py-3 mb-3 outline-none" type="text" placeholder="Your Name" />
                                <input onChange={e => setEmail(e.target.value)} value={email} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-2 md:py-3 my-4 outline-none" type="email" placeholder="Your Email" />
                                <input onChange={e => setPassword(e.target.value)} value={password} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-2 md:py-3 my-3 outline-none" type="password" placeholder="Your password" />
                                <div className="my-4">
                                    <input className="w-7 h-4" type="checkbox" name="" id="terms" />
                                    <label htmlFor="terms">Accepts The <span className="text-blue-500">Terms & Condition </span> </label>
                                </div>
                                <div className="pt-2 gap-2 flex justify-center sm:justify-between items-stretch flex-col sm:items-center sm:flex-row">
                                    <button type='submit' className=" px-7 mr-4 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg">Sing Up </button>
                                    <p className="inline-block text-center pb-2">Already have an account?<NavLink to="/login" className="text-blue-500 cursor-pointer">Login </NavLink> </p>
                                </div>
                            </form>
                            {error && <ErrorMessage message={error} />}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
