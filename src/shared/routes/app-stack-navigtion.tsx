import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../screens/home'

const AppStackNaviagation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppStackNaviagation
