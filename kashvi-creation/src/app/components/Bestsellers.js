import React from "react";

const Bestsellers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Bestsellers</h1>
      <p className="text-center text-gray-700 mt-2">Explore our top-selling sarees.</p>

      {/* Sample Bestseller Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/saree1.jpg" alt="Bestseller 1" className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Elegant Red Saree</h3>
          <p className="text-gray-600">Design Number: KC101</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/saree2.jpg" alt="Bestseller 2" className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Modern Blue Saree</h3>
          <p className="text-gray-600">Design Number: KC102</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img src="/saree3.jpg" alt="Bestseller 3" className="rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Graceful Green Saree</h3>
          <p className="text-gray-600">Design Number: KC103</p>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;



  