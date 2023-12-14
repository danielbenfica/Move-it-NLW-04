import { useContext } from 'react'

import { ChallengeContext } from '@/contexts/challengeContext'

import styles from '../styles/components/completedChallenges.module.css'

export default function CompletedChallenges(){
  const { challengesCompleted } = useContext(ChallengeContext);

  return(
    <div className={styles.completedCallengesContainer}>
      <span>Desafios Completados</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}