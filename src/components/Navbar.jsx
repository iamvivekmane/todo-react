import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-slate-700 text-white'>
            {/* <div className="logo">
                <span className='font-bold text-xl mx-7'>vTask</span>
            </div> */}
            <span className='font-bold text-xl mx-7'>vTask</span>
            {/* <div className="logo">

            </div> */}

            <ul className="flex gap-8 mx-9">
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Your tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar
