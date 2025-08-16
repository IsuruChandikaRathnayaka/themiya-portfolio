import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.jpg";

export const Footer = () => {
  // Color definitions matching AboutUs
  const colors = {
    gold: '#BB8B3D',
    dark: '#2C2C2C',
    medium: '#5A5A5A',
    light: '#F8F8F8',
    accentLight: '#F0E6D2'
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-12 mt-24"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: colors.gold }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Name with gold accent */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-2 font-serif"
            style={{ color: colors.light }}
          >
            Bhanu Jayasekara
          </motion.h1>

          {/* Tagline with gold underline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          >
            <p className="text-lg mb-2" style={{ color: colors.accentLight }}>
              Commerce & Business Management Professional
            </p>
            <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: colors.gold }}></div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:flex md:space-x-8 gap-4 md:gap-0 mb-8"
          >
            {[
              { label: "Home", path: "/" },
              { label: "About Me", path: "/about" },
              { label: "LinkedIn", path: "https://www.linkedin.com/in/bhanu-jayasekara-bab66624a/" },

              { label: "Contact", path: "/contact-us" }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="px-4 py-2 text-sm uppercase tracking-wider transition-colors hover:text-gold-500"
                style={{
                  color: colors.light,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '1px'
                }}
              >
                <span className="relative group">
                  {item.label}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: colors.gold }}
                  ></span>
                </span>
              </Link>
            ))}
          </motion.nav>

          {/* Social icons would go here */}

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm"
            style={{ color: colors.medium }}
          >
            © {new Date().getFullYear()} Bhanu Jayasekara. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: colors.gold }}></div>
    </motion.footer>
  );
};