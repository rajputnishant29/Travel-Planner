import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#8ad8c4]">AI Trip Planner</h2>
          <p className="mt-2 text-gray-400">
            Your AI-powered travel assistant for seamless and personalized trip planning.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#8ad8c4]">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/leaflet" className="text-gray-400 hover:text-white transition">
                Show Map
              </Link>
            </li>
            <li>
              <Link to="/safety-tips" className="text-gray-400 hover:text-white transition">
                Safety Tips
              </Link>
            </li>
            <li>
              <Link to="/weather" className="text-gray-400 hover:text-white transition">
                Check Weather
              </Link>
            </li>
            <li>
              <Link to="/vlogs" className="text-gray-400 hover:text-white transition">
                Travel Vlogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#8ad8c4]">Follow Us</h3>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Trip Planner. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
