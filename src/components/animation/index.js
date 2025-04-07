import { delay } from "framer-motion";

export const container = (delay) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeIn",
    },
  },
});

export const hey = (delay) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      delay: delay,
    },
  },
});

export const handWaveAnimation = {
  rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
  transition: {
    duration: 1.5,
    ease: "easeInOut",
  },
};

export const aboutUs = (delay) => {
  return {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: delay,
      },
    },
  };
};

export const lineX = (delay) => {
  return {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: delay,
      },
    },
  };
};
export const lineY = (delay) => {
  return {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };
};


export const projectCard = (delay) => { 
  return {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: delay,
      },
    },
  };
}