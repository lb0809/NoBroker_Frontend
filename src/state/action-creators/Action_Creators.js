

export const register=(user)=>{
  console.log(user)
  return(dispatch)=>{
    dispatch({
      type:'register',
      payload:user
    })
  }
}
export const postprop=(prop,i)=>{
  const p={
    property:prop,
    i:i
  }
  return(dispatch)=>{
    dispatch({
      type:'postprop',
      payload:p
    })
  }
}
export const sendmsg=(msg)=>{
  return(dispatch)=>{
    dispatch({
      type:'sendmsg',
      payload:msg
    })
  }
}
export const login=(user)=>{
  return(dispatch)=>{
    dispatch({
      type:'login',
      payload:user
    })
  }
}
export const logout=()=>{
  return(dispatch)=>{
    dispatch({
      type:'logout'
    })
  }
}
export const updateprofile=(req)=>{
  return(dispatch)=>{
    dispatch({
      type:'update',
      payload:req
    })
  }
}
export const deleteprofile=(i)=>{
  return(dispatch)=>{
    dispatch({
      type:'update',
      payload:i
    })
  }
}