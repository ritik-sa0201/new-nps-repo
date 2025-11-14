import React from "react";
import { Button } from "@/components/ui/button";
import belowBg from "@/assets/belowwbg.png";

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
    <section className="relative w-full flex flex-col items-center overflow-hidden bg-transparent mt-10">

      {/* Wrapper that controls width for title + desc + image + button */}
      <div className="flex flex-col items-center w-60 md:w-72 text-center">

        {/* 🌟 Title */}
        <h2 className="text-xl md:text-xl font-bold text-gold mb-2 font-serif">
          {title}
        </h2>

        <div className="w-full h-60 md:h-72 border-4 border-gold overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.2)] mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
          />
        </div>

        {/* 🚀 Explore Button */}
        <Button
          onClick={onExplore}
          className="bg-gold text-black font-semibold w-full py-3 rounded-none shadow-md hover:bg-yellow-400 transition-all duration-300 mb-4"
        >
          Explore More
        </Button>

      </div>

    </section>
  );
};

export default HighlightSection;
