import jwtDecode from 'jwt-decode'
const initialState={
    user:null
}
if(localStorage.getItem('jwtToken')){
    const decodedToken=jwtDecode(localStorage.getItem('jwtToken'))
    if(decodedToken.exp*(1000)<Date.now()){
        localStorage.removeItem('jwtToken')
        initialState.user=null
    }
    else{
        initialState.user=decodedToken
    }
}
const current_user_reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'login':
            state.user=action.payload
            localStorage.setItem('jwtToken',action.payload.token)   
            console.log(localStorage.getItem('jwtToken'))       
            return state
        
        case 'logout':
            localStorage.removeItem('jwtToken')
            state.user=null
            return state
        
        default:
            return state;
    }
}
export default current_user_reducer