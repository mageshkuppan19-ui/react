// import React from 'react'
// import { ShoppingCart} from 'lucide-react'
// const Navbar = () =>{
//     return(
//         <nav className='bg-pink-400 px-6 py-4 text-white shadow-md'>
//             <div className=' relative mx-auto flex max-w-7xl items-center justify-between'>
//                 <a href="#">
//                 <img src="../public/Ice.jpg" alt=""  className='h-10 w-10 rounded-full object-cover'/>
//                 </a>
//                 <ul className='absolute left-1/2 flex -translate-x-1/2 item-center  gap-6'>
//                     <li><a href="#" className='hover:text-red-900'>Home</a></li>
//                     <li><a href="#" className='hover:text-red-900'>Products</a></li>
//                     <li><a href="#" className='hover:text-red-900'>About</a></li>
//                     <li><a href="#" className='hover:text-red-900'>Contact</a></li>

//                 </ul>
//                 <button className='rp-2 text-white hover:text-red-900'>
//                     <ShoppingCart />
//                 </button>
//                 </div>

//        </nav>
//     )
// }

// export default Navbar

import React from 'react';
import { ShoppingCart, Heart, Store } from 'lucide-react';
import {Link} from 'react-router-dom';
 
const Navbar = ({ cartCount, wishlistCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 select-none">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <Store size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight">
            My<span className="text-blue-400">Shop</span>
          </span>

          
          
        </div>
        <nav className="flex items-center justify-between gap-8">
          <Link to="/home" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200">About</Link>
          <Link to="/products" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200">Products</Link>
        </nav>
 
        {/* Right Actions: Wishlist & Cart */}
        <div className="flex items-center gap-3">
          {/* Wishlist Icon */}
          <div
            className="relative p-2.5 rounded-xl hover:bg-gray-800 transition text-gray-300 hover:text-white"
            title="Wishlist"
          >
            <Heart size={22} className={wishlistCount > 0 ? "fill-red-500 text-red-500" : ""} />
            
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
              
            )}
          </div>
 
          {/* Cart Icon with Dynamic Count */}
          <div
            className="relative flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl text-white shadow-sm border border-gray-700"
            aria-label="Shopping Cart"
            id="navbar-cart-button"
            title={`${cartCount} items in cart`}
          >
            <ShoppingCart size={20} className="text-blue-400" />
            {cartCount > 0 ? (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-5 text-center">
                {cartCount}
              </span>
            ) : (
              <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full min-w-5 text-center">
                0
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
 
export default Navbar;