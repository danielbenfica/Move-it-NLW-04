import styles from '../styles/components/elementLeadersList.module.css'
import profileStyles from '../styles/components/profile.module.css'

export default function ElementLeadersList() {
  return (
    <div className={styles.leaderDatas}>
      <div>1</div>
      <div>
        <div className={profileStyles.profileContainer}>
          <img src="https://picsum.photos/200/300" alt="Danie Benfica"/>
          <div>
            <strong style={{fontSize: "1.3rem"}}> Daniel Benfica </strong>
            <p>
              <img src="icons/level.svg" alt="Level" />
              Level 147
            </p>  
          </div>
        </div>
        <div>
          <p>127 completados</p>
          <p><span>117000</span> xp</p>
        </div>
    </div>
  </div>
  )
}