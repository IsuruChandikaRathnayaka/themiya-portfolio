import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import coverImage from './../assets/images/coverimage1.jpg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

const Hero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Color definitions matching AboutUs
  const colors = {
    gold: '#BB8B3D',
    dark: '#2C2C2C',
    medium: '#5A5A5A',
    light: '#F8F8F8',
    accentLight: '#F0E6D2'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [i18n.language]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div key={i18n.language} className="relative w-full mt-20">
      {/* Hero Header with Gold Accent */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <motion.img
          src={coverImage}
          alt="background"
          className="w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif tracking-tight mb-4">
              {t("templeName")}
              <span className="block mt-6 text-xl md:text-2xl lg:text-3xl font-light">
                {t("templeNametwo")}
              </span>
            </h1>
            
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: colors.gold }}></div>
            
        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mx-auto px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2"
  style={{
    backgroundColor: colors.gold,
    color: colors.light,
  }}
  onClick={() =>
    window.open(
      'https://www.linkedin.com/in/bhanu-jayasekara-bab66624a/',
      '_blank'
    )
  }
>
  <FaLinkedin className="text-xl" />
  LinkedIn
</motion.button>

          </motion.div>
        </div>
      </div>

      {/* Decorative accent bar */}
      <div className="w-full h-2" style={{ backgroundColor: colors.gold }}></div>
    </div>
  );
};

export default Hero;