import React from 'react'
const Navbar = () =>{
    return(
        <nav className='bg-yellow-600 px-6 py-4 text-white shadow-md'>
            <div className='mx-auto flex max-w-7xl items-center justify-between'>
                <ul className='flex items-center gap-6'>
                    <li><a href="#" className='hover:text-red-900'>Home</a></li>
                    <li><a href="#" className='hover:text-red-900'>Products</a></li>
                    <li><a href="#" className='hover:text-red-900'>About</a></li>
                    <li><a href="#" className='hover:text-red-900'>Contact</a></li>

                </ul>
                <button className='rounded-lg bg-white px-4 py-2 font-bold text-blue-600'>Cart</button>
                </div>

       </nav>
    )
}

export default Navbar