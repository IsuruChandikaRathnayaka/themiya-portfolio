import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import test11 from './../assets/images/test11.png';
import test12 from './../assets/images/test12.png';
import test13 from './../assets/images/test13.png';
import test21 from './../assets/images/test21.png';
import test22 from './../assets/images/test22.png';
import test23 from './../assets/images/test23.png';
import test31 from './../assets/images/test31.png';
import test32 from './../assets/images/test32.png';
import coverImage from './../assets/images/coverimage1.jpg';

// Color definitions
const colors = {
  gold: '#BB8B3D',
  dark: '#2C2C2C',
  medium: '#5A5A5A',
  light: '#F8F8F8',
  accentLight: '#F0E6D2'
};

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ImageModal = ({ imageSrc, altText, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="relative max-w-4xl w-full">
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl hover:text-gold-500"
          aria-label="Close modal"
        >
          &times;
        </button>
        <img 
          src={imageSrc} 
          alt={altText} 
          className="w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

const ReportCard = ({ imageSrc, title, description, altText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
      >
        <div className="relative bg-white p-4 flex items-center justify-center h-64">
          <img 
            src={imageSrc} 
            alt={altText} 
            className="max-w-full max-h-full object-contain"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
              <span className="text-white font-medium text-lg">Click to View Full Image</span>
            </div>
          )}
        </div>
        <div className="p-6 flex-grow" style={{ backgroundColor: colors.light }}>
          <h3 className="text-xl font-semibold mb-3" style={{ color: colors.dark }}>
            {title}
          </h3>
          <p className="text-sm mb-4" style={{ color: colors.medium }}>
            {description}
          </p>
        </div>
      </div>

      {showModal && (
        <ImageModal 
          imageSrc={imageSrc} 
          altText={altText} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

const Reports = () => {
  const ref5 = useRef(null);
  const inView5 = useInView(ref5, { once: true, margin: "-100px" });

  return (
    <div className="bg-white">
      {/* Hero Section with Cover Image */}
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
              Comprehensive Reports
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.gold }}></div>
          </motion.div>
        </div>
      </div>

      {/* Purpose Summary Section */}
      <motion.section
        ref={ref5}
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        variants={fadeInVariants}
        className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-20 -mb-12">
          <h3 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>
            My Purpose
          </h3>
          <div className="w-16 h-1 mb-6" style={{ backgroundColor: colors.gold }}></div>
          <p className="leading-relaxed" style={{ color: colors.medium }}>
            I see my career as an open map, not a fixed track-one where each destination adds new skills, perspectives, and connections. This reflects the boundaryless career orientation, which emphasizes mobility across roles, organizations, and industries, breaking away from the limitations of a single employer or linear progression (Arthur & Rousseau, 1996).
            <br /><br />
           The individual has a high purpose score of 65 out of 70, reflecting a strong sense of purpose that guides their life decisions and imbues their actions with meaning. Their purpose is characterized by long-term goals that are personally fulfilling and contribute positively to the world, such as advancing a company's mission, creating art, or educating others. Research suggests that such purposefulness is linked to better cognitive functioning, longer life, healthier habits, and lower stress levels. To further strengthen their already robust sense of purpose, the individual is encouraged to engage in discussions about their purpose with trusted peers, envision their "Best Possible Self" in the future, clarify their core values through structured surveys, and cultivate positive emotions like gratitude and awe. These practices can deepen their optimism, align their actions with their values, and enhance their overall well-being.
          </p>
        </div>
      </motion.section>

      {/* First Section: Claremont Purpose */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.dark }}>
          Claremont Purpose
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ReportCard
            imageSrc={test21}
            title="Life Purpose Evaluation"
            description="Assessment of your core life purpose and meaningful goals."
            altText="Life Purpose Evaluation"
          />
          <ReportCard
            imageSrc={test22}
            title="Meaningfulness Assessment"
            description="Evaluation of what brings you the most meaning and fulfillment."
            altText="Meaningfulness Assessment"
          />
          <ReportCard
            imageSrc={test23}
            title="Purpose Alignment"
            description="How well your current life aligns with your deeper purpose."
            altText="Purpose Alignment"
          />
        </div>
      </section>

      {/* Second Section: Career Aptitude Test */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.dark }}>
          Career Aptitude Test
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ReportCard
            imageSrc={test11}
            title="Personality Analysis"
            description="Detailed breakdown of your personality traits and characteristics."
            altText="Personality Analysis"
          />
          <ReportCard
            imageSrc={test12}
            title="Career Assessment"
            description="Analysis of your skills and recommended career paths."
            altText="Career Assessment"
          />
          <ReportCard
            imageSrc={test13}
            title="Interest Mapping"
            description="Visualization of your core interests and how they interconnect."
            altText="Interest Mapping"
          />
        </div>
      </section>

      {/* Third Section: 8000 Hours Test Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.dark }}>
          8000 Hours Test Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ReportCard
            imageSrc={test31}
            title="Career Path Analysis"
            description="Detailed evaluation of your optimal career trajectory based on research."
            altText="Career Path Analysis"
          />
          <ReportCard
            imageSrc={test32}
            title="Skill Development Map"
            description="Strategic roadmap for developing high-impact skills over time."
            altText="Skill Development Map"
          />
        </div>
      </section>
    </div>
  );
};

export default Reports;