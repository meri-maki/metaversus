'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../utils/motion'

export const TypingText = ({ title }) => (
  <motion.p
    viewport={{ once: true }}
    variants={textContainer}
    className="font-normal text-[14px] text-secondary-white text-center"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText = ({ title }) => (
  <motion.h2
    viewport={{ once: true }}
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center"
  >
    {title}
  </motion.h2>
)
