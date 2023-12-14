import { useContext } from 'react'

import { ChallengeContext } from '@/contexts/challengeContext'

import styles from '../styles/components/profile.module.css'
import { UserDatasContext } from '@/contexts/userDatasContext';

export default function Profile(){
  const { level } = useContext(ChallengeContext);
  const {realName, avatarUrl} = useContext(UserDatasContext)


  return (
    <div className={styles.profileContainer}>
       <img src={avatarUrl ? avatarUrl : "icons/body.svg"} alt="Danie Benfica"/>
       <div>
        <strong> {realName ? realName : "Move.Iter"} </strong>
        <p>
          <img src="../icons/level.svg" alt="Level" />
          Level {level}
        </p>
       </div>
    </div>
  )
}