import React from "react";
import { Button } from "@/components/ui/button";

interface HighlightSectionProps {
  title: string;
  description: string;
  image: string;
  imageDesc?: string;
  onExplore?: () => void;
  comingSoon?: boolean;   // ⭐ NEW PROP
}

const HighlightSection: React.FC<HighlightSectionProps> = ({
  title,
  description,
  image,
  onExplore,
  comingSoon = false,
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
          onClick={onExplore}
            src={image}
            alt={title}
            className="w-full h-full object-fit transition-transform duration-500 hover:scale-[1.05]"
          />
        </div>

        {/* 🚀 Button */}
        <Button
          onClick={comingSoon ? undefined : onExplore}
          disabled={comingSoon}
          className={`
            w-full py-3 rounded-none text-lg font-bold shadow-md transition-all duration-300
            ${comingSoon
              ? "bg-gray-500 text-white cursor-not-allowed opacity-70"
              : "bg-gold text-black hover:bg-yellow-400"
            }
          `}
        >
          {comingSoon ? "Coming Soon" : "Explore More"}
        </Button>

      </div>

    </section>
  );
};

export default HighlightSection;
