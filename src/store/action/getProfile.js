import axios from "axios"
import actionType from "../constant"

const getProfile =(userNmae)=>{
    return(dispatc)=>{
        // console.log("1111111111")
        dispatc({
            type:actionType.GET_GITHUB_PROFILE_LOADING,
        })
  
        const searchvalue = userNmae ? userNmae :"example"


       axios.get(`https://api.github.com/users/${searchvalue}`)
       .then((res)=>
       dispatc({
           type:actionType.GET_GITHUB_PROFILE,
           payload:res.data
       })
       )
       .catch(err=>
        dispatc({
            type: actionType.GET_GITHUB_PROFILE_ERROR,
            Payload :err.message
        })
        )
    }
}
export {getProfile}