import Image from 'next/image'
import React from 'react'
import background from '../../../../public/background.webp'

const page = () => {
  return (
    <div className="container mx-auto py-8 px-2">
    <h1 className="text-3xl font-bold mb-4 text-center">All Blogs</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* <!-- Blog Post 1 --> */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <Image width={300} height={400} src={background} alt="Blog Image 1" className="w-full h-full object-cover rounded-md mb-4"/>
        <h2 className="text-lg font-semibold mb-2">Blog Title 1</h2>
        <div className="flex justify-between">
          <a href="/admin/editblog" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Edit</a>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Delete</button>
        </div>
      </div>

      {/* <!-- Blog Post 2 --> */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <Image width={300} height={400} src={background} alt="Blog Image 2" className="w-full h-full object-cover rounded-md mb-4"/>
        <h2 className="text-lg font-semibold mb-2">Blog Title 2</h2>
        <div className="flex justify-between">
          <a href="/admin/editblog" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Edit</a>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Delete</button>
        </div>
      </div>

      {/* <!-- Add more blog posts here --> */}
      {/* <!-- For each blog post, create a similar div with image, title, edit, and delete button --> */}
    </div>
  </div>
  )
}

export default page