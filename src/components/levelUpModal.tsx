import { useContext } from "react"
import styles from "../styles/components/levelUpModal.module.css"
import { ChallengeContext } from "@/contexts/challengeContext"

export function LevelUpModal(){

  const { level, closeLevelUpModal } = useContext(ChallengeContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  )
}