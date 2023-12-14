import ExperienceBar from '../components/experienceBar'
import Profile from '@/components/profile'
import CompletedChallenges from '@/components/completedChallegens'
import CountDown from '@/components/countDown'
import ChallengeBox from '@/components/challengeBox'

import { CountDownProvider } from '../contexts/countDownContext'
import { UserDatasContext } from '../contexts/userDatasContext'

import { useRouter } from 'next/router';
import Head from 'next/head'

import {useContext} from 'react'

import styles from '../styles/pages/home.module.css'
import Login from './login'

export default function Home() {
  const {realName} = useContext(UserDatasContext)
  const router = useRouter();

  return (
    realName?(
    <div className={styles.bodyPage}>
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
   </div>
    ) : <Login />

  )
}
