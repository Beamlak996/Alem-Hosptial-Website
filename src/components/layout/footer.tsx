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
      className="bg-gradient-to-br from-blue-600 via-sky-600 to-blue-900 text-white py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          {/* Logo and Description */}
          <div className="flex-1">
            <img
              src="/alem-hosptial-logo.jpg"
              alt="Alem Primary Hospital Logo"
              className="w-28 h-28 mx-auto md:mx-0 mb-4 rounded-full shadow-lg"
            />
            <h2 className="text-2xl font-semibold">Alem Primary Hospital</h2>
            <p className="text-gray-200 mt-2 leading-relaxed">
              Dedicated to providing quality healthcare services with
              compassion, innovation, and excellence.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>Tel:</strong>
              <br />
              <span>046 145 0335</span>
              <br />
              <span>097 701 0203</span>
              <br />
              <span>097 702 0303</span>
            </p>
            <p className="text-gray-300 mt-3">ቡታጅራ, ኢትዮጵያ</p>
            <p className="text-gray-300 mt-2">
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
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="text-gray-300 hover:text-white transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaFacebookF size={30} />
                </motion.div>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="text-gray-300 hover:text-white transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaTwitter size={30} />
                </motion.div>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="text-gray-300 hover:text-white transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLinkedinIn size={30} />
                </motion.div>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="text-gray-300 hover:text-white transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaInstagram size={30} />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-900 pt-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Alem Primary Hospital. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
