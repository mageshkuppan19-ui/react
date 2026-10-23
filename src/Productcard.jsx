import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
 
const ProductCard = ({
  image,
  category,
  title,
  description,
  price,
  rating,
}) => {
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group relative flex flex-col justify-between">
      <div>
        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 hover:bg-white shadow-sm transition">
          <Heart size={18} />
        </button>
 
        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
 
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
 
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md text-amber-600">
              <Star size={16} className="fill-amber-400 stroke-amber-400" />
              <span className="text-sm font-semibold">{rating}</span>
            </div>
          </div>
        </div>
      </div>
 
      {/* Action Button with Icon */}
      <div className="px-5 pb-5">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm">
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
 
export default ProductCard;