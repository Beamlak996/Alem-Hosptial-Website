import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export const ContactInfo = () => {
  return (
    <div className="bg-sky-500 dark:bg-sky-700 text-white w-full lg:w-1/2 p-8">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
        Get in Touch
      </h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-2xl mt-1" />
          <div>
            <p className="font-semibold">Address:</p>
            <p className="text-lg">ቡታጅራ, Ethiopia</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaPhone className="text-2xl mt-1" />
          <div>
            <p className="font-semibold">Phone:</p>
            <p className="text-lg">0461450335, 0977010203, 0977020303</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaEnvelope className="text-2xl mt-1" />
          <div>
            <p className="font-semibold">Email:</p>
            <p className="text-lg">alemprh@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
