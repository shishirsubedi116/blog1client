import Blogs from '@/components/Blogs'

export default function Home() {
  return (
    <>
      <section className="container mx-auto mt-8 flex flex-col items-center">
        <div className="bg-white px-4 py-6 w-full md:w-1/2 mb-4">
          <h1 className="text-3xl font-bold mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, a
            dolorum recusandae cum error provident.</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu velit augue.</p>
        </div>

        <div className="bg-white px-4 py-6 w-full md:w-2/3 lg:w-1/2">
          <div className="flex justify-center items-center">
            <input type="text" className="w-1/2 py-2 px-4 border rounded-l-lg focus:outline-none"
              placeholder="Search..."/>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-r-lg">
                search
              </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-8 flex flex-col items-center">
        <div className="bg-white px-4 py-6 w-full md:w-2/3 lg:w-1/2 mb-4">
          <h2 className="text-2xl font-bold mb-2">Welcome to The Productive Hindu</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu velit augue.</p>
        </div>

      </section>

      <section className="container mx-auto mt-8 px-10">
        <div className="flex items-center justify-between overflow-x-auto py-4">
          <button className="p-2 rounded-full hover:bg-gray-200 focus:outline-none">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3">Link 1</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3">Link 1</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3">Link 1</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3">Link 1</a>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-200 focus:outline-none">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </section>

      <Blogs/>
    </>
  )
}
