import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import icon5 from "@/assets/icon5.png";
import icon6 from "@/assets/icon6.png";
import icon7 from "@/assets/icon7.png";

import bg1 from "@/assets/bg/1.jpg";
import bg3 from "@/assets/bg/8.jpg";
import bg4 from "@/assets/bg/3.jpg";
import bg5 from "@/assets/bg/2.jpg";
import bg6 from "@/assets/bg/5.jpg";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentBg, setCurrentBg] = useState(0);
  const navigate = useNavigate();

  const bgImages = [bg1, bg3, bg4, bg5, bg6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/properties?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate("/properties");
    }
  };

  const stats = [
    { src: icon5, label: "Premium Properties", value: "100+" },
    { src: icon6, label: "Happy Clients", value: "500+" },
    { src: icon7, label: "Years Experience", value: "15+" },
  ];

  return (
    <section
      className="relative 
      min-h-[750px] 
      sm:min-h-[800px] 
      lg:min-h-[900px] 
      flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {bgImages.map((bg, index) => (
          <motion.img
            key={index}
            src={bg}
            alt={`background-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentBg === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl px-4 pt-24 sm:pt-20 pb-20 text-center text-white">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center leading-tight"
        >
          {/* Line 1 */}
          <div className="flex flex-wrap justify-center items-center text-center gap-1">
            <p className="text-2xl sm:text-4xl md:text-5xl font-semibold">
              Unlock Noida Living
            </p>

            <p className="text-lg sm:text-2xl md:text-3xl font-semibold mt-1">
              with
            </p>
          </div>

          {/* Increased gap here */}
          <span
            className="
            mt-3 sm:mt-4
            text-2xl
            sm:text-4xl 
            md:text-6xl 
            font-extrabold 
            whitespace-normal
            bg-gradient-to-r from-gold to-yellow-300 
            bg-clip-text text-transparent 
            animate-shimmer bg-[length:200%_100%]
          "
          >
            NOIDA PROPERTY SOLUTION
          </span>
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex flex-col items-center mt-6 sm:mt-8"
        >
          <div
            className="flex items-center w-full max-w-md px-4 py-3 rounded-full 
            bg-white/15 backdrop-blur-md border border-white/25 shadow-lg"
          >
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white/60 text-sm sm:text-base outline-none"
            />
          </div>

          <Button
            onClick={handleSearch}
            className="mt-3 flex items-center gap-2 bg-gold text-white 
            px-6 py-3 rounded-full hover:bg-yellow-400 shadow-lg text-sm sm:text-base"
          >
            <Search className="w-4 h-4" />
            Search
          </Button>
        </motion.div>

        {/* STATS SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="
            flex 
            justify-start sm:justify-center
            gap-6 sm:gap-10 
            mt-12 
            pb-3 
            overflow-x-auto 
            w-full
            scrollbar-none
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-center min-w-[100px]"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 
                rounded-full flex items-center justify-center 
                bg-gold/10 border border-gold/20"
              >
                <img src={item.src} className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <p
                className="text-2xl sm:text-3xl font-extrabold 
                bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent"
              >
                {item.value}
              </p>

              <p className="text-sm sm:text-base font-semibold text-white/80">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
