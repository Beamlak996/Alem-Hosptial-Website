import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BackgroundBeamsWithCollision } from "../animation/background-beams-with-collision";
import { TextGenerateEffect } from "../animation/text-generator-effect";
import { ImagesSlider } from "../animation/image-slider";

export const Cta = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-sky-500 md:text-3xl animate-bounce">
              Transforming Healthcare at Alem Primary Hospital
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block animate-fade-in">
              Discover cutting-edge facilities and compassionate care, where
              innovation meets commitment to serve your well-being. At Alem
              Primary Hospital, your health is our priority.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="#"
                className="inline-block rounded bg-sky-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-sky-600 focus:outline-none focus:ring focus:ring-yellow-400 animate-pulse"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>

        <ImagesSlider
          className="h-full rounded-l-2xl"
          images={[
            "/alem-hospital-inner-building.JPG",
            "/alem-hospital-opening.jpg",
            "/alem-hospital-microscope.JPG",
          ]}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              <span className="block text-2xl md:text-4xl mt-2">
                Excellence in Every Step
              </span>
              <TextGenerateEffect words="Seize the Opportunity for Excellence and Innovation." />
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-sky-300/10 border-sky-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <Link to="/contact">
                <span>Explore Services →</span>
              </Link>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-sky-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      </section>
    </BackgroundBeamsWithCollision>
  );
};
