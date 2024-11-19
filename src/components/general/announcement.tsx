import { IoLocation } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";

export const Announcement = () => {
  return (
    <div className="bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300 py-2 px-4 md:py-4">
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between flex-wrap">
        {/* Location Section */}
        <motion.div
          className="flex items-center gap-2 text-xs md:text-sm flex-wrap text-center md:text-left"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <IoLocation className="text-base md:text-lg text-sky-600" />
          <p className="hover:underline cursor-pointer text-sky-600">
            Butajira, Next to Gurage Development Association
          </p>
        </motion.div>

        {/* Welcome Text */}
        <motion.p
          className="text-xs md:text-sm text-center font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          👋 Welcome to{" "}
          <span className="font-bold text-sky-700">Alem Primary Hospital</span>
        </motion.p>

        {/* Phone Numbers */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-center">
          {[
            { number: "0461450335" },
            { number: "0977010203" },
            { number: "0977020303" },
          ].map((phone, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-1 text-sky-600 text-xs md:text-sm hover:underline cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosCall className="text-base md:text-lg text-sky-500" />
              <p>{phone.number}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
