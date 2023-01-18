import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'

const MotionSection = (props) => (
  <section className={props.styleSection}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={props.styleDiv}
    >
      {props.children}
    </motion.div>
  </section>
)

export default MotionSection
