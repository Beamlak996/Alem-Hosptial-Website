import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gradient-to-br from-blue-700 via-sky-600 to-blue-900 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Logo and Description */}
          <div className="flex-1">
            <img
              src="/alem-hosptial-logo.jpg"
              alt="Alem Primary Hospital Logo"
              className="w-32 h-32 mx-auto lg:mx-0 mb-4 rounded-full shadow-lg border-4 border-white"
            />
            <h2 className="text-3xl font-semibold">Alem Primary Hospital</h2>
            <p className="text-gray-300 mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
              Committed to providing exceptional healthcare services with
              compassion, innovation, and excellence in every step.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>Tel:</strong>
              <br />
              <span>046 145 0335</span>
              <br />
              <span>097 701 0203</span>
              <br />
              <span>097 702 0303</span>
            </p>
            <p className="text-gray-300 mt-4">ቡታጅራ, ኢትዮጵያ</p>
            <p className="text-gray-300 mt-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:alemprh@gmail.com"
                className="text-sky-300 hover:text-white transition-colors duration-300 underline"
              >
                alemprh@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start gap-8">
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="p-3 bg-white/10 rounded-full text-white hover:text-sky-300 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaFacebookF size={28} />
                </motion.div>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="p-3 bg-white/10 rounded-full text-white hover:text-sky-300 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaTwitter size={28} />
                </motion.div>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="p-3 bg-white/10 rounded-full text-white hover:text-sky-300 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaLinkedinIn size={28} />
                </motion.div>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="p-3 bg-white/10 rounded-full text-white hover:text-sky-300 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FaInstagram size={28} />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 text-center border-t border-gray-700 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Alem Primary Hospital. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
