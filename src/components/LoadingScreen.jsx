import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
  const { progress } = useProgress();

  return (
    <motion.div
      animate={
        progress >= 100
          ? { opacity: 0, display: "none", visibility: "hidden" }
          : ""
      }
      className="fixed inset-0 z-40 flex items-center justify-center bg-primary"
    >
      <div className="w-32 text-center">
        <div className="font-bold text-[#dfd9ff] text-[80px] leading-tight">
          {progress.toFixed(0)}
        </div>
        <div className="rounded-3xl h-[3px] bg-[#dfd9ff53]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress.toFixed(0)}%` }}
            className="h-[3px] rounded-3xl bg-[#764AD4] relative overflow-hidden after:absolute after:content-[''] after:bg-gradient-to-r after:from-transparent after:via-[#FFF] after:to-transparent after:animate-shimmer after:inset-0"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};
