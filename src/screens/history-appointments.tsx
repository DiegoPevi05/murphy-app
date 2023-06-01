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
import HistoryCard from '../components/history-card';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Entypo,Ionicons } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled'
import {Appoinment} from '../interfaces/global';

const dataAppointment: Appoinment[] = [
  {
    id: 1,
    doctorId: 101,
    specialty: "Cardiologia",
    doctorName: "Dr. Smith",
    timestamp: 1686478392000
  },
  {
    id: 2,
    doctorId: 102,
    specialty: "Oftalmologia",
    doctorName: "Dr. Johnson",
    timestamp: 1686478392000
  },
  {
    id: 3,
    doctorId: 103,
    specialty: "Pediatria",
    doctorName: "Dr. Davis",
    timestamp: 1686478392000
  }
];

const StyledScrollView = makeStyledComponent(ScrollView)

export default function HistoryAppoinmentsScreen({navigation}:any){

  const [appoinments,setAppoinments] = useState<Appoinment[]>(dataAppointment);
  const handlePressGoBack = useCallback(() => {
    navigation.navigate({name:'Main'});
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
        <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold">Historial Consultas</Text>
      </Box>
      <StyledScrollView flex={1} ref={refScrollView} w="full" px="4">
        <AnimatePresence>
          {appoinments.map((appoinment)=>(
            <HistoryCard
              key={"HistoryCard_"+appoinment.id}
              id={appoinment.id}
              doctorId={appoinment.doctorId}
              specialty={appoinment.specialty}
              doctorName={appoinment.doctorName}
              timestamp={appoinment.timestamp}
            />
          ))}
        </AnimatePresence>
      </StyledScrollView>
    </AnimatedColorBox>
  )
}
