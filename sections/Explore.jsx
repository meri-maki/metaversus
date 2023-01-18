'use client'
import { useState } from 'react'
import {
  TypingText,
  TitleText,
  ExploreCard,
  MotionSection,
} from '../components'
import styles from '../styles'

import { exploreWorlds } from '../constants'

const Explore = () => {
  const [active, setActive] = useState('world-2')
  return (
    <MotionSection
      id="explore"
      styleSection={`${styles.paddings}`}
      styleDiv={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The World" />
      <TitleText
        title={
          <>
            Choose the world you want
            <br className="md:block hidden" /> to explore
          </>
        }
      />
      <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
        {exploreWorlds.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </MotionSection>
  )
}

export default Explore
