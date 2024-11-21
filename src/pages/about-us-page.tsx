import { motion } from "framer-motion";

export const AboutUsPage = () => {
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center text-sky-700"
        >
          About Alem Primary Hospital
        </motion.h1>

        {/* Introduction */}
        <motion.p
          {...fadeIn}
          className="text-center text-lg text-gray-700 leading-8 max-w-3xl mx-auto"
        >
          Founded three years ago, Alem Primary Hospital has been at the
          forefront of delivering compassionate, high-quality healthcare
          services to our community. Our commitment to innovation, excellence,
          and patient-centered care sets us apart as a leading healthcare
          provider.
        </motion.p>

        {/* Highlighted Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-6">
            <motion.div {...fadeIn} className="space-y-4">
              <h2 className="text-3xl font-semibold text-sky-700">
                Our Commitment
              </h2>
              <p className="text-gray-700 text-lg">
                We prioritize patient well-being by providing world-class
                medical facilities, innovative treatments, and a dedicated team
                of experts. From state-of-the-art diagnostics to personalized
                care plans, we aim to redefine healthcare standards.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-semibold text-sky-700">
                Advanced Facilities
              </h2>
              <p className="text-gray-700 text-lg">
                Our hospital is equipped with cutting-edge technology, ensuring
                precision and efficiency in every medical procedure. We take
                pride in offering a wide range of services, from diagnostics to
                surgery and post-treatment care.
              </p>
            </motion.div>
          </div>

          {/* Right Section - Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div {...imageVariants}>
              <img
                src="/alem-hospital-ct-scan.JPG"
                alt="CT Scan Facility"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div {...imageVariants} transition={{ delay: 0.2 }}>
              <img
                src="/alem-hospital-operating-room.JPG"
                alt="Operating Room"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div {...imageVariants} transition={{ delay: 0.4 }}>
              <img
                src="/alem-hospital-pharmacy.JPG"
                alt="Pharmacy"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div {...imageVariants} transition={{ delay: 0.6 }}>
              <img
                src="/alem-hospital-cario.JPG"
                alt="Cardiology Department"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Closing Section */}
        <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
          <h2 className="text-3xl font-semibold text-center text-sky-700">
            Join Us in Building a Healthier Tomorrow
          </h2>
          <p className="text-center text-lg text-gray-700 leading-8 mt-4 max-w-3xl mx-auto">
            At Alem Primary Hospital, we believe in a future where healthcare is
            accessible, innovative, and compassionate. Together, we are making
            strides in transforming lives and communities through exceptional
            care.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
