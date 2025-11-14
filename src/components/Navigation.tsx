import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, PhoneIcon, User2Icon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import FINAL_LOGO from "@/assets/NPS.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { data: user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Maps", path: "/maps" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const projectLinks = [
    { name: "Noida", desc: "Premium properties in Noida", link: "/projects/noida" },
    { name: "Greater Noida", desc: "Modern developments in Greater Noida", link: "/projects/greater-noida" },
    { name: "Yamuna Expressway", desc: "Luxury estates on Yamuna Expressway", link: "/projects/yamuna" },
    { name: "All Properties", desc: "Browse all properties", link: "/properties" },
    { name: "Under Construction", desc: "Explore under construction", link: "/comingsoon" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        location.pathname === "/"
          ? "bg-transparent"
          : "bg-black/50 border-b border-gold/20 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
      }`}
    >
      <div className="container mx-auto px-4">

        {/* ================= MOBILE LOGO (BIGGER) ================= */}
        <div className="flex lg:hidden justify-center py-3">
          <Link to="/">
            <img
              src={FINAL_LOGO}
              alt="NPS Logo"
              className="h-28 sm:h-32 w-auto transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]"
            />
          </Link>
        </div>

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden lg:flex w-full justify-between items-start py-4">

          {/* LEFT: LOGO */}
          <Link to="/" className="flex items-start">
            <img
              src={FINAL_LOGO}
              alt="NPS Logo"
              className="h-32 sm:h-40 md:h-40 w-auto transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]"
            />
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end space-y-4">

            {/* TOP ROW */}
            <div className="flex items-center space-x-4">

              {/* PHONE */}
              <div className="flex flex-row gap-2 items-center justify-center font-bold drop-shadow-lg px-6 py-2 text-base text-white">
                <PhoneIcon size={40} className="translate-y-1" />
                <p className="text-5xl">+91 93119 31770</p>
              </div>

              {/* LOGIN */}
              <Link to={user?.fullName ? "/logout" : "/login"}>
                <div
                  className="flex flex-row gap-2 items-center justify-center font-bold drop-shadow-lg px-6 py-2 text-base text-white hover:cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <User2Icon size={40} />
                  <span className="text-4xl">{user?.fullName ? "Logout" : "Login"}</span>
                </div>
              </Link>

            </div>

            {/* BOTTOM NAV LINKS */}
            <div className="flex items-center space-x-8">

              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-bold transition-colors hover:text-gold ${
                    isActive(item.path) ? "text-gold" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* PROJECTS DROPDOWN — FIXED OPEN LEFT */}
   {/* PROJECTS DROPDOWN — NORMAL DIV (EXPANDS LEFT) */}
                      <div className="relative group">
  <button className="text-base font-bold flex flex-row items-center gap-2">
    <p>Projects</p>
    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
  </button>

  {/* DROPDOWN CONTENT OPENS LEFT */}
  <div
    className="
      absolute 
      top-full 
      right-0 
      translate-x-[-2%]
      mt-3
      w-[500px]
      grid grid-cols-2
      gap-3
      bg-[rgba(25,25,25,0.95)]
      border border-gold/20 
      rounded-xl 
      shadow-xl
      p-4

      opacity-0 
      pointer-events-none
      group-hover:opacity-100 
      group-hover:pointer-events-auto
      transition-all duration-300
      z-50
    "
  >
    {projectLinks.map((item) => (
      <Link
        key={item.name}
        to={item.link}
        className="block space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-gold/10"
      >
        <div className="text-base font-semibold text-gold">{item.name}</div>
        <p className="text-sm text-muted-foreground">{item.desc}</p>
      </Link>
    ))}
  </div>
</div>


              {/* CONTACT */}
              <Link
                to="/contact"
                className={`text-base font-bold transition-colors hover:text-gold ${
                  isActive("/contact") ? "text-gold" : "text-foreground"
                }`}
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>

        {/* =============== MOBILE MENU BUTTON =============== */}
        <button
          className="lg:hidden text-white absolute right-4 top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        {/* =============== MOBILE MENU CONTENT =============== */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-3 text-base font-semibold bg-[rgba(15,15,15,0.9)] rounded-xl p-4 border border-gold/20 shadow-lg">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 transition-colors hover:text-gold ${
                  isActive(item.path) ? "text-gold" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div>
              <div className="text-base font-bold text-gold mt-3 mb-2">Projects</div>
              <ul className="space-y-2 pl-3">
                {projectLinks.map((item) => (
                  <li key={item.link}>
                    <Link
                      to={item.link}
                      className="block text-sm text-muted-foreground hover:text-gold transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block py-2 transition-colors hover:text-gold ${
                isActive("/contact") ? "text-gold" : "text-white"
              }`}
            >
              Contact Us
            </Link>

            <div className="text-white font-bold py-2">+91 93119 31770</div>

            <Link
              to={user?.fullName ? "/logout" : "/login"}
              onClick={() => setIsOpen(false)}
            >
              <Button variant="gold" className="w-full text-base font-bold">
                {user?.fullName ? "Logout" : "Login"}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
