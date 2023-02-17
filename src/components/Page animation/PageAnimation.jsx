import React from 'react'
import { motion } from 'framer-motion'

let animationVariants = {
  initial: {
    opacity: 0,

    x: -200,

    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,

    x: 0,

    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,

    x: 200,

    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

function PageAnimation({ children }) {
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default PageAnimation
