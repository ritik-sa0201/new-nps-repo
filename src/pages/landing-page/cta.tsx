import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  visibleSections: Set<string>;
  sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}

const CTASection: React.FC<CTASectionProps> = ({ visibleSections, sectionRefs }) => {
  return (
    <section
      id="cta"
      ref={(el) => (sectionRefs.current.cta = el)}
      className="relative overflow-hidden py-24 "  // 🔥 Clean background
    >
      {/* 🌟 Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            visibleSections.has("cta")
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold via-yellow-300 to-amber-400 bg-clip-text text-transparent">
            Ready to Find Your Dream Property?
          </h2>

          <p className="text-lg text-left md:text-xl text-white mb-10 leading-relaxed">
            Our expert team is here to guide you every step of the way. Begin your journey with confidence today.
          </p>

          {/* 💎 Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/properties">
              <Button
                variant="gold"
                size="lg"
                className="group relative px-8 overflow-hidden"
              > 
                <span className="font-bold text-lg relative z-10 flex items-center">
                  Browse Properties
                  <ArrowRight strokeWidth={3} className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg font-bold px-8 border-2 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
