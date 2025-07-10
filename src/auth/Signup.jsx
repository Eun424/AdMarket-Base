import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <form className="w-full max-w-md px-4">
        <fieldset className="bg-[#0C1C3D] border-base-300 rounded-2xl border p-8 shadow-lg">
          <h2 className="text-center font-semibold text-3xl text-white mb-6">Signup</h2>
          <label className="label text-white">Name</label>
          <input type="name" className="input input-bordered w-full" placeholder="Name" />

          <label className="label text-white">Email</label>
          <input type="email" className="input input-bordered w-full" placeholder="Email" />

          <label className="label text-white mt-4">Password</label>
          <input type="password" className="input input-bordered w-full" placeholder="Password" />

          <button className="btn btn-neutral bg-[#9CD2F6] mt-6 w-full border-0 text-[#0C1C3D]">Signup</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Signup;
