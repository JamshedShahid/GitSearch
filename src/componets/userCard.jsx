import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../store/action/getProfile'
import { getProfileReducer } from '../store/reduer/getProfileREducer'
import Eroor from './404'
import Card from './card'

const UserCard =  ({inputvalue}) => {

  // useEffect(async ()=>{
  //   const names = await  axios.get("https://api.github.com/users/jamsheds")
  //   console.log(names.data)
  // },[])



  const {userData ,userLoading,userDataErroe} = useSelector((state) => state.getProfileReducer)
  console.log(userData,"state")
  console.log(userLoading,"state")
  console.log(inputvalue,"statesssss")
  console.log(userDataErroe)


  const dispatch =useDispatch()

  useEffect(async ()=>{
      dispatch(getProfile(inputvalue))
    },[inputvalue])

    const {avatar_url,following,followers,name,public_repos} = userData
  
  return (
    
    
    <div>
      { userLoading ? <h1>Loading...</h1>
      : userDataErroe ? <Eroor /> 
      : <Card
      avatar_url ={avatar_url}
      following={following}
      followers={followers}
      name={name}
      public_repos={public_repos}
      
      /> }

      
    </div>
  )
}

export default UserCard
