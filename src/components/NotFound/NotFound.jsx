import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }
    return (
        <div className="h-screen  bg-gray-50 flex items-center justify-center flex-col">
            <h3 className="text-3xl font-semibold mb-6">the page you want to go is currently unavailable 😭 </h3>
            <button onClick={handleBack}
                className="px-8 border-2 border-black text-lg font-semibold py-3  hover:bg-black hover:text-white">
                <span> Back to home </span>
            </button>

        </div>
    )
}

export default NotFound
