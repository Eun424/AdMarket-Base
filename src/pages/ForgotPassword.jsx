import React, { useState, useContext } from 'react'
import { themeContext } from '../context/ThemeContext'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { forgotPassword } from '../store/features/authSlice'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { theme } = useContext(themeContext)
    const [email, setEmail] = useState('')
    const[message, setMessage] = useState(null)
    

    const handleSend = (e) => {
        e.preventDefault()
        dispatch(forgotPassword({ email }))
        setMessage('Link has been sent to your email')
        
    }

    

    return (
        <div className={`flex flex-col justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-black/90' : 'bg-blue-50'}`}>
            <form
                id='login-form'
                onSubmit={handleSend}
                className={`relative flex flex-col gap-5 p-8 w-full max-w-lg rounded-xl 
                    ${theme === 'dark' ? 'bg-gray-900 border-gray-700 shadow-lg' : 'bg-white border border-white/20 shadow-lg'}`}
            >
                <div>
                    <h4 className={`text-3xl sm:text-4xl font-bold text-center ${theme === 'dark' ? 'text-yellow-500' : 'text-blue-900'}`}>
                        Please enter your email!
                    </h4>
                </div>

                <div className='text-red-400 text-center'></div>

                <div className='flex flex-col gap-1'>
                    <label className={`font-bold ${theme === 'dark' ? 'text-blue-500' : 'text-blue-800'}`}>Email</label>
                    <input
                        className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 
                            ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-300 text-gray-800'}`}
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>

                <button
                    type="submit"
                    className={`text-white font-bold py-3 px-6 rounded transition ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    Send link
                </button>

                <button
                    type='button'
                    onClick={() => navigate(-1)}
                    className={`mt-6 px-6 py-2 rounded font-semibold transition
                        ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                    Go back
                </button>
            </form>
        </div>
    )
}

export default ForgotPassword
