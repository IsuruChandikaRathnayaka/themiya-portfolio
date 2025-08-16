import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import YouTubeImage from '../assets/images/meetbhanu.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import video from '../assets/images/video.mp4';

const YouTube = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  // Pause and reset video when not in view or component unmounts
  useEffect(() => {
    const currentVideo = videoRef.current;
    
    return () => {
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (!inView && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [inView]);

  return (
    <div className="hidden sm:block">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center min-h-[60vh] bg-white px-4"
      >
        <div className="w-full max-w-5xl mt-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 font-serif">
              {t("youtube")} <span className="text-[#BB8B3D]">{t("live")}</span>
            </h1>
            <div className="w-24 h-1 bg-[#BB8B3D] mx-auto mt-4" />
          </div>

          <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-xl border-4 border-white">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full"
              controls
              poster={YouTubeImage}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default YouTube;