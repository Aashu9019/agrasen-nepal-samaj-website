
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Locations", href: "/locations" },
    { name: "Membership", href: "/membership" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-saffron-50 to-emerald-50 shadow-lg border-b-4 border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/4c8e1252-8fc4-4179-b13a-d4d7a06f9936.png"
              alt="Maharaja Agrasen"
              className="h-16 w-auto"
            />
            <div className="text-left">
              <h1 className="text-2xl font-bold text-maroon-800 font-serif">
                Nepal Agrawal Samaj
              </h1>
              <p className="text-sm text-emerald-700 font-medium">
                नेपाल अग्रवाल समाज
              </p>
            </div>
          </Link>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-saffron-600 hover:text-saffron-800 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-saffron-600 hover:text-saffron-800 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-maroon-600 hover:text-maroon-800"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${isOpen ? "block" : "hidden"} md:block border-t border-gold-200 pt-4 pb-2`}>
          <div className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-center font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-maroon-600 text-white shadow-lg"
                    : "text-maroon-700 hover:bg-saffron-100 hover:text-maroon-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
