import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen bg-cyan-900 ' >
      <form action="" className='flex justify-center items-center  min-h-screen '>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-6 ">
          <h2 className='text-center font-semibold text-3xl'>Login</h2>

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center mt-2'>Don't have an account? Sign Up</p>
        </fieldset>
      </form>
    </div>
  )
}

export default Login