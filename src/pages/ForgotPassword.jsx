import React, { useState } from 'react'
import { useContext } from 'react'
import { themeContext } from '../context/ThemeContext'
import { Link } from 'react-router'
import { FaBackward } from 'react-icons/fa'
import { IoArrowBackOutline } from 'react-icons/io5'

const ForgotPassword = () => {
    const { theme } = useContext(themeContext)
    const [email, setEmail] = useState('')

    return (
        <div>
            <div>
                <div className={`flex flex-col justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-black/90' : 'bg-blue-50'}`}>
                    <form action="" 
                        className="relative flex flex-col gap-5 p-8 w-full  max-w-lg rounded-xl bg-white  border border-white/20 shadow-lg ">
                        <div>
                            <h4 className={`text-3xl sm:text-4xl text-blue-800 font-bold text-center ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-900'}`}>
                                Please enter your email!
                            </h4>
                        </div>
                        <div className='text-red-400 text-center'>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className={`font-bold ${theme === 'dark' ? 'text-blue-500' : 'text-blue-800'}`}>Email</label>
                            <input
                                className="bg-white p-3 rounded text-gray-800 border border-gray-100"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>

                        <button
                            type="Submit"
                            className={` text-white font-bold py-3 px-6 rounded transition ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                            Send link
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword