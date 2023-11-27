import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
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

  return (
    <motion.div
      animate={
        counter >= 100
          ? { opacity: 0, display: "none", visibility: "hidden" }
          : {}
      }
      className="fixed inset-0 z-40 flex items-center justify-center bg-primary"
    >
      <div className="w-32 text-center">
        <div className="font-bold text-[#dfd9ff] text-[80px] leading-tight">
          {counter}
        </div>
        <div className="rounded-3xl h-[2px] bg-[#dfd9ff53]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${counter}%` }}
            className="h-[2px] rounded-3xl bg-[#dfd9ff]"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};
