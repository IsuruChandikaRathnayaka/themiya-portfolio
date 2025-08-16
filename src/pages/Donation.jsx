import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Donation = () => {

  const [key, setKey] = useState(0); // State for key prop
  const { t, i18n } = useTranslation(); // i18n instance for language change detection
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  // Function to handle language change and trigger animation rerun
  useEffect(() => {
    const handleLanguageChange = () => {
      setKey((prevKey) => prevKey + 1); // Update key to force remount and rerun animations
    };
    
    i18n.on('languageChanged', handleLanguageChange); // Listen to language change event

    return () => {
      i18n.off('languageChanged', handleLanguageChange); // Clean up listener
    };
  }, [i18n]); // Depend on i18n instance to trigger effect on language change

  const [currency, setCurrency] = useState('LKR'); // Default currency

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <motion.div
      key={key} // Use key state here
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16 xl:px-32 py-8 mt-28 mb-10"
    >
      <div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs font-medium text-black mb-2 md:mb-14"
        >
          {t("contactUs")} {'>'} <span className="text-orange-600"> {t("donate")}</span>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-semibold text-[#bb8b3d] mb-4"
        >
          {t("thanks")} <span className="text-black">{t("generosity")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-700 font-normal text-sm md:text-base"
        >
          {t("thanksPara")}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg mt-4 border border-gray-300 rounded-lg shadow-md p-6 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-700 text-center mb-7 font-medium text-base"
        >
          {t("moneyBox")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4"
        >
          {[1000, 2000, 5000, 10000, 20000, 30000].map((amount) => (
            <motion.button
              key={amount}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 border border-solid border-gray-300 rounded-lg text-base font-medium transition-colors duration-300 ease-in-out hover:bg-opacity-20 hover:bg-[#BB8B3D] hover:border-[#BB8B3D] focus:bg-[#BB8B3D] focus:text-white w-full h-[60px]"
            >
              Rs {amount.toLocaleString()}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center mb-7 mt-9"
        >
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            type="text"
            className="flex-1 border border-gray-300 p-2 rounded-l placeholder-black text-black h-[54px] border-r-0"
            placeholder={currency === 'LKR' ? 'Rs' : '$'}
          />

          <motion.select
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="border-t border-b border-r border-gray-300 p-2 rounded-r bg-white h-[54px] border-l-0"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="LKR">LKR</option>
            <option value="USD">USD</option>
          </motion.select>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full bg-[#BB8B3D] text-white p-4 rounded-lg font-medium transition-colors duration-300 ease-in-out hover:bg-opacity-80"
        >
          {t("moneyButton")}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Donation;
