import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 text-black py-8">
                <div className="container mx-auto flex flex-wrap text-center justify-center">
                    <div className="w-full md:w-1/3 p-4 text-left">
                        <h2 className="text-xl font-bold mb-2">Footer Title</h2>
                        <p className="bg-gray-100 text-black mb-2">Footer description 1. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.</p>
                        <p className="bg-gray-100 text-black">Footer description 2. Sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <ul className="bg-gray-100 text-black">
                            <li><Link href="/" className="block mb-1">Link 1</Link></li>
                            <li><Link href="/" className="block mb-1">Link 2</Link></li>
                            <li><Link href="/" className="block mb-1">Link 3</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <ul className="bg-gray-100 text-black">
                            <li><Link href="/" className="block mb-1">Link 1</Link></li>
                            <li><Link href="/" className="block mb-1">Link 2</Link></li>
                            <li><Link href="/" className="block mb-1">Link 3</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer className="bg-gray-100 text-black py-4 text-center">
                <div className="container mx-auto">
                    <p>&copy; 2023 The Productive Hindu. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer