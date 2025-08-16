import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import coverImage from './../assets/images/coverimage1.jpg';
import profileImage from './../assets/images/aboutusimg6.png';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Color definitions
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

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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
              About Me
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: colors.gold }}></div>
       
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Profile Section */}
        <motion.section
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="mb-24"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 flex justify-center">
              <motion.div 
                variants={scaleVariants}
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
              >
            
<div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
  <img
    src={profileImage}
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>
              </motion.div>
            </div>
            
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold mb-4" style={{ color: colors.dark }}>
                Professional Profile
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.gold }}>
                  <i className="fas fa-graduation-cap mr-2"></i>
                  Commerce & Business Management Student
                </h3>
         
              </div>
              
         <div
  className="p-6 rounded-lg shadow-md"
  style={{
    backgroundColor: colors.light,
    borderLeft: `4px solid ${colors.gold}`,
  }}
>
  <h4
    className="text-xl font-bold mb-3"
    style={{ color: colors.dark }}
  >
    About Me
  </h4>

  {/* Section 1 */}
  <p className="leading-relaxed mb-4" style={{ color: colors.medium }}>
    My Bachelor of Commerce degree gave me a strong business foundation, while
    my corporate experience taught me how to adapt, problem-solve, and build
    networks across diverse teams. In a boundaryless career, growth is driven
    by curiosity, flexibility, and learning from varied contexts-qualities
    I’ve consistently applied in my professional journey.
  </p>

  {/* Section 2 */}
  <p className="leading-relaxed" style={{ color: colors.medium }}>
    Rather than climbing
    a single corporate ladder, I prefer to cross bridges into new opportunities,
    blending knowledge from different sectors to create innovative solutions.
    This orientation perfectly matches my need for variety, autonomy, and
    continuous development while ensuring my career evolves with the changing
    business landscape.
  </p>
</div>

            </div>
          </div>
        </motion.section>

    

        {/* Leadership Profile Section */}
        <motion.section
          ref={ref6}
          initial="hidden"
          animate={inView6 ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="mb-16"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg" style={{ borderTop: `4px solid ${colors.gold}` }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.dark }}>
              Leadership Profile
            </h3>
            <div className="w-16 h-1 mb-6" style={{ backgroundColor: colors.gold }}></div>
            <p className="leading-relaxed mb-6" style={{ color: colors.medium }}>
              As a natural leader with a persuasive personality, I thrive in roles that allow me to influence, motivate, and direct others. My core drive is to make an impact by shaping perspectives and decisions, leveraging my assertive and confident nature to achieve ambitious goals. I excel in high-stakes environments where strategic thinking and decisive action are required.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-5 rounded-lg" style={{ backgroundColor: colors.accentLight }}>
                <h4 className="font-bold mb-3 text-lg" style={{ color: colors.dark }}>Top Strengths</h4>
                <ul className="space-y-2">
                  {['Strategic Decision-Making', 'Team Leadership', 'Influential Communication', 
                    'Risk Assessment', 'Performance-Driven Mindset'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full mt-2 mr-2" style={{ backgroundColor: colors.gold }}></span>
                      <span style={{ color: colors.medium }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-5 rounded-lg" style={{ backgroundColor: colors.accentLight }}>
                <h4 className="font-bold mb-3 text-lg" style={{ color: colors.dark }}>Leadership Approach</h4>
                <ul className="space-y-2">
                  {['Results-oriented with clear vision', 'Empowering team members', 
                    'Data-driven decision making', 'Adaptive to changing environments',
                    'Strong focus on achievement'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full mt-2 mr-2" style={{ backgroundColor: colors.gold }}></span>
                      <span style={{ color: colors.medium }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold relative inline-block" style={{ color: colors.dark }}>
              <span className="relative z-10 px-4 bg-white">Education</span>
              <span className="absolute left-0 right-0 top-1/2 h-0.5 z-0" 
                style={{ background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)` }}></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "BACHELOR OF COMMERCE",
                year: "2025",
                institution: "Edith Cowan University, Colombo",
                icon: "fas fa-graduation-cap"
              },
              {
                title: "DIPLOMA OF COMMERCE",
                year: "2022",
                institution: "Edith Cowan University, Colombo",
                icon: "fas fa-certificate"
              },
              {
                title: "COMPLETED A LEVELS",
                year: "2021",
                institution: "Leeds International School, Panadura",
                icon: "fas fa-school"
              },
              {
                title: "COMPLETED LEVEL 1 AND LEVEL 2",
                year: "2020",
                institution: "Association of Accounting Technicians (AAT), Colombo",
                icon: "fas fa-award"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: colors.light }}
              >
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: colors.accentLight }}>
                    <i className={`${item.icon} text-xl`} style={{ color: colors.gold }}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: colors.dark }}>
                      {item.title} | {item.year}
                    </h3>
                    <p style={{ color: colors.medium }}>{item.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row gap-12 -mb-40">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 relative pb-4" style={{ color: colors.dark }}>
                <span>Core Skills</span>
                <span className="absolute bottom-0 left-0 w-20 h-1" style={{ backgroundColor: colors.gold }}></span>
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {['Sportsperson', 'Leadership', 'Interpersonal Skills', 
                  'Problem Solving', 'Communication', 'Business Analytics'].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-lg border hover:shadow-md transition-all"
                    style={{ 
                      backgroundColor: colors.light,
                      borderColor: colors.accentLight
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.gold }}></div>
                      <h4 className="font-medium" style={{ color: colors.dark }}>{skill}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 relative pb-4" style={{ color: colors.dark }}>
                <span>Achievements</span>
                <span className="absolute bottom-0 left-0 w-20 h-1" style={{ backgroundColor: colors.gold }}></span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Athletics Champion (2010-2021)",
                    description: "Competed in Lions Club Games, Zonal Games, Provincial Games, Divisional Games, ISAC, and John Tachet Games. Specialized in 100m and High Jump events, consistently earning medals and certificates.",
                    icon: "fas fa-medal"
                  },
                  {
                    title: "Community Service",
                    description: "Participated in Help Age Fund Raising Activities, demonstrating commitment to social responsibility.",
                    icon: "fas fa-hands-helping"
                  },
                  {
                    title: "Arts Recognition",
                    description: "Silver Medal at Sri Lanka Annual Competitive Festival of Music, Dance and Speech (2009).",
                    icon: "fas fa-trophy"
                  },
                  {
                    title: "School Leadership",
                    description: "Top Board Prefect Member (2019-2020), serving as Games Captain after exceptional leadership demonstration.",
                    icon: "fas fa-user-tie"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-5 rounded-lg shadow-sm transition-all"
                    style={{ 
                      backgroundColor: colors.light,
                      borderLeft: `4px solid ${colors.gold}`
                    }}
                  >
                    <div className="flex items-start">
                      <div className="p-2 rounded-full mr-4" style={{ backgroundColor: colors.accentLight }}>
                        <i className={`${item.icon}`} style={{ color: colors.gold }}></i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1" style={{ color: colors.dark }}>{item.title}</h4>
                        <p className="text-sm" style={{ color: colors.medium }}>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

       
      </div>
    </motion.div>
  );
};

export default AboutUs;