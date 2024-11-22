import { motion } from "framer-motion";
import { ContactForm } from "@/components/general/contact-form";
import { ContactInfo } from "@/components/general/contact-info";

export const ContactUsPage = () => {
  return (
    <div className="sm:min-h-screen p-6 flex flex-col gap-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center text-sky-700 mb-16"
      >
        Have a Question? Get In Touch
      </motion.h1>
      <div className="flex justify-center items-center  ">
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};
