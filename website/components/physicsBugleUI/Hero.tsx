"use client";

import React from 'react'
import { WavyBackground } from './wavy-background'
import { motion } from "framer-motion";
import { slideInFromLeft } from '@/utils/motion';

function Hero() {
  return (

    <WavyBackground className="max-w-4xl mx-auto pb-40">
        <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >

       
            <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
            <span>
                Welcome to The physics Bugle
            </span>
            </motion.div>
        </motion.div>
    </WavyBackground>
  )
}

export default Hero