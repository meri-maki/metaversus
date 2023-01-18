'use client'

// component renders on client side (used when component includes use client hooks - useState/useEffect)
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles'
import { navVariants } from '../utils/motion'
import search from '../public/search.svg'
import menu from '../public/menu.svg'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto between-flex gap-8`}>
      <Image
        src={search}
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold font-24px leading-[30px] text-white">
        METAVERSUS
      </h2>
      <Image
        src={menu}
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
)

export default Navbar
