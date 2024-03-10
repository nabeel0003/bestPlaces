import { View, Text } from 'react-native'
import React, { createContext, useMemo, useState } from 'react'
import Navigation from './src/navigations/Navigation'
import { create } from 'react-test-renderer'


export const AuthContext = createContext(null);

const App = () => {
  const [userPresent, setUserPresent] = useState(true)


  return (
    <AuthContext.Provider value={{setUserPresent}} >
   <Navigation loginState={userPresent}/>

    </AuthContext.Provider>
  )
}

export default App