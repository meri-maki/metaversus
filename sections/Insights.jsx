'use client'

import {
  TypingText,
  TitleText,
  InsightCard,
  MotionSection,
} from '../components'
import styles from '../styles'
import { insights } from '../constants'

const Insights = () => (
  <MotionSection
    styleSection={`${styles.paddings} relative z-10`}
    styleDiv={`${styles.innerWidth} center-flex mx-auto flex-col`}
  >
    <TypingText title="| Insight" />
    <TitleText title={<>Insights about metaverse</>} />
    <div className="mt-[50px] flex flex-col gap-[30px]">
      {insights.map((insight, index) => (
        <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
      ))}
    </div>
  </MotionSection>
)

export default Insights
