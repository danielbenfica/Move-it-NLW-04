import {useState, useContext, ReactNode } from 'react'
import { useRouter } from 'next/router';

import axios from 'axios';

import { ChallengeContext } from '@/contexts/challengeContext';

import { createContext } from "react";

interface UserDatasContext {
  userNameId: string,
  realName: string,
  avatarUrl: string,
  level: number,
  totalExperience: number,
  fillDatas: (userName: string) => Promise<any>
}

interface CountDownProviderProps{
  children: ReactNode;
}

export const UserDatasContext = createContext({} as UserDatasContext);

export function UserDatasProvider({ children } : CountDownProviderProps){
  const router = useRouter();
  
  const [userNameId, setUserNameId] = useState("")
  const [realName, setRealName] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("icons/body.svg")
  const [level, setLevel] = useState(0)
  const [totalExperience, setTotalExperience] = useState(0)

  async function fillDatas(userName: string){
    try{
      const response = await axios(`https://api.github.com/users/${userName}`)
      if (response.status === 200){
        setUserNameId(userName)
        const userDatas = response.data;      
        
        setRealName(userDatas.name)
        setAvatarUrl(userDatas.avatar_url)
        router.push('/')
      }
    }catch (error){
      return error
    }
  
  }

  return(
    <UserDatasContext.Provider value={{
        userNameId,
        realName,
        avatarUrl,
        level,
        totalExperience,
        fillDatas,
      }}>
      {children}
    </UserDatasContext.Provider>
  )
}