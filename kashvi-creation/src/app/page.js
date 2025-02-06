import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/public/hero-image.jpg')", // Replace with your actual hero image file name
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Kashvi Creation</h1>
          <p className="text-lg sm:text-xl">Elegance meets tradition in every saree we craft.</p>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Sample products */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <Image src="/saree1.jpg" alt="Saree 1" width={400} height={400} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Elegant Red Saree</h3>
            <p className="text-gray-600">Design Number: KC101</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <Image src="/saree2.jpg" alt="Saree 2" width={400} height={400} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Modern Blue Saree</h3>
            <p className="text-gray-600">Design Number: KC102</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <Image src="/saree3.jpg" alt="Saree 3" width={400} height={400} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Graceful Green Saree</h3>
            <p className="text-gray-600">Design Number: KC103</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">About Kashvi Creation</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Kashvi Creation is a premium manufacturer of exclusive designer studio sarees. 
          Offering a perfect blend of tradition and modern aesthetics, we ensure high-quality 
          designs crafted for every occasion.
        </p>
      </section>
    </div>
  );
}
