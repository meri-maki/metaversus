'use client'
import { motion } from 'framer-motion'
import {
  TypingText,
  TitleText,
  NewFeatures,
  MotionSection,
} from '../components'
import styles from '../styles'
import { fadeIn, planetVariants } from '../utils/motion'
import { newFeatures } from '../constants'

const WhatsNew = () => (
  <MotionSection
    styleSection={`${styles.paddings} relative z-10`}
    styleDiv={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col-reverse gap-8`}
  >
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.75] center-flex flex-col"
    >
      <TypingText title="| What's new?" />
      <TitleText title={<>What's new about Metaversus?</>} />
      <div className="mt-[48px] flex-no-wrap flex-col sm:flex-row between-flex gap-[24px]">
        {newFeatures.map((feature) => (
          <NewFeatures key={feature.title} {...feature} />
        ))}
      </div>
    </motion.div>
    <motion.div
      variants={planetVariants('right')}
      className="flex-1 center-flex"
    >
      <img
        src="./whats-new.svg"
        alt="what's new"
        className="w-[90%] h-[90%] object-contain"
      />
    </motion.div>
  </MotionSection>
)

export default WhatsNew
