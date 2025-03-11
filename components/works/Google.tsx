import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        South Aceh
        <span className="text-textGreen tracking-wide">|| IT Support</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2021 - May 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
         Database Administrator & Application
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Managing and Analyzing Balance Sheet Profit and Loss of Company
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Reporting Lap. Daily, Monthly, Annual in accordance with company/applicable regulations.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
