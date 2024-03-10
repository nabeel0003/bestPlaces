import React from 'react'
import MainStack from './MainStack'
import AuthStack from './AuthStack'
const Navigation = ({loginState}) => {

  return (
    <>
        {loginState == true ? <MainStack/> : <AuthStack/>}
    </>
  )
}

export default Navigation