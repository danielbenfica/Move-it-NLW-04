import { useContext } from 'react'
import styles from '../styles/components/countDown.module.css'

import { CountDownContext } from '@/contexts/countDownContext';

export default function CountDown(){
  const {
    minutes,
    secounds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountDownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secoundLeft, secoundRight] = String(secounds).padStart(2, '0').split('');


  return(
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secoundLeft}</span>
          <span>{secoundRight}</span>
        </div>
      </div>

      {hasFinished ? (
          <button 
          disabled
          className={styles.countDownButton}
          >
          Ciclo encerrado  
        </button>
      ) : (
        <>
        {isActive ? (
        <button 
        type="button" 
        className={`${styles.countDownButton}  ${styles.countDownActive}`}
        onClick={resetCountDown}
        >
        Abandonar ciclo

      </button>
      ) : (
        <button 
          type="button" 
          className={`${styles.countDownButton}`}
          onClick={startCountDown}
        >
        Inicar um ciclo
        </button>)
    }
        </>
      )}
      
     
    </div>
  )
}