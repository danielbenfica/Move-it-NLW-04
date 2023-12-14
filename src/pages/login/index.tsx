import { useContext, useState } from 'react';

import { UserDatasContext } from '../../contexts/userDatasContext'

import Head from 'next/head';

import styles from '../../styles/pages/login.module.css'

export default function Login(){
  const [userName, setUserName] = useState("");
  const { fillDatas, realName} = useContext(UserDatasContext)

  function submitForm(event: any){
    event.preventDefault()
    fillDatas(userName)  
  }

  return (
    <div className={styles.container}>
      <Head>
          <title>Login | move.it</title>
      </Head>
    <div></div>
      <div className={styles.formContainer}>
        <form className={styles.formBox}>
          <div className={styles.formHeader}>
            <img src="logo-full.svg" alt="" />
          </div>
            <h3>Bem-vindo</h3>
            <p>
              <img src="icons/github.svg" alt="Github" />
              Faça login com seu Github para começar
            </p>
            <div>
              <input 
                value={userName}
                onChange={e => setUserName(e.target.value)}
                type="text" 
                placeholder='Digite seu username' />
              <button onClick={submitForm}><img src="icons/arrowRight.svg" alt="Enter" /></button>
            </div>
        </form>
      </div>
    </div>
  )
}