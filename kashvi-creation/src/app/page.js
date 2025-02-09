import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import HorizontalScrollCards from "./components/HorizontalScrollCards";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="w-full">
      <HeroSlider/>
      </section>
      <section className="p10">
        <div className="w-full mt-5 h-20 pt-5 items-center rounded-xl bg-white shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <h1 className="text-3xl font-bold text-center mb-4">Featured Collection</h1>
      <HorizontalScrollCards/>
        </div>
       
        
      </section>
    </div>
  );
}

