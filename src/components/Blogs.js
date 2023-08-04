import Link from 'next/link'
import React from 'react'

const Blogs = () => {
  return (
    <section className="container mx-auto mt-8 px-3">
    <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-left my-3">
            Related Posts
        </h2>                                                              
        <div className="bg-white shadow-md rounded-md overflow-hidden w-2/3 md:w-4/5 mb-8">
            <div className="flex flex-col md:flex-row">
                <div className="w-1/3 p-2">
                    <img src="https://media.istockphoto.com/id/1213633461/photo/modern-interior-of-a-bedroom-with-light-green-walls-night-evening-lighting-3d-rendering.jpg?s=612x612&w=0&k=20&c=DRISjC5TES08dDEEIkFgvnfsHzpGSwCsrs73gpUtqxc=" alt="Blog Image 1" className="w-full h-auto object-cover"/>
                </div>
                <div className="w-2/3 p-4">
                    <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-1">Posted on Aug 2, 2023</p>
                        <h3 className="text-xl font-semibold mb-2">Blog Title 1</h3>
                        <Link href="/blogpost/dummydata" className="text-gray-600 hover:underline no-underline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus officia quae tenetur quaerat aspernatur reprehenderit ut neque ipsum accusantium eveniet soluta iste similique atque ipsam, repudiandae at odio dignissimos quis. Sunt nisi obcaecati sint sequi. Iure distinctio facere corrupti sunt deserunt soluta laudantium ratione.</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden w-2/3 md:w-4/5 mb-8">
            <div className="flex flex-col md:flex-row">
                <div className="w-1/3 p-2">
                    <img src="https://media.istockphoto.com/id/1213633461/photo/modern-interior-of-a-bedroom-with-light-green-walls-night-evening-lighting-3d-rendering.jpg?s=612x612&w=0&k=20&c=DRISjC5TES08dDEEIkFgvnfsHzpGSwCsrs73gpUtqxc=" alt="Blog Image 1" className="w-full h-auto object-cover"/>
                </div>
                <div className="w-2/3 p-4">
                    <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-1">Posted on Aug 2, 2023</p>
                        <h3 className="text-xl font-semibold mb-2">Blog Title 1</h3>
                        <Link href="/blogpost/dummydata" className="text-gray-600 hover:underline no-underline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus officia quae tenetur quaerat aspernatur reprehenderit ut neque ipsum accusantium eveniet soluta iste similique atque ipsam, repudiandae at odio dignissimos quis. Sunt nisi obcaecati sint sequi. Iure distinctio facere corrupti sunt deserunt soluta laudantium ratione.</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden w-2/3 md:w-4/5 mb-8">
            <div className="flex flex-col md:flex-row">
                <div className="w-1/3 p-2">
                    <img src="https://media.istockphoto.com/id/1213633461/photo/modern-interior-of-a-bedroom-with-light-green-walls-night-evening-lighting-3d-rendering.jpg?s=612x612&w=0&k=20&c=DRISjC5TES08dDEEIkFgvnfsHzpGSwCsrs73gpUtqxc=" alt="Blog Image 1" className="w-full h-auto object-cover"/>
                </div>
                <div className="w-2/3 p-4">
                    <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-1">Posted on Aug 2, 2023</p>
                        <h3 className="text-xl font-semibold mb-2">Blog Title 1</h3>
                        <Link href="/blogpost/dummydata" className="text-gray-600 hover:underline no-underline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus officia quae tenetur quaerat aspernatur reprehenderit ut neque ipsum accusantium eveniet soluta iste similique atque ipsam, repudiandae at odio dignissimos quis. Sunt nisi obcaecati sint sequi. Iure distinctio facere corrupti sunt deserunt soluta laudantium ratione.</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Blogs