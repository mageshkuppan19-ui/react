import React from 'react'
import Product from './Product.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const App = () => {
  return (
    
        <div className='pb-32'>
            <Navbar />
          
            <div className='flex flex-wrap justify-center p-10'>
              <Product image="/Ice.jpg" name="ICE CREAM" price="$4.99 "/>
            </div>
         
          <Footer />
        
   </div>
       
      
   
  )
}

export default App
