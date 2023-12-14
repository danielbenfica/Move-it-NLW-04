import type { AppProps } from 'next/app'

import '@/styles/global.css'

import { ChallengesProvider } from '../contexts/challengeContext'
import { UserDatasProvider } from '@/contexts/userDatasContext'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <UserDatasProvider>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </UserDatasProvider>
  ) 
}
