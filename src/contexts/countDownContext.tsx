import { useEffect, useState, useContext, ReactNode } from 'react'

import { ChallengeContext } from '@/contexts/challengeContext';

import { createContext } from "react";

interface CountDownContextData {
  minutes: number,
  secounds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountDown: () => void,
  resetCountDown: () => void
}

interface CountDownProviderProps{
  children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children } : CountDownProviderProps){

  const { startNewChallenges, activeChallenge } = useContext(ChallengeContext)

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const secounds = time % 60;

  function startCountDown(){
    setIsActive(true)
  }

  function resetCountDown(){
    clearTimeout(countDownTimeout)
    setIsActive(false)
    setTime(0.05 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if(isActive && time > 0){
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if(isActive && time == 0){
      setHasFinished(true)
      setIsActive(false)
      startNewChallenges()
    }
  }, [isActive, time])

  return(
    <CountDownContext.Provider value={{
      minutes,
      secounds,
      hasFinished,
      isActive,
      startCountDown,
      resetCountDown
      }}>
      {children}
    </CountDownContext.Provider>
  )
}