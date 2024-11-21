import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { TypewriterEffectSmooth } from "@/components/animation/type-writing-effect";

export const MissionAndVisionsPage = () => {
  const words = [
    {
      text: "Mission",
      className: "text-sky-700 dark:text-blue-500",
    },
    {
      text: "&",
    },
    {
      text: "Vision.",
      className: "text-sky-700 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-center text-sky-700 flex items-center justify-center"
        >
          <TypewriterEffectSmooth
            words={words}
            className="text-black"
            cursorClassName="bg-sky-500"
          />
        </motion.h1>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500"
        >
          {/* Mission Icon */}
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-gradient-to-r from-sky-200 to-white py-12">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center text-sky-700"
            >
              <FaBullseye className="text-9xl drop-shadow-lg" />
            </motion.div>
          </div>

          {/* Mission Text */}
          <div className="lg:w-1/2 w-full p-10 flex flex-col justify-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-semibold text-sky-700"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              At Alem Primary Hospital, our mission is to deliver compassionate,
              high-quality healthcare services to our community. We are
              dedicated to improving lives through excellence in patient care,
              medical education, and innovative research.
            </motion.p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row-reverse items-center bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500"
        >
          {/* Vision Icon */}
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-gradient-to-r from-white to-sky-200 py-12">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center text-sky-700"
            >
              <FaLightbulb className="text-9xl drop-shadow-lg" />
            </motion.div>
          </div>

          {/* Vision Text */}
          <div className="lg:w-1/2 w-full p-10 flex flex-col justify-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-semibold text-sky-700"
            >
              Our Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              To be a leading healthcare provider recognized for outstanding
              patient outcomes, cutting-edge medical innovation, and a
              commitment to fostering a healthy and resilient community.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
