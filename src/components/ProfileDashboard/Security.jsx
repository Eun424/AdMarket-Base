import React from 'react'

const Security = () => {
  return (
    <div>
        <div className="space-y-10">
      
      <div className="border-b border-gray-100 pb-6">
        <h2 className="text-xl font-semibold mb-2">Change Password</h2>
        <form className="space-y-4 max-w-md">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full border border-gray-100 rounded-lg p-2 outline-blue-950"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full border border-gray-100 rounded-lg p-2 outline-blue-950"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full border border-gray-100 rounded-lg p-2 outline-blue-950"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>
      </div>

     
      <div className="border-b border-gray-100 pb-6">
        <h2 className="text-xl font-semibold mb-2">Security Questions</h2>
        <form className="space-y-4 max-w-md">
          <select className="w-full border border-gray-100 rounded-lg p-2">
            <option>What was your childhood nickname?</option>
            <option>What is the name of your favorite teacher?</option>
            <option>Where were you born?</option>
          </select>
          <input
            type="text"
            placeholder="Your Answer"
            className="w-full border border-gray-100 rounded-lg p-2 outline-blue-950"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Security Question
          </button>
        </form>
      </div>  
    </div>
    </div>
  )
}

export default Security