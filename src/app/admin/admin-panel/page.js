'use client'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className="container mx-auto py-8 px-4 md:w-3/4 lg:w-2/3">
            <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/admin/addblogpost" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg block text-center">Add new blog</Link>
                <Link href="/admin/fetchallblogs" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg block text-center">Fetch all blogs</Link>
                <Link href="/admin/addbook" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg block text-center">Add New Book</Link>
                <Link href="/admin/fetchallbooks" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg block text-center">Fetch all books</Link>
            </div>
        </div>
    )
}

export default Page