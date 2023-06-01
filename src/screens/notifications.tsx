import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
/******************COMPONENTS*******************************/
import {
  Box,
  IconButton,
  Text,
  Input,
  Icon
} from 'native-base'

import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import FooterNav from '../components/shared/footernav';
import NotificationCard from '../components/notification-card';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Entypo,Ionicons } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled'
import {NotificationData} from '../interfaces/global';


const StyledScrollView = makeStyledComponent(ScrollView)

export default function NotificationScreen({route,navigation}:any){

  const {notificationData} = route.params;
  const [notifications,setNotifications] = useState<NotificationData[]>(notificationData);
  const handlePressGoBack = useCallback(() => {
    navigation.navigate({name:'Main'});
  },[])

  const handleRemoveNotification = useCallback((idNotification:string)=> {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== idNotification));
  },[])

  const refScrollView = useRef(null)

  return(
    <AnimatedColorBox
      flex={1}
      bg='white'
      w="full"
    >
      <Box 
        w="full" 
        h={32} 
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4} 
        pt={10}
      >
        <IconButton
          onPress={handlePressGoBack}
          borderRadius={100}
          _icon={{
            as: Entypo,
            name: 'chevron-left',
            size: 8,
            color: 'murphy.gray'
          }}
        />
        <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold">Notificaciones</Text>
      </Box>
      <StyledScrollView flex={1} ref={refScrollView} w="full" px="4">
        <AnimatePresence>
          {notifications.map((notification)=>(
            <NotificationCard
              key={"NotificationCard_"+notification.id}
              simultaneousHandlers={refScrollView}
              onRemove={handleRemoveNotification}
              id={notification.id}
              text={notification.text}
              timestamp={notification.timestamp}
            />
          ))}
        </AnimatePresence>
      </StyledScrollView>
    </AnimatedColorBox>
  )
}
