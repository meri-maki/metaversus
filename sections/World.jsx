'use client'
import { motion } from 'framer-motion'
import { TypingText, TitleText, NewFeatures } from '../components'
import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} mx-auto  flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        textStyles="text-center"
        title={
          <>
            Track friends around you and invite to play together in the same
            world
          </>
        }
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <img src="./map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-people backdrop-blur-[6px]">
          <img
            src="./people-01.png"
            alt="people"
            className=" -z-10 w-full h-full absolute top-0 left-0 blur-[25px]"
          />
          <img src="./people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-people backdrop-blur-[6px]">
          <img
            src="./people-02.png"
            alt="people"
            className="-z-10 w-full h-full absolute top-0 left-0 blur-[25px]"
          />
          <img src="./people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full  bg-[#5d6680] shadow-people backdrop-blur-[6px]">
          <img
            src="./people-03.png"
            alt="people"
            className="-z-10 w-full h-full absolute top-0 left-0 blur-[25px]"
          />
          <img src="./people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default World
