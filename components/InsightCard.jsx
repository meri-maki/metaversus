'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '../utils/motion'
import arrow from '../public/arrow.svg'

const InsightCard = ({ imgUrl, imgWidth, title, subtitle, index }) => (
  <motion.div
    viewport={{ once: true }}
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="md:flex-row flex-col between-flex gap-4"
  >
    <Image
      src={imgUrl}
      width={imgWidth}
      height={750}
      alt={title}
      className="md:w-[270px] w-full h-[320px] rounded-[32px] object-cover"
    />

    <div className="between-flex w-full">
      <div className="flex-1 md:mx-[30px] flex flex-col max-w-[620px]">
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
    rounded-full border-white border-[2px] lg:flex lg:flex-shrink-0 hidden items-center justify-center cursor-pointer"
    >
      <Image
        src={arrow}
        alt="arrow"
        className="w-[35%] h-[35%] object-contain"
      />
    </div>
  </motion.div>
)

export default InsightCard
