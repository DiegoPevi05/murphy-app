import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main';
import DoctorListScreen from './screens/doctors-list';
import DoctorAppoinmentScreen from './screens/appointments-doctor';
import PaymentAppointmentScreen from './screens/payment-appointment';
import PaymentAppointmentScreenSuccess from './screens/payment-appointment-success';
import PaymentAppointmentScreenError from './screens/payment-appointment-error';
import Sidebar from './components/shared/sidebar';

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
        <Drawer.Screen 
            name="DoctorList" 
            component={DoctorListScreen}/>
        <Drawer.Screen 
            name="DoctorAppoinment" 
            component={DoctorAppoinmentScreen}/>
        <Drawer.Screen 
            name="PaymentAppointment" 
            component={PaymentAppointmentScreen}/>
        <Drawer.Screen 
            name="PaymentAppointmentSuccess" 
            component={PaymentAppointmentScreenSuccess}/>
        <Drawer.Screen 
            name="PaymentAppointmentError" 
            component={PaymentAppointmentScreenError}/>
      </Drawer.Navigator>
  )

}

export default App
