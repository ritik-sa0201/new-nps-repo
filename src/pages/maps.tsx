import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/socialSidebar";
import bg1 from "@/assets/map2.jpg";
import HighlightSection from "@/components/highlight-section";
import sampleImg from "@/assets/maps/GREATER NOIDA.jpg";
import sampleImg2 from "@/assets/maps2/ACE ACREVILLE.jpg";
import auth1 from "@/assets/auth1.jpg";
import auth2 from "@/assets/auth2.jpg";
import auth3 from "@/assets/auth4.jpg";
import { useNavigate } from "react-router-dom";
import bgvideo from "@/assets/bgvideo.mp4";

const Maps = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col relative">

      {/* 🔥 FULL PAGE BACKGROUND VIDEO */}
      <div className="fixed inset-0 -z-20 h-screen w-screen overflow-hidden">
        <video
          src={bgvideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <Navigation />
      <SocialSidebar />

      <main
        className="flex-1"
        style={{
          minHeight: "80vh",
          
        }}
      >
        {/* --- Header Section --- */}
        <section
          className="relative text-primary-foreground py-20 shadow-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 mx-auto px-4 flex flex-col justify-center items-center text-center">
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Maps by{" "}
              <span className="text-gold bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Noida Property Solution
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl">
              Navigate with Ease: Explore Our Maps!
            </p>
          </div>
        </section>

        {/* --- Authorities Section --- */}
    {/* --- Authorities Section --- */}
{/* --- Authorities Section --- */}
<section className="py-12 text-center px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
    Working with Top Development Authorities
  </h2>

  <div
    className="
      flex flex-row 
      justify-center 
      items-center 
      gap-6 sm:gap-10 md:gap-14 
      overflow-x-auto no-scrollbar 
      px-2
    "
  >
    {[auth1, auth2, auth3].map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Authority ${index + 1}`}
        className="
          h-20       /* mobile size */
          sm:h-28    /* tablet size */
          md:h-32    /* desktop big size */
          lg:h-40    /* large desktop extra big */
          object-contain 
          flex-shrink-0
        "
      />
    ))}
  </div>
</section>



        {/* --- Highlight Sections (Responsive) --- */}
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-10 px-4 py-10">
          <HighlightSection
            title="Greater Noida Maps"
            description="Navigate the City’s Sectors and Zones"
            image={sampleImg}
            onExplore={() => navigate("/maps/greaternoida")}
          />

          <HighlightSection
            title="Yamuna Expressway Maps"
            description="Navigate the Area's Sectors and Zones"
            image={sampleImg2}
            onExplore={() => navigate("/maps/yamunaexpressway")}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Maps;
