import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaCertificate, FaSchool, FaAward, FaMedal, FaTrophy, FaHandsHelping, FaUserTie,FaGlobe,FaRunning   } from 'react-icons/fa';
import profileImage from './../assets/images/aboutusimg6.png';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Color scheme
  const colors = {
    gold: '#BB8B3D',
    dark: '#2C2C2C',
    medium: '#5A5A5A',
    light: '#F8F8F8',
    accentLight: '#F0E6D2'
  };

  // Social media links
  const socialMedia = {
    linkedin: "https://www.linkedin.com/in/yourprofile",
    instagram: "https://www.instagram.com/yourprofile"
  };

  // CV Data
  const profileData = {
    name: "BHANU JAYASEKARA",
    title: "Commerce & Business Management Student",
    contact: {
      address: "208 Uyanwatha Road, Bandaragama 12530, Sri Lanka",
      phone: "+94 779 241 745",
      email: "themiya5154@gmail.com"
    },
    about: "Accomplished leader with demonstrated Top Board leadership qualities developed through academic and extracurricular excellence. Currently pursuing a Bachelor's Degree in Commerce and Business Management at Edith Cowan University, Australia. Thrives in high-pressure environments with exceptional multitasking abilities.",
    personalDetails: {
      dob: "17th April 2003",
      nationality: "Sri Lankan",
      hobbies: "Athletics, Swimming, Travelling"
    },
    education: [
      {
        degree: "BACHELOR OF COMMERCE",
        year: "2025",
        institution: "Edith Cowan University, Colombo",
        icon: <FaGraduationCap />
      },
      {
        degree: "DIPLOMA OF COMMERCE",
        year: "2022",
        institution: "Edith Cowan University, Colombo",
        icon: <FaCertificate />
      },
      {
        degree: "COMPLETED A LEVELS",
        year: "2021",
        institution: "Leeds International School, Panadura",
        icon: <FaSchool />
      },
      {
        degree: "AAT LEVELS 1 & 2",
        year: "2020",
        institution: "Association of Accounting Technicians, Colombo",
        icon: <FaAward />
      }
    ],
    skills: [
      "Leadership", "Problem Solving", "Business Analytics", 
      "Communication", "Interpersonal Skills", "Sportsperson",
      "Adaptability", "Team Management"
    ],
    achievements: [
      {
        title: "Athletics Champion (2010-2021)",
        description: "Multiple medals in 100m and High Jump",
        icon: <FaMedal />
      },
      {
        title: "Arts Recognition",
        description: "Silver Medal at Sri Lanka Annual Competitive Festival",
        icon: <FaTrophy />
      },
      {
        title: "Community Service",
        description: "Participated in Help Age Fund Raising Activities",
        icon: <FaHandsHelping />
      },
      {
        title: "School Leadership",
        description: "Top Board Prefect Member & Games Captain (2017-2020)",
        icon: <FaUserTie />
      }
    ]
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white mt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-2/5 mb-10 md:mb-0"
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={scaleUp}
            ref={ref1}
          >
            <div className="relative">
              <img
                src={profileImage}
                alt="Bhanu Jayasekara"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-3/5 text-center md:text-left"
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white font-serif mb-2 pb-1 border-b-2 border-white inline-block">
              {profileData.name}
            </h1>
            <br />
            
            <p className="text-base md:text-lg text-white font-sans mb-4 mt-4">
              {profileData.about}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/in/bhanu-jayasekara-bab66624a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/th3miya.a?igsh=MWVrN2NteDE0dmRpeA%3D%3D&utm_source=qr"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
}

export default About;