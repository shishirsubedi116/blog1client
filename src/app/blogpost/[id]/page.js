import Blogs from '@/components/Blogs'
import Image from 'next/image'
import React from 'react'
import background from '../../../../public/background.webp'

const Page = ({params}) => {
    return (
        <>
            <section className="container mx-auto my-8 px-4 md:w-3/4 sm:w-11/12">
                <div className="text-center">
                    <p className="text-gray-600">Published on Aug 10, 2023</p>
                    <h1 className="text-3xl font-bold my-4">Title of the Blog Post</h1>
                    <p className="text-gray-600">Blog introduction or brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </section>

            <section className="container mx-auto my-8 px-4 md:w-3/4 sm:w-11/12">
                <div className="flex flex-col items-center">
                    <div className="w-full p-2">
                        <Image width={300} height={400} src={background} alt="Blog Image" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full p-4">
                        <h2 className="text-2xl font-bold mb-2">Sub Topic of the Blog</h2>
                        <p className="text-gray-600">This is the main content of the blog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, purus eu vestibulum rutrum, erat sapien venenatis odio, sit amet aliquam sapien dui id risus.</p>
                        <p className="text-gray-600 mt-4">In this section, you can write about the details, insights, and main content of the blog post. Etiam eu tellus nec mi lacinia fermentum id quis nisi. Sed auctor felis eget lectus placerat, in scelerisque tortor hendrerit.</p>
                    </div>
                </div>
            </section>
            <Blogs/>
        </>
    )
}

export default Page