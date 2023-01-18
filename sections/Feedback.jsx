'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles'
import { fadeIn, zoomIn } from '../utils/motion'
import { MotionSection } from '../components'
import stamp from '../public/stamp.svg'
import planet from '../public/planet-09.svg'

const Feedback = () => (
  <MotionSection
    styleSection={`${styles.paddings} relative z-10`}
    styleDiv={`${styles.innerWidth} center-flex mx-auto flex-col lg:flex-row gap-6`}
  >
    <motion.div
      viewport={{ once: true }}
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[370px] end-flex flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:h-[610px] h-auto min-h-[210px]"
    >
      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
          Samantha Heath
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
          Founder | Metaversus
        </p>
      </div>
      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        “With the development of today's technology, metaverse is very useful
        for today's work, or can be called web 3.0. by using metaverse you can
        use it as anything”
      </p>
    </motion.div>
    <motion.div
      viewport={{ once: true }}
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 center-flex"
    >
      <Image
        src={planet}
        alt="planet"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
      />
      <motion.div
        variants={zoomIn(0.4, 1)}
        className="lg:block hidden absolute -left-[10%] top-[3%]"
      >
        <Image
          src={stamp}
          alt="stamp"
          className="w-[155px] h-[155px] object-contain"
        />
      </motion.div>
    </motion.div>
  </MotionSection>
)

export default Feedback
