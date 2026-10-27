
// import React from 'react'
// import Navbar from "./Navbar.jsx"
// import Footer from "./Footer.jsx"
// import ProductCard from "./ProductCard.jsx"
// import Products from "./Products.js"
 
// const App = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-50">
//       <Navbar />
//       <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {Products.map((item) => (
//             <ProductCard
//               key={item.id}
//               title={item.title}
//               category={item.category}
//               price={item.price}
//               rating={item.rating}
//               description={item.description}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };
 
// export default App

// import React from 'react'
// import Navbar from "./Navbar.jsx"
// import Footer from "./Footer.jsx"
// import ProductCard from "./ProductCard.jsx"
// import products from "./Products.js"
 
// const App = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gray-50">
//       <Navbar />
//       <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {products.map((item) => (
//             <ProductCard
//               key={item.id}
//               title={item.title}
//               category={item.category}
//               price={item.price}
//               rating={item.rating}
//               ratingCount={item.ratingCount}
//               stock={item.stock}
//               discount={item.discount}
//               description={item.description}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };
 
// export default App
import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ProductCard from "./Productcard.jsx";
import products from "./Products.js";
 
const App = () => {
  // 1. State for Cart Count
  const [cartCount, setCartCount] = useState(0);
 
  // 2. State for Wishlist Count
  const [wishlistCount, setWishlistCount] = useState(0);
 
  // Function to increase cart count by 1
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
 
  // Function to decrease cart count by 1 (cannot go below 0)
  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };
 
  // Function to increase or decrease wishlist count based on toggle
  const handleWishlistToggle = (isAdded) => {
    if (isAdded) {
      setWishlistCount(wishlistCount + 1);
    } else {
      setWishlistCount(wishlistCount - 1);
    }
  };
 
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Pass counts to Navbar */}
      <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
 
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
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
      <Footer />
    </div>
  );
};
 
export default App;