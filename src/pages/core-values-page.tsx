import { TypewriterEffectSmooth } from "@/components/animation/type-writing-effect";
import { values } from "@/lib/data";
import { motion } from "framer-motion";
import {
  FaHandHoldingHeart,
  FaStar,
  FaRocket,
  FaPeopleCarry,
  FaChalkboardTeacher,
} from "react-icons/fa";

export const CoreValuesPage = () => {
  // Words for the Typewriter effect
  const headingWords = [
    { text: "Our" },
    { text: "Core" },
    { text: "Values.", className: "text-sky-500 dark:text-blue-500" },
  ];

  // Icons representing core values
  const icons = [
    FaHandHoldingHeart,
    FaStar,
    FaRocket,
    FaPeopleCarry,
    FaChalkboardTeacher,
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading Section */}
        <div className="text-center w-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-gray-800 dark:text-gray-100"
          >
            <TypewriterEffectSmooth
              words={headingWords}
              className="text-black"
              cursorClassName="bg-sky-500"
            />
          </motion.h1>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="text-sky-500 dark:text-blue-400 text-4xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
