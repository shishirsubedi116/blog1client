'use client'
import React from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    return (
        <nav className="bg-white mx-2 px-4 py-2 flex items-center justify-between md:flex-row flex-col">
            <div className="flex items-center cursor-pointer" onClick={()=>router.push('/')}>
                <Image height={10} width={200} src={logo} alt="Logo" className="h-10 w-auto" />
                <span className="font-semibold text-lg ml-2">The Productive Hindu</span>
            </div>

            <div className="relative mt-2 md:mt-0 md:w-1/3 lg:w-1/4">
                <input type="text" placeholder="Search"
                    className="py-2 pl-8 pr-12 rounded-full focus:outline-none md:max-w-sm lg:max-w-md border border-gray-300" />
                <button
                    className="bg-gray-600 text-white rounded-full px-4 py-2 absolute ">
                        search
                </button>
            </div>

            <div className="flex items-center mt-2 md:mt-0">
                <a href="/" className="mx-3 text-gray-600 hover:text-gray-800">Home</a>
                <a href="/" className="mx-3 text-gray-600 hover:text-gray-800">Topics</a>
                <a href="/admin/admin-panel" className="mx-3 text-gray-600 hover:text-gray-800">Books</a>
                <button className="bg-gray-600 text-white rounded px-4 py-2 ml-4">Dark Mode</button>
            </div>
        </nav>
    )
}

export default Navbar