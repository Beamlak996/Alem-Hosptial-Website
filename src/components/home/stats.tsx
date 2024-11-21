import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../animation/type-writing-effect";

interface CounterProps {
  from: number;
  to: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration }) => {
  const [count, setCount] = useState<number>(from);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const increment = (to - from) / (duration * 60);

    const counter = setInterval(() => {
      if (!isVisible) return;

      setCount((prev) => {
        if (prev >= to) {
          clearInterval(counter);
          return to;
        }
        return prev + increment;
      });
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [from, to, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
    >
      <motion.span>{Math.round(count)}</motion.span>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const words = [
    { text: "Compassionate" },
    { text: "Care" },
    { text: "at" },
    { text: "Alem Hospital.", className: "text-blue-500" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-5xl text-center"
      >
        <div className="flex items-center justify-center w-full">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <TypewriterEffectSmooth
              words={words}
              className="text-black"
              cursorClassName="bg-blue-500"
            />
          </h2>
        </div>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Delivering exceptional healthcare with advanced technology, trusted
          specialists, and unwavering commitment to your well-being.
        </p>
      </motion.div>

      <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Patients Served Annually",
            count: 20000,
            duration: 3,
          },
          {
            label: "Specialists on Staff",
            count: 40,
            duration: 2,
          },
          {
            label: "Advanced Facilities",
            count: 10,
            duration: 2,
          },
          {
            label: "Years of Excellence",
            count: 3,
            duration: 3,
          },
        ].map(({ label, count, duration }, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <dt className="order-last text-lg font-medium text-gray-500">
              {label}
            </dt>

            <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
              <Counter from={0} to={count} duration={duration} />
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
};
