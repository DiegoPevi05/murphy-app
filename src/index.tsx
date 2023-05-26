import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main'
import Sidebar from './components/shared/sidebar'

const Drawer = createDrawerNavigator()

const App = () => {

  return (
      <Drawer.Navigator
        initialRouteName={"Main"}
        drawerContent={props => <Sidebar {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'back',
          overlayColor: '#00000000'
        }}
      >
        <Drawer.Screen 
            name="Main" 
            component={MainScreen}/>
      </Drawer.Navigator>
  )

}

export default App
