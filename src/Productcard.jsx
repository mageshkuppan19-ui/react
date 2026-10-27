// import React from 'react';
// import { Star, ShoppingCart, Heart } from 'lucide-react';
 
// const ProductCard = ({
//   image,
//   category,
//   title,
//   description,
//   price,
//   rating,

// }) => {
//   return (
//      <div className='relative'>
//         <span className="absolute px-2 py-1 top-3 left-3 rounded bg-red-500 text-gray-600 font-bold  shadow transition">
//           50% OFF
//         </span>
//             <div className="w-80 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group relative flex flex-col justify-between">
           
//              </div>
       
//       <div>
        
//         {/* Wishlist Button */}
//         <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 hover:bg-white shadow-sm transition">
//           <Heart size={18} />
//         </button>

       
 
//         {/* Product Image */}
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
//         />
 
//         {/* Card Content */}
//         <div className="p-5">
//           <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
//             {category}
//           </span>
 
//           <h3 className="text-lg font-bold text-gray-800 mt-2 line-clamp-1">
//             {title}
//           </h3>
 
//           <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//             {description}
//           </p>
 
//           {/* Price & Rating */}
//           <div className="flex items-center justify-between mt-4">
//             <span className="text-2xl font-bold text-gray-900">${price}</span>
 
//             <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md text-amber-600">
//               <Star size={16} className="fill-amber-400 stroke-amber-400" />
//               <span className="text-sm font-semibold">{rating},(28)</span>
//             </div>
//           </div>
//         </div>
//       </div>
 
//       {/* Action Button with Icon */}
//       <div className="px-5 pb-5">
//         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
//           <ShoppingCart size={18} />
//           <span>Add to Cart</span>
//         </button>
//       </div>
//     </div>
//   );
// };
 
// export default ProductCard;

// 

import React, { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
 
const ProductCard = ({
  image,
  category,
  title,
  description,
  price,
  rating,
  ratingCount,
  stock,
  discount,
  onAddToCart,
  onRemoveFromCart,
  onWishlistToggle,
}) => {
  // 1. Wishlist toggle state (true / false)
  const [isWishlisted, setIsWishlisted] = useState(false);
 
  // 2. Function to toggle wishlist
  const handleWishlistClick = () => {
    const nextState = !isWishlisted;
    setIsWishlisted(nextState);
 
    // Update wishlist count in parent (App.jsx)
    if (onWishlistToggle) {
      onWishlistToggle(nextState);
    }
  };
 
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group relative flex flex-col justify-between">
      <div>
        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            {discount}% OFF
          </span>
        )}
 
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow-sm transition cursor-pointer"
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart
            size={18}
            className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-500"}
          />
        </button>
 
        {/* Product Image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-48 object-cover group-hover:scale-105 transition duration-300 ${stock === 0 ? 'opacity-75' : ''}`}
          />
        </div>
 
        {/* Card Content */}
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {category}
          </span>
 
          <h3 className="text-lg font-bold text-gray-800 mt-2 line-clamp-1">
            {title}
          </h3>
 
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
 
          {/* Price & Rating */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-gray-900">${price}</span>
 
            <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-md text-amber-600">
              <Star size={16} className="fill-amber-400 stroke-amber-400" />
              <span className="text-sm font-semibold">{rating}</span>
              {ratingCount !== 0 && (
                <span className="text-xs text-gray-500 font-normal">({ratingCount})</span>
              )}
            </div>
          </div>
        </div>
      </div>
 
      {/* Action Button */}
      <div className="px-5 pb-5">
        {stock === 0 ? (
          <button
            disabled
            className="w-full bg-gray-200 text-gray-500 font-medium py-2.5 px-4 rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span>Out of Stock</span>
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={onAddToCart}
              className="bg-gray-100 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-gray-700 font-medium py-2.5 px-3 rounded-xl transition cursor-pointer border border-gray-200 text-sm active:scale-95"
              title="add from cart"
            >
              +
            </button>
            <button
              // onClick={onAddToCart}
              className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm"
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
 
            <button
              onClick={onRemoveFromCart}
              className="bg-gray-100 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-gray-700 font-medium py-2.5 px-3 rounded-xl transition cursor-pointer border border-gray-200 text-sm active:scale-95"
              title="Decrease from cart"
            >
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
 
export default ProductCard;