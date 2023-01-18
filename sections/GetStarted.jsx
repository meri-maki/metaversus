'use client'

import { motion } from 'framer-motion'
import { TypingText, TitleText, StartSteps, MotionSection } from '../components'
import styles from '../styles'
import { fadeIn, planetVariants } from '../utils/motion'
import { startingFeatures } from '../constants'

const GetStarted = () => (
  <MotionSection
    styleSection={`${styles.paddings} relative z-10`}
    styleDiv={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
  >
    <motion.div
      viewport={{ once: false }}
      variants={planetVariants('left')}
      className="center-flex flex-1"
    >
      <img
        src="./get-started.svg"
        alt="get started"
        className="w-[90%] h-[90%] object-contain"
      />
    </motion.div>
    <motion.div
      viewport={{ once: false }}
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] center-flex flex-col"
    >
      <TypingText title="| How Metaversus works" />
      <TitleText title={<>Get Started with just a few clicks</>} />
      <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
        {startingFeatures.map((feature, index) => (
          <StartSteps key={feature} text={feature} number={index + 1} />
        ))}
      </div>
    </motion.div>
  </MotionSection>
)

export default GetStarted
