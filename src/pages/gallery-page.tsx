import { motion } from "framer-motion";

export const GalleryPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-sky-700 mb-16"
        >
          Alem Primary Hospital Gallery
        </motion.h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image 1 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-hospital-building.JPG"
              alt="Hospital Building"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: -2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-operating.JPG"
              alt="Operating Room"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-hospital-ct-scan.JPG"
              alt="CT Scan"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: -2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-hospital-operating-room.JPG"
              alt="Operating Room"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>

          {/* Image 5 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-hospital-pharmacy.JPG"
              alt="Pharmacy"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>

          {/* Image 6 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: -2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-hospital-cario.JPG"
              alt="Cardiology"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>

          {/* Image 7 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-hospital-childen.JPG"
              alt="Children's Ward"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>

          {/* Image 8 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: -2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-hospital-view.jpg"
              alt="Hospital View"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>

          {/* Image 9 */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src="/alem-hospital-staff.jpg"
              alt="Hospital Staff"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
