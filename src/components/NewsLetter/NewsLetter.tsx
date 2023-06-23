import { MdSend } from "react-icons/md";
const NewsLetter = () => {
    return (
        <div className="h-56 bg-blue-100 py-10 mt-10 md:mt-20">
            <h2 className="heading text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4"> NewsLetter </h2>
            <div className="flex items-center justify-center">
                <input className=" bg-gray-100 p-3 outline-none w-2/4" type="text" placeholder="your Email" />
                <button
                    className="px-8 flex items-center max-w-max py-3 gap-2 bg-black text-white">
                    Submit
                    <MdSend />
                </button>
            </div>
        </div>
    )
}

export default NewsLetter;