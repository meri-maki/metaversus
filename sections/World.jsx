'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TypingText, TitleText, MotionSection } from '../components'
import styles from '../styles'
import { fadeIn } from '../utils/motion'
import people1 from '../public/people-01.svg'
import people2 from '../public/people-02.svg'
import people3 from '../public/people-02.svg'
import map from '../public/map.svg'

const World = () => (
  <MotionSection
    styleSection={`${styles.paddings} relative`}
    styleDiv={`${styles.innerWidth} center-flex mx-auto  flex-col`}
  >
    <TypingText title="| People on the World" />
    <TitleText
      title={
        <>
          Track friends around you and invite them to play together in the same
          world
        </>
      }
    />
    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-[68px] flex w-full"
    >
      <Image src={map} alt="map" className="w-full h-full object-cover" />
      <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-people backdrop-blur-[6px]">
        <Image
          src={people1}
          alt="people"
          className=" -z-10 w-full h-full absolute top-0 left-0 blur-[25px]"
        />
        <Image src={people1} alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-people backdrop-blur-[6px]">
        <Image
          src={people2}
          alt="people"
          className="-z-10 w-full h-full absolute top-0 left-0 blur-[25px]"
        />
        <Image src={people2} alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full  bg-[#5d6680] shadow-people backdrop-blur-[6px]">
        <Image
          src={people3}
          alt="people"
          className="-z-10 w-full h-full absolute top-0 left-0 blur-[25px]"
        />
        <Image src={people3} alt="people" className="w-full h-full" />
      </div>
    </motion.div>
  </MotionSection>
)

export default World
