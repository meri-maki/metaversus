'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col items-center justify-between gap-4"
  >
    <img
      src={imgUrl}
      alt={title}
      className="md:w-[270px] w-full h-[320px] rounded-[32px] object-cover"
    />

    <div className="flex w-full justify-between items-center">
      <div className="flex-1 md:ml-[30px] flex flex-col max-w-[620px]">
        <h4 className="text-[26px] lg:text-[42px] text-white font-normal">
          {title}
        </h4>
        <p className="mt-[16px] lg:text-[20px] text-[20px] text-secondary-white font-normal">
          {subtitle}
        </p>
      </div>
    </div>
    <div
      className="w-[100px] h-[100px] bg-transparent
    rounded-full border-white border-[2px] lg:flex hidden items-center justify-center cursor-pointer"
    >
      <img
        src="./arrow.svg"
        alt="arrow"
        className="w-[35%] h-[35%] object-contain"
      />
    </div>
  </motion.div>
)

export default InsightCard
