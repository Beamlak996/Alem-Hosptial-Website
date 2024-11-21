import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypewriterEffectSmooth } from "@/components/animation/type-writing-effect";

export const services = [
  {
    id: "emergency",
    name: "Emergency Care",
    description:
      "Around-the-clock emergency services with advanced life-saving technologies and experienced professionals. Trust us with your critical health needs any time of the day.",
  },
  {
    id: "cardiology",
    name: "Cardiology",
    description:
      "State-of-the-art cardiac care from diagnosis to rehabilitation. Our cardiology experts use cutting-edge treatments to ensure a healthy heart for a healthier life.",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description:
      "Comprehensive care for infants, children, and teenagers in a child-friendly environment. Your child's health is our utmost priority.",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description:
      "Advanced treatments for bone, joint, and muscle conditions. We combine modern techniques and compassionate care to restore your mobility.",
  },
  {
    id: "neurology",
    name: "Neurology",
    description:
      "Specialized care for brain and nerve disorders with cutting-edge diagnostic tools and personalized treatment plans for a better quality of life.",
  },
];

export const OurServicesPage = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  const words = [
    { text: "Services" },
    { text: "We" },
    { text: "Offer.", className: "text-sky-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col gap-8 min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="w-full flex items-center justify-center">
        <TypewriterEffectSmooth
          words={words}
          className="text-3xl font-bold text-gray-900 dark:text-white"
          cursorClassName="bg-sky-500"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-start">
        <div className="max-w-6xl w-full rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-3 bg-white dark:bg-gray-800 overflow-hidden">
          {/* Scrollable Services List */}
          <div className="p-6 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-2xl font-bold text-sky-700 dark:text-blue-500 mb-4">
              Our Services
            </h2>
            <ScrollArea className="max-h-96 overflow-y-auto">
              <ul className="space-y-3">
                {services.map((service) => (
                  <motion.li
                    key={service.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-lg cursor-pointer font-medium transition-all ${
                      activeService === service.id
                        ? "bg-sky-500 text-white shadow-lg"
                        : "bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-white"
                    }`}
                    onClick={() => setActiveService(service.id)}
                  >
                    {service.name}
                  </motion.li>
                ))}
              </ul>
            </ScrollArea>
          </div>

          {/* Service Details */}
          <div className="col-span-2 p-6">
            {services.map((service) =>
              activeService === service.id ? (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold text-sky-700 dark:text-blue-500">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
