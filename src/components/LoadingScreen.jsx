import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

export const LoadingScreen = () => {
<<<<<<< HEAD
  // const [counter, setCounter] = useState(0);
  const { progress } = useProgress();
=======
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let timer;
    const startLoading = () => {
      if (counter >= 100) {
        setCounter(100);
        document.body.style.overflow = "";
        return;
      }

      let delay = Math.floor(Math.random() * 200) + 50;
      timer = setTimeout(() => {
        setCounter((prev) => prev + Math.floor(Math.random() * 10) + 1);
        startLoading();
      }, delay);
    };

    startLoading();
    return () => {
      clearTimeout(timer);
    };
  });
>>>>>>> 814f49c21b780e5815483de619a40320455d7118

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
        <div className="rounded-3xl h-[2px] bg-[#dfd9ff53]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress.toFixed(0)}%` }}
            className="h-[2px] rounded-3xl bg-[#764AD4] relative overflow-hidden after:absolute after:content-[''] after:bg-gradient-to-r after:from-transparent after:via-[#FFF] after:to-transparent after:animate-shimmer after:inset-0"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};
