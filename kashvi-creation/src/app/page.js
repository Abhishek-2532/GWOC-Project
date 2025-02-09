import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import HorizontalScrollCards from "./components/HorizontalScrollCards";
import Footer from "./components/footer"; // Capitalize the filename

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Slider */}
      <section className="w-full flex-1">
        <HeroSlider />
      </section>

      {/* Featured Collection */}
      <section className="p-10">
        <div className="w-full mt-5 pt-5 items-center rounded-xl bg-white shadow-lg dark:bg-slate-800 dark:shadow-none">
          <h1 className="text-3xl font-bold text-center mb-4">Featured Collection</h1>
          <HorizontalScrollCards />
        </div>
      </section>
      
      
      
      <Footer />
    </div>
  );
}
