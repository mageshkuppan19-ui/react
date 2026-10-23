
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

import React from 'react'
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import ProductCard from "./ProductCard.jsx"
import products from "./products.js"
 
const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
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
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
 
export default App
