import React from 'react';

export default function() {
    return (
        <div className="flex h-screen w-screen">
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900">
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold">TeleAI</h1>
            <p className="mt-6">Already have an account?</p>
            <button className="mt-4 px-6 py-2 border border-white text-white rounded-md">Login</button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-white p-10 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Register here</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" placeholder="example@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                <input type="password" placeholder="Enter your password again" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}   

