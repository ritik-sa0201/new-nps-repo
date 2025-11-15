import React from "react";
import { Button } from "@/components/ui/button";

interface HighlightSectionProps {
  title: string;
  description: string;
  image: string;
  imageDesc?: string;
  onExplore?: () => void;
}

const HighlightSection: React.FC<HighlightSectionProps> = ({
  title,
  description,
  image,
  onExplore,
}) => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden bg-transparent">

      {/* Responsive Wrapper */}
      <div className="flex flex-col items-center w-full sm:w-64 md:w-72 lg:w-80 text-center px-4">

        {/* 🌟 Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gold mb-3 font-serif">
          {title}
        </h2>

        {/* Image */}
        <div className="w-full h-56 sm:h-64 md:h-72 border-4 border-gold overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.2)] mb-4 rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
          />
        </div>

        {/* Description (Optional later if needed) */}
        {/* <p className="text-white/80 text-sm sm:text-base mb-3">{description}</p> */}

        {/* 🚀 Explore Button */}
        <Button
          onClick={onExplore}
          className="bg-gold text-black font-semibold w-full py-3 rounded-none shadow-md hover:bg-yellow-400 transition-all duration-300"
        >
          Explore More
        </Button>

      </div>

    </section>
  );
};

export default HighlightSection;
