export const textVariant = (type = "spring", duration = 1.25, delay) => {
  return {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type, duration, delay },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

export const zoomIn = (type = "tween", delay, duration) => {
  return {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

export const staggerContainer = (hidden = {}, show = {}, transition = {}) => {
  return {
    hidden,
    show: {
      ...show,
      transition: { delayChildren: 0.3, staggerChildren: 0.2, ...transition },
    },
  };
};
