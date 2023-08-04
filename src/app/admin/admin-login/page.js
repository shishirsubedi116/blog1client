'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router = useRouter()
    const handleSubmit = (e)=>{
        e.preventDefault()
        router.push('/admin/admin-panel')
        
    }
    return (
        <div className="bg-white p-6 mx-auto my-10 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
            <form className="w-full">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adminId">Admin ID:</label>
                    <input type="text" id="adminId" name="adminId" className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Admin ID" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Password" />
                </div>
                <button type="submit" onClick={handleSubmit} className="w-full hover:bg-blue-800 bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
            </form>
        </div>
    )
}

export default Page