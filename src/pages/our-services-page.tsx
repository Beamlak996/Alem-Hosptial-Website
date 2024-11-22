import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/animation/type-writing-effect";

export const services = [
  {
    id: "emergency",
    name: "Emergency Care",
    description:
      "Around-the-clock emergency services with advanced life-saving technologies and experienced professionals. Trust us with your critical health needs any time of the day.",
    icon: "🚑",
  },
  {
    id: "cardiology",
    name: "Cardiology",
    description:
      "State-of-the-art cardiac care from diagnosis to rehabilitation. Our cardiology experts use cutting-edge treatments to ensure a healthy heart for a healthier life.",
    icon: "❤️",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description:
      "Comprehensive care for infants, children, and teenagers in a child-friendly environment. Your child's health is our utmost priority.",
    icon: "👶",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description:
      "Advanced treatments for bone, joint, and muscle conditions. We combine modern techniques and compassionate care to restore your mobility.",
    icon: "🦴",
  },
  {
    id: "neurology",
    name: "Neurology",
    description:
      "Specialized care for brain and nerve disorders with cutting-edge diagnostic tools and personalized treatment plans for a better quality of life.",
    icon: "🧠",
  },
];

export const OurServicesPage = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  const words = [
    { text: "Our" },
    { text: "Medical" },
    { text: "Services", className: "text-sky-500 dark:text-blue-500" },
  ];

  return (
    <div className="min-h-screen p-6 ">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col items-center justify-center w-full">
          <TypewriterEffectSmooth
            words={words}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
            cursorClassName="bg-sky-500"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
            {/* Services List */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Available Services
              </h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-xl flex items-center gap-3 transition-all duration-200 ${
                      activeService === service.id
                        ? "bg-sky-500 text-white shadow-lg"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                    }`}
                    onClick={() => setActiveService(service.id)}
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className="font-medium">{service.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="col-span-2 p-8">
              <AnimatePresence mode="wait">
                {services.map((service) =>
                  activeService === service.id ? (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl">{service.icon}</span>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                      {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-200"
                      >
                        Learn More
                      </motion.button> */}
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
