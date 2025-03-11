import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        South Aceh
        <span className="text-textGreen tracking-wide">|| Regional Coordinator</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2015 - Apr 2016
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
         Maintain Finance Sales in Regional 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Mandala Finance Tapaktuan Branch Region III Coordinator: Tapaktuan, Samadua, Bakongan, Kota Fajar, Positions: Regional Coordinator
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
