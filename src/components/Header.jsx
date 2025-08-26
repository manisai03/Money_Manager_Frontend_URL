import { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About us", to: "/about" },
    { name: "Contact us", to: "/contact" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="logo" className="h-10 w-10" />
            <span className="text-lg font-bold text-gray-800 truncate">
              Money Manager
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                to={link.to}
                key={link.name}
                className={`text-gray-600 hover:text-purple-600 transition-colors relative 
                  ${location.pathname === link.to ? "text-purple-600 font-semibold" : ""}`}
              >
                {link.name}
                {location.pathname === link.to && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 rounded"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons & Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 text-lg hover:text-purple-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-sm"
              >
                Get Started
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    to={link.to}
                    key={link.name}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-gray-600 hover:text-purple-600 transition-colors 
                      ${location.pathname === link.to ? "text-purple-600 font-semibold" : ""}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 hover:text-purple-600 transition-colors w-full text-left"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center shadow-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
