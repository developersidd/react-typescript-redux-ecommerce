import React, { useState } from "react";
import img from "../assets/images/login.svg";
interface IContact {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}
const Contact = () => {
    const [data, setData] = useState<IContact>({ fullName: "", email: "", subject: "", message: "" })
    // handle user input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const newState = { ...data };
        newState[name as keyof IContact] = value;
        setData(newState);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // add logic here
        setData({ fullName: "", email: "", subject: "", message: "" });
    }

    const { email, fullName, message, subject } = data;
    return (
        <div className="container mx-auto px-5 md:px-8 py-20">
            <h1 className='heading text-3xl'>CONTACT WITH US </h1>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="bg-white w-full md:w-1/2 rounded-md overflow-hidden shadow-xl">
                    <h3 className="text-center text-yellow-400 text-2xl mt-8 font-semibold"> </h3>
                    <div>
                        <div className="p-4 md:p-7">
                            <form className='mb-4' onSubmit={handleSubmit}>
                                <input onChange={handleInputChange} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-3 mb-3 outline-none" name="fullName" value={fullName} type="text" placeholder="Your Full Name" />
                                <input onChange={handleInputChange} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-3 my-4 outline-none" name="email" value={email} type="email" placeholder="Your Email" />
                                <input onChange={handleInputChange} className="border-2 focus:border-yellow-400 rounded-full block w-full px-4 py-3 my-3 outline-none" name="subject" value={subject} type="text" placeholder="Your Subject" />
                                <textarea onChange={handleInputChange} className="border-2 focus:border-yellow-400 rounded-xl block w-full px-4 py-3 my-5 outline-none" name="message" value={message} rows={4} placeholder="Your Subject" />
                                <button type='submit' className="px-7 mr-1 py-2 rounded-3xl bg-blue-500 hover:bg-blue-600  text-white shadow-lg"> Submit </button>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <img className="login-contact-animation w-full h-96" src={img} alt="login-register-img" />
                </div>
            </div>
        </div>)
}

export default Contact;