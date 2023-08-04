import React from 'react'

const Page = () => {
  return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4 text-center">Edit Book</h1>
    <form className="max-w-md mx-auto">
      {/* <!-- Blog Title --> */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
        <input type="text" id="title" name="title" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" value="Sample Blog Title"/>
      </div>

      {/* <!-- Sub-topic --> */}
      <div className="mb-4">
        <label htmlFor="subTopic" className="block text-gray-700 font-bold mb-2">Author:</label>
        <input type="text" id="subTopic" name="subTopic" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" value="Sample Author"/>
      </div>

      {/* <!-- Image URL --> */}
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image URL:</label>
        <input type="text" id="image" name="image" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" value="https://example.com/sample-image.jpg"/>
      </div>

      {/* <!-- Blog Description --> */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
        <textarea id="description" name="description" rows="4" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500">Sample blog description goes here.</textarea>
      </div>

      {/* <!-- Author --> */}
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author:</label>
        <input type="text" id="author" name="author" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" value="John Doe"/>
      </div>

      {/* <!-- Update Button --> */}
      <div className="text-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Update Blog</button>
      </div>
    </form>
  </div>
  )
}

export default Page