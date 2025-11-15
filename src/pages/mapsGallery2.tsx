import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const mapImages = import.meta.glob("@/assets/maps2/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

const MapsGallery: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const imageEntries = Object.entries(mapImages).map(([path, module]: any) => {
    const fileName = path.split("/").pop()?.split(".")[0] || "";
    return {
      name: fileName.replace(/[-_]/g, " "),
      src: module.default,
      slug: fileName.replace(/[\s_-]+/g, "").toLowerCase(),
    };
  });

  // Filter based on search query
  const filteredImages = imageEntries.filter((img) =>
    img.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative py-16 text-white"
    >
      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gold">
          Yamuna Expressway Map Gallery
        </h2>

        {/* Search Input */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search map by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full max-w-md px-4 py-2 rounded-lg 
              bg-black/40 border border-white/20 backdrop-blur-sm
              text-white placeholder-white/60
              focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold
            "
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.name}
              onClick={() => navigate(`/maps/yamuna/${img.slug}`)}
              className="
                flex flex-col items-center 
                bg-black/40 backdrop-blur-md 
                rounded-xl overflow-hidden 
                border border-white/10
                shadow-lg hover:shadow-gold/30 
                hover:scale-105 
                transition-transform duration-300 cursor-pointer
              "
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-40 object-cover"
              />
              <div className="py-2 text-center text-sm font-medium text-gold capitalize">
                {img.name}
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredImages.length === 0 && (
          <p className="text-center mt-8 text-white/70">
            No maps found for "<span className="text-gold">{search}</span>"
          </p>
        )}
      </div>
    </section>
  );
};

export default MapsGallery;
