import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider"; // Import the slider

export default function HomePage() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section with Image Slider */}
      <section className="w-full">
        <ImageSlider />
      </section>

      {/* Featured Collection */}
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Collection</h2>
        {/* Your product listing code here */}
      </section>
    </div>
  );
}

