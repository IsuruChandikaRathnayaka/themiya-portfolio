import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import coverImage from './../assets/images/coverimage1.jpg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const form = useRef();
  const [key, setKey] = useState(0);
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

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_yikufba', 'template_4gw5n38', form.current, {
        publicKey: 'kI6szQfbpHot9qgQt',
      })
      .then(
        () => console.log('SUCCESS!'),
        (error) => console.log('FAILED...', error.text)
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => setKey(prev => prev + 1);
    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white"
    >
      {/* Hero Header with Gold Accent */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={coverImage} 
          alt="background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl mt-16 font-bold text-white font-serif tracking-tight mb-4">
              Contact Me
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.gold }}></div>
           
          </motion.div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mb-20">
        <motion.section
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: colors.light }}
            >
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full mb-4" style={{ backgroundColor: colors.accentLight }}>
                  <i className="fas fa-map-marker-alt text-xl" style={{ color: colors.gold }}></i>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.dark }}>Address</h3>
                <p style={{ color: colors.medium }}>208 Uyanwatha Road, Raigam<br />Bandaragama, 12530, Sri Lanka</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: colors.light }}
            >
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full mb-4" style={{ backgroundColor: colors.accentLight }}>
                  <i className="fas fa-phone text-xl" style={{ color: colors.gold }}></i>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.dark }}>Phone</h3>
                <p style={{ color: colors.medium }}>+94 779 241 745</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: colors.light }}
            >
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full mb-4" style={{ backgroundColor: colors.accentLight }}>
                  <i className="fas fa-envelope text-xl" style={{ color: colors.gold }}></i>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.dark }}>Email</h3>
                <p style={{ color: colors.medium }}>themiya860@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form and Map */}
        <motion.section
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12"
        >
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8" style={{ color: colors.dark }}>
              Send Me a Message
            </h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInVariants}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: colors.accentLight,
                      focusRingColor: colors.gold
                    }}
                    required
                  />
                </motion.div>
                <motion.div variants={fadeInVariants}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: colors.accentLight,
                      focusRingColor: colors.gold
                    }}
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div variants={fadeInVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: colors.accentLight,
                    focusRingColor: colors.gold
                  }}
                  required
                />
              </motion.div>
              
              <motion.div variants={fadeInVariants}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: colors.accentLight,
                    focusRingColor: colors.gold
                  }}
                  required
                />
              </motion.div>
              
              <motion.div variants={fadeInVariants}>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: colors.accentLight,
                    focusRingColor: colors.gold
                  }}
                  required
                ></textarea>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-medium"
                style={{ 
                  backgroundColor: colors.gold,
                  color: colors.light
                }}
              >
                Send Message
              </motion.button>
            </form>
          </div>

          {/* Quick CV Summary */}
          <div className="lg:w-1/2">
            <div className="p-8 rounded-xl shadow-md h-full" 
              style={{ backgroundColor: colors.light }}>
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.dark }}>
                Professional Summary
              </h2>
              
              <div className="space-y-6">
                {/* Education */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center" 
                    style={{ color: colors.gold }}>
                    <i className="fas fa-graduation-cap mr-3"></i>
                    Education
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Bachelor of Commerce | Edith Cowan University (2025)",
                      "Diploma of Commerce | Edith Cowan University (2022)",
                      "A Levels | Leeds International School (2021)",
                      "AAT Levels 1-2 | Association of Accounting Technicians (2020)",
                      "O Levels | Leeds International School (2018)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check mt-1 mr-3" style={{ color: colors.gold }}></i>
                        <span style={{ color: colors.medium }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Skills */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center" 
                    style={{ color: colors.gold }}>
                    <i className="fas fa-tools mr-3"></i>
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Leadership", "Business Analytics", "Communication", 
                      "Problem Solving", "Interpersonal Skills", "Sportsperson"
                    ].map((skill, index) => (
                      <span key={index} className="px-3 py-1 rounded-full text-sm"
                        style={{ 
                          backgroundColor: colors.accentLight,
                          color: colors.medium
                        }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* References Section */}
      <motion.section
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.dark }}>
            Professional References
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.gold }}></div>
          <p className="text-lg" style={{ color: colors.medium }}>
            Below are my professional references who can attest to my qualifications and work ethic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Reference 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl shadow-md"
            style={{ backgroundColor: colors.light }}
          >
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.dark }}>Pavithra Jayasekara</h3>
              <p className="font-medium mb-4" style={{ color: colors.gold }}>
                Director at Ishara Traders Pvt Ltd<br />
                Managing Director at LOLC Motors Pvt Ltd
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <i className="fas fa-phone mt-1 mr-3 w-5" style={{ color: colors.gold }}></i>
                  <span style={{ color: colors.medium }}>077 784 8607</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3 w-5" style={{ color: colors.gold }}></i>
                  <span style={{ color: colors.medium }}>pavithraj@lolc.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reference 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl shadow-md"
            style={{ backgroundColor: colors.light }}
          >
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.dark }}>Safwan Hassim</h3>
              <p className="font-medium mb-4" style={{ color: colors.gold }}>
                Senior Supervisor at Legacy Health LLC
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <i className="fas fa-phone mt-1 mr-3 w-5" style={{ color: colors.gold }}></i>
                  <span style={{ color: colors.medium }}>074 345 5700</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3 w-5" style={{ color: colors.gold }}></i>
                  <span style={{ color: colors.medium }}>Safwan.hassim@legacyhealthllc.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactUs;