import actionType from "../constant";

const INITIAL_STATE ={
    userData :{},
    userLoading:false, 
    userDataErroe:""
}
const getProfileReducer = (state =INITIAL_STATE,action)=>{
    switch (action.type) {
        case actionType.GET_GITHUB_PROFILE_LOADING:
            return{
                ...state,
                userLoading:true,
            };
        case actionType.GET_GITHUB_PROFILE:
            return{
                ...state,
                userData:action.payload,
                userLoading:false,
            };
            case actionType.GET_GITHUB_PROFILE_ERROR:
                return{
                    ...state,
                userLoading:false,
                userData:action.payload,
                userData:{}
            }
    
        default:
           return state ;
    }
}

export {getProfileReducer}