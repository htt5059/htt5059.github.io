import React, { useState } from "react";

_EMAIL_PASSWORD_ = import.meta.env.EMAIL_PASSWORD
console.log(_EMAIL_PASSWORD_)

function Contact(){
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(_EMAIL_PASSWORD_)
    }

    return (
        <div className="h-full flex flex-col items-scretch mx-3 lg:mx-7 my-5">
            {/* Page Title */}
            <>
                <h1 className="text-white text-2xl font-bold">Contact</h1>
                <hr className="h-px my-2 mx-12 bg-amber-300 border-0"/>
            </>

            <div className="h-full my-5 mx-2 flex flex-col items-scretch">
                <iframe className="w-full h-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789025.1753237504!2d-81.65895074868769!3d33.431475338956965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bafaf828004f%3A0xee8ffc1178a3c6b8!2s21%20Oaks!5e0!3m2!1sen!2sus!4v1719254242226!5m2!1sen!2sus" width="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                <div className="h-full flex flex-col items-scretch">
                    <form className="w-full h-full" onSubmit={submitHandler}>
                        <input onChange={(e) => setEmail(e)} name="email" type="email" className="w-full my-2 p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                        <input onChange={(e) => setSubject(e)} name="subject" type="text" className="w-full my-2 p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required/>
                        <textarea onChange={(e) => setMessage(e)} name="body" className="w-full h-full my-2 p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required/>
                        <div className="flex justify-center">
                            <button className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#4169E1"}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;