import React from 'react'
import { motion } from 'framer-motion'

const Areas = () => {
  return (
    <motion.div intial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>
      Area
    </motion.div>
  )
}

export default Areas