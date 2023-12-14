import { useContext, useEffect } from 'react'

import { ChallengeContext } from '@/contexts/challengeContext'

import styles from '../styles/components/experienceBar.module.css'

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel = Math.round(currentExperience * 100 ) / experienceToNextLevel 

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
          <div style={{ width: `${percentToNextLevel}%` }} />
          
          <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience} xp
          </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}