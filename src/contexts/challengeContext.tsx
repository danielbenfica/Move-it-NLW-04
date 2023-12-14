import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from '../../challenge.json';
import { LevelUpModal } from "@/components/levelUpModal";

interface Challenge{
  type: 'body' | 'eye',
  description: string,
  amount: number,
}

interface ChallengeContextData{
  level: number,
  currentExperience: number, 
  challengesCompleted: number,
  activeChallenge: Challenge,
  experienceToNextLevel: number,
  levelUp: () => void,
  startNewChallenges: () => void,
  resetChallenge: () => void,
  CompletedChallenge: () => void,
  closeLevelUpModal: () => void
}

interface ChallengesProviderProps{
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const [activeChallenge, setActiveChallenge] = useState<Challenge>();

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp(){
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  function closeLevelUpModal(){
    setIsLevelUpModalOpen(false)
  }

  function startNewChallenges(){
    const randomChallangeIndex = Math.floor(Math.random() * challenges.length)    
    const challenge: any = challenges[randomChallangeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play()

    if(Notification.permission === 'granted'){
      new Notification("Novo Desafio!", {
        body: `Valendo ${challenge.amount}xp`
      })
    }
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }

  function CompletedChallenge(){
    if(!activeChallenge){
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount
    
    
    if(finalExperience > experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel
      console.log(finalExperience);
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null) 
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengeContext.Provider 
      value={{ 
        level,
        currentExperience, 
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenges,
        resetChallenge,
        CompletedChallenge,
        closeLevelUpModal
      }}>
      {children}
      {isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengeContext.Provider>
  )
}