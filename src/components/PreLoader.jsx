import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const TOTAL_ITEMS_TO_LOAD = 71;

const variants = {
  hidden: { y: "-100%", opacity: 0, transition: { duration: 0.4 } },
  show: { y: 0, opacity: 1 },
};

export const PreLoader = () => {
  const { loaded } = useProgress();
  const percentageLoaded = (loaded / TOTAL_ITEMS_TO_LOAD) * 100 ?? 0;
  const isLoaded = loaded === TOTAL_ITEMS_TO_LOAD;

  return (
    <motion.div
      animate={isLoaded ? "hidden" : "show"}
      variants={variants}
      className="fixed inset-0 z-40 flex items-center justify-center bg-gray-900"
    >
      <div className="w-48 text-center">
        <div className="py-4 font-bold text-white border text-8xl border-white/50">
          {percentageLoaded.toFixed(0)}
        </div>
        <div className="h-[3px] bg-white/50 mt-1">
          <div
            style={{ width: `${percentageLoaded}%` }}
            className="h-full bg-white"
          ></div>
        </div>
      </div>
    </motion.div>
  );
};
