import { useContext } from "react";
import styles from "../styles/components/challengeBox.module.css"
import { ChallengeContext } from "@/contexts/challengeContext";
import { CountDownContext } from "@/contexts/countDownContext";

export default function ChallengeBox(){
  const { activeChallenge, resetChallenge, CompletedChallenge } = useContext(ChallengeContext);
  const { resetCountDown } = useContext(CountDownContext)

  function handleChallengSucceded(){
    CompletedChallenge()
    resetCountDown()
  }
  function handleChallengFalied(){
    resetChallenge();
    resetCountDown()
  }

  return (
    <div className={styles.challengeBoxContainer}>

      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            { activeChallenge.type == "body" 
            ? <img src="icons/body.svg" /> 
            : <img src="icons/eye.svg" /> }
            
            <strong>Novo deafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}  
              onClick={handleChallengFalied}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeSuccededButton}
              onClick={handleChallengSucceded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
           <p>
              <img src="icons/level-up.svg" alt="Level up" />
              Avance de level complentando desafios.
           </p>
        </div>
      )}
    </div>
  )
}