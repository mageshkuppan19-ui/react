import React from 'react';
  
  const About = () => {
    return (
    <div className='max-w-6xl mx-auto px-6 py-14 '>
        <div className='grid gap-10 md:grid-cols-2 items-center'>
          <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt=" My Shop" className='rounded-2xl shadow-lg w-full h-80 object-cover'/>
          <div>
          <p className='text-blue-600 font-semibold text-sm tracking-widest mb-2'> ABOUT US </p>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Welcome To My Shop</h1>
          <p className='text-gray-600 leading-relaxed'>
            We started myshop to make great gadget easy to find out and affordable price . 24/7 customer support. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque assumenda esse nihil laboriosam vitae ipsam? Ab similique, et doloribus totam animi doloremque in numquam error odit ipsa, nesciunt debitis.
          </p>
        </div>
        </div>
    </div>
       
    );
  };
  
export default About;