import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStackNaviagation from './app-stack-navigtion'

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStackNaviagation />
    </NavigationContainer>
  )
}

export default Router
