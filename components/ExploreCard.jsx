'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '../utils/motion'
import headset from '../public/headset.svg'

const ExploreCard = ({
  active,
  handleClick,
  index,
  id,
  imgUrl,
  title,
  imgHeight,
  imgWidth,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.7)}
    viewport={{ once: true }}
    onClick={() => handleClick(id)}
    className={`select-none center-flex min-w-[170px] min-h-[50px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer relative overflow-hidden ${
      active === id ? 'lg:flex-[3.5] flex-[12]' : 'lg:flex-[0.5] flex-[3]'
    }`}
  >
    <Image
      src={imgUrl}
      alt={title}
      height={imgHeight}
      width={imgWidth}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] "
      >
        <div className="center-flex md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[24px] glassmorphism md:mb-[14px] mb-[8px]">
          <Image
            src={headset}
            width={24}
            height={18}
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[16px] text-white uppercase">
          Enter the Metaverse
        </p>
        <h2 className="mt-[12px] md:mt-[16px] font-semibold md:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </motion.div>
    )}
  </motion.div>
)

export default ExploreCard
