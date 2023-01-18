'use client'

import { motion } from 'framer-motion'
import { MotionSection, TypingText } from '../components'
import styles from '../styles'
import { fadeIn } from '../utils/motion'

const About = () => (
  <MotionSection
    styleSection={`${styles.paddings} relative z-10`}
    styleDiv={`${styles.innerWidth} mx-auto flex-col center-flex`}
  >
    <div className="gradient-02 z-0" />
    <TypingText title="| About Metaversus" />
    <motion.p
      viewport={{ once: true }}
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
    >
      <span className="font-bold text-white">Metaverse</span> is a new thing in
      the future, where you can enjoy the virtual world by feeling like it's
      really real, you can feel what you feel in this metaverse world, because
      this is really the{' '}
      <span className="font-bold text-white">madness of the metaverse</span> of
      today, using only madness of the metaverse{' '}
      <span className="font-bold text-white">VR</span> devices you can easily
      explore the metaverse world you want, turn your dreams into reality. Let's{' '}
      <span className="font-bold text-white">explore</span> the madness of the
      metaverse by scrolling down
    </motion.p>
    <motion.img
      viewport={{ once: true }}
      variants={fadeIn('up', 'tween', 0.3, 1)}
      src="./arrow-down.svg"
      alt="arrow down"
      className="w-[18px] h-[28px] object-contain mt-[28px]"
    ></motion.img>
  </MotionSection>
)

export default About
