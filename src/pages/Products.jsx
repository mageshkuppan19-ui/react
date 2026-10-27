// import react from 'react';
  
//   const Products = () => {
//     return (
//       <div className='max-w-7xl mx-auto px-6 py-10 text-gray-900'>
//         <h1 className='text-3xl font-bold mb-4'>THIS IS MY PRODUCT PAGE !</h1>
        
//     </div>
       
//     );
//   };
  
// export default Products;

import React, { useState } from 'react';
import ProductCard from '../Productcard.jsx';
import products from '../products.js';
 
const Products = ({ cartCount, setCartCount, wishlistCount, setWishlistCount }) => {
  const handleAddToCart = () => setCartCount(cart => cart + 1);
  const handleRemoveFromCart = () => setCartCount(cart => Math.max(0, cart - 1));
  const handleWishlistToggle = (isAdded) =>
    setWishlistCount(wishlist => isAdded ? wishlist + 1 : wishlist - 1);
 
  return (
    <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            rating={item.rating}
            ratingCount={item.ratingCount}
            stock={item.stock}
            discount={item.discount}
            description={item.description}
            image={item.image}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onWishlistToggle={handleWishlistToggle}
          />
        ))}
      </div>
    </main>
  );
};
 
export default Products;