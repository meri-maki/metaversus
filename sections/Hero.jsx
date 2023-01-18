'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MotionSection } from '../components'
import styles from '../styles'
import { slideIn, textVariant } from '../utils/motion'
import stamp from '../public/stamp.svg'
import cover from '../public/cover.svg'

const Hero = () => (
  <MotionSection
    styleSection={`${styles.yPaddings} sm:pl-16 pl-6`}
    styleDiv={`${styles.innerWidth} mx-auto flex flex-col`}
  >
    <div className="center-flex relative flex-col z-10">
      <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
        Metaverse
      </motion.h1>
      <motion.div
        variants={textVariant(1.2)}
        className="flex flex-row align-center justify-center items-baseline"
      >
        <h1 className={styles.heroHeading}>Ma</h1>
        <div className={styles.heroDText} />
        <h1 className={styles.heroHeading}>ness</h1>
      </motion.div>
    </div>
    <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="relative w-full md:-mt-[20px] -mt-[12px]"
    >
      <div className="absolute w-full h-[300px] hero-gradient rounded-tr-[140px] rounded-br-[42px] z-[0] -top-[30px]" />
      <Image
        src={cover}
        alt="cover"
        className="w-full sm:h-[500px] h-[350px] object-cover rounded-tr-[140px] rounded-br-[42px] z-10 relative"
      />
      <a href="#explore">
        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 ">
          <Image
            src={stamp}
            alt="stamp"
            className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
          />
        </div>
      </a>
    </motion.div>
  </MotionSection>
)

export default Hero
