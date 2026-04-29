
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import TilesCard from "../ui/TilesCard";


 const marqueeItems = [
    `New Arrivals: `,
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community & Share Your Designs",
    "Trending: Luxury Ceramic Collection",
    "Hot Deal: 20% Off Selected Tiles",
    "Top Rated: Modern Kitchen Tiles",
    "Customer Favorite: Matte Finish Series",
    "New Stock: Italian Marble Series",
    "Design Inspiration: Minimalist Interior Tiles",
    "Explore: Outdoor Wall Tile Collection",
  ];

const HeroSection =  async () => {
   
  const res = await fetch('https://category-a8-apple-l35b.vercel.app/tiles.json')
    const data = await res.json()
   
  return (
    <div className="w-full">

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Your Perfect Aesthetic
        </h1>

        <Link
          href="/all-tiles"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Browse Now
        </Link>
      </section>
    <Marquee pauseOnHover>
        {
            marqueeItems.map((item, index)=> <p key={index} className="px-5 bg-black/80 text-white py-5">{item}</p>)
        }
    </Marquee>


      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Tiles
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
           {
           data.map((tile) => <TilesCard key={tile.id} tile={tile}></TilesCard>)
        }
        </div>
      </section>

      
    </div>
  );
};

export default HeroSection;