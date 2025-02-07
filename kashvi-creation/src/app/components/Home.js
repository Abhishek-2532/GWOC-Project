import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://www.thechennaisilks.com/media/mgs_blog//b/a/banner-blog_1.jpeg')",
        }}
      ></section>

      {/* Featured Collection */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md p-4 rounded-lg">
          <Image src="/https://images.unsplash.com/photo-1610030469839-f909584b43f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Saree 1" width={400} height={400} className="rounded-lg" />
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
    </div>
  );
};

export default Home;
