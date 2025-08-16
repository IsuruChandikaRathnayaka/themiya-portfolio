import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';

const Events = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, setRef] = useState(null);

  const eventsData = [
    {
      date: { month: 'Jul', day: 13 },
      title: t("esalaEvent7"),
      description: t("esalaEventDes77"),
    },
    // Add more events as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.2 // Adjust this threshold as needed
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, controls]);

  return (
    <motion.div
      className="p-6 pb-0 -mb-24 2xl:mt-[-100px]"
      ref={setRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="relative -mt-12">
        {/* Any additional content */}
      </div>
      <motion.h2
        className="text-3xl font-bold text-gray-800  ml-8 mt-14 lg:ml-60 font-montserrat text-32 font-semibold "
        variants={itemVariants}
      >
        <span className="text-[#BB8B3D]">  {t("events")} </span>
        <span className="text-[#000000]">  {t("year")} </span>
      </motion.h2>

      <section className="px-4 md:px-8 lg:px-16 xl:px-32 py-8 flex justify-center">
        <motion.div
          className="space-y-8 w-full max-w-[970px]"
          variants={containerVariants}
        >
          {eventsData.map((event, index) => (
            <motion.div
              key={index}
              className="flex space-x-4 p-4 border-t border-gray-300 w-full max-w-[970px] shadow-md relative"
              variants={itemVariants}
            >
              <div className="absolute left-0 top-0 h-full border-l-4 border-[#BB8B3D]"></div>
              <div className="flex-none bg-[#BB8B3D] text-white text-center p-4 rounded-none w-24 h-24">
                <p className="text-lg">{event.date.month}</p>
                <p className="text-2xl font-bold">{event.date.day}</p>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm mt-2 text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
          {/* <motion.div variants={itemVariants}>
            <Link to="/events" className="text-center block mt-6 font-montserrat font-bold underline text-xs -mb-10" style={{ color: '#000000' }}>{t("viewAll")}</Link>
          </motion.div> */}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Events;
