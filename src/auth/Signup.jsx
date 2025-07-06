import React from 'react'

const Signup = () => {
  return (
    <div className='min-h-screen bg-cyan-900 '>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <h2 className='text-center font-semibold text-3xl'>Signup</h2>

   <label className="label">Name</label>
  <input type="email" className="input" placeholder="Name" />
  
  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Signup</button>
</fieldset>


    </div>
    
  )
}

export default Signup