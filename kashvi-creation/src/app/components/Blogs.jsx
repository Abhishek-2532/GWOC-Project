import Image from "next/image";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Saree Draping",
      image: "/images/saree-draping.jpg",
      description: "Explore different styles of saree draping from around the world.",
    },
    {
      id: 2,
      title: "Latest Saree Trends",
      image: "/images/saree-trends.jpg",
      description: "Discover the newest trends in sarees, from fabrics to colors.",
    },
    {
      id: 3,
      title: "How to Care for Silk Sarees",
      image: "/images/silk-care.jpg",
      description: "Learn the best tips for maintaining the beauty of your silk sarees.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <button className="mt-4 px-4 py-2 bg-[#b08c74] text-white rounded hover:bg-[#8c6a54]">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
