 import React from 'react';
 import { Truck, ShieldCheck, Headset } from 'lucide-react';
  
const Home = () => {
       const stats = [
            "1000+ happy customers",
            "500+ Products",
            "4.8 Average Ratings",  
            "24/7 Customer Support"
          ];
    return (
          
   <div>
        <div className='w-full min-h-screen  p-5 bg-gray-950 text-white'>
        <p className='text-white-400 font-semibold tracking-widest text-sm mb-3'>
          NEW COLLECTION 2026
        </p>
        <h1 className=' text-blue-500 text-4xl md:text-6xl font-bold leading-tight mb-4'>
                FIND YOUR NEXT <br />FAVOURITE GADGET HERE ! 
        </h1>
        <p className='text-grey-300 max-w-lg mb-8'>
          Ouality Electronics And Accessories At The Best Prices.

        </p>
        {/* created a  map function to add colounms*/}
          <div className='flex flex-wrap gap-4'>
            {
              stats.map((text)=>(
                <div key={text} className='border-2 border-teal-400 rounded-xl px-6 py-4 text-center text-teal-400 font-semibold'>
                    {text}
                </div>
              ))
            }

          </div>

        </div>
    {/* <Headset  className=''/>  */}
      </div>
     
      
       
    );
  };
  
export default Home;