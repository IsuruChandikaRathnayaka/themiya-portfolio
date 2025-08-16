import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BhanuCV from '../../assets/images/BhanuCV.pdf';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  // Color definitions
  const colors = {
    gold: '#BB8B3D',
    dark: '#2C2C2C',
    medium: '#5A5A5A',
    light: '#F8F8F8',
    accentLight: '#F0E6D2'
  };

  // Route configuration
  const routes = [
    { label: t("home"), path: "/" },
    { label: t("homeGallery"), path: "/about" },
  
    { label: t("Test Results"), path: "/reports" }, // Added reports link
      { label: t("contactUs"), path: "/contact-us" },
  ];

  useEffect(() => {
    // Set active link based on current path
    const currentRoute = routes.find(route => location.pathname === route.path);
    if (currentRoute) {
      setActiveLink(currentRoute.label);
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-md bg-white' : 'py-4 bg-white/90 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold relative group"
          style={{ 
            color: colors.dark,
            fontFamily: "'Cinzel', serif"
          }}
          onClick={() => handleLinkClick(t("home"))}
        >
          <span>BHANU</span>
          <span 
            className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeLink === t("home") ? 'w-full' : 'w-0 group-hover:w-full'}`}
            style={{ backgroundColor: colors.gold }}
          ></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`relative px-1 py-2 text-sm uppercase tracking-wider ${activeLink === label ? 'font-semibold' : 'font-medium'}`}
              style={{
                color: activeLink === label ? colors.gold : colors.dark,
                fontFamily: "'Montserrat', sans-serif"
              }}
              onClick={() => handleLinkClick(label)}
            >
              {label}
              {activeLink === label && (
                <motion.span 
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5"
                  style={{ backgroundColor: colors.gold }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
          
          {/* Download CV Button - Desktop */}
          <a
            href={BhanuCV}
            download="Bhanu_CV.pdf"
            className="relative px-4 py-2 text-sm uppercase tracking-wider font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors"
            style={{
              color: colors.dark,
              fontFamily: "'Montserrat', sans-serif",
              backgroundColor: colors.accentLight,
              borderRadius: '4px'
            }}
          >
            <FontAwesomeIcon icon={faDownload} />
            {t("download CV")}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon 
            icon={isMobileMenuOpen ? faTimes : faBars} 
            className="text-xl"
            style={{ color: colors.dark }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t"
          style={{ borderColor: colors.accentLight }}
        >
          <div className="px-4 py-3 space-y-4">
            {routes.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className={`block px-3 py-2 text-sm uppercase tracking-wider transition-colors ${activeLink === label ? 'font-semibold' : 'font-medium'}`}
                style={{
                  color: activeLink === label ? colors.gold : colors.dark,
                  fontFamily: "'Montserrat', sans-serif",
                  borderLeft: activeLink === label ? `3px solid ${colors.gold}` : 'none'
                }}
                onClick={() => handleLinkClick(label)}
              >
                {label}
              </Link>
            ))}
            
            {/* Download CV Button - Mobile */}
            <a
              href={BhanuCV}
              download="Bhanu_CV.pdf"
              className="block px-3 py-2 text-sm uppercase tracking-wider font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors"
              style={{
                color: colors.dark,
                fontFamily: "'Montserrat', sans-serif",
                backgroundColor: colors.accentLight,
                borderRadius: '4px'
              }}
            >
              <FontAwesomeIcon icon={faDownload} />
              {t("downloadCV")}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;