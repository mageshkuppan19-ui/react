  const Product = () =>{
  return (
    <div className="w-72 rounded-xl overflow-hidden bg-white shadow-md">
      <div className="relative">
        <img src="/Ice.jpg" alt="" className="w-full h-48 object-cover" />
      </div>

      <div className="p-4">
        <span className="bg-red-100 text-red-500 text-sm font-semibold px-2 py-1 rounded">
          50% Offer
        </span>
        <h2 className="text-xl font-bold mt-3">ICE CREAM</h2>
        <p className="text-white-600 text-sm mt-1">This is a strawberry flavoured Ice cream </p>
        <p className="text-purple-400 text-sm mt-1 ">100 reviews</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold">$5.99</span>
          <button className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-600">
            Buy here!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product