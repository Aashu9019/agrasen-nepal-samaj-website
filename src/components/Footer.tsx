
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-maroon-800 to-maroon-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/4c8e1252-8fc4-4179-b13a-d4d7a06f9936.png"
                alt="Maharaja Agrasen"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold font-serif">Nepal Agrawal Samaj</h3>
                <p className="text-sm text-saffron-200">नेपाल अग्रवाल समाज</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Preserving the rich heritage and traditions of the Agrawal community in Nepal, 
              following the noble ideals of Maharaja Agrasen.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-saffron-200">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">+977-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">info@nepalagrawalsamaj.org</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-saffron-200">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-saffron-600 p-3 rounded-full hover:bg-saffron-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-saffron-600 p-3 rounded-full hover:bg-saffron-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-400">
                © 2024 Nepal Agrawal Samaj. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
