import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
/******************COMPONENTS*******************************/
import {
  Box,
  IconButton,
  Text,
  Image,
  VStack,
  Input
} from 'native-base'

import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import FooterNav from '../components/shared/footernav';
import DoctorCard from '../components/doctor-card';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Entypo } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled';
import Button from '../components/shared/button';
import {DoctorData,DoctorTimeSheets} from '../interfaces/global';


const StyledScrollView = makeStyledComponent(ScrollView)

export default function PaymentAppointmentScreen({route,navigation}:any){

  const { doctor,time,date } = route.params;

  const handlePressDoctorBook = useCallback(() => {
    navigation.navigate({name:'DoctorAppoinment',params:{doctor:doctor}});
  },[])

  const hanldePressGoSuccess = useCallback(()=> {
    navigation.navigate({name:'PaymentAppointmentSuccess',params:{doctor:doctor}});
  })

  const hanldePressGoError = useCallback(()=> {
    navigation.navigate({name:'PaymentAppointmentError',params:{doctor:doctor}});
  })

  return(
    <AnimatedColorBox
      flex={1}
      bg='murphy.emeraldDark'
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
          onPress={handlePressDoctorBook}
          borderRadius={100}
          _icon={{
            as: Entypo,
            name: 'chevron-left',
            size: 8,
            color: 'white'
          }}
        />
        <Text color="white" fontSize={20} fontWeight="bold">Pago</Text>
      </Box>
      <Box
        id={"PaymentCard_"+doctor.id}
        h={64}
        w="full"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        px={4}
        my={2}
      >
        <Text fontSize={40} color="white" fontWeight="bold">
          ${doctor.cost}.00
        </Text>
        <Text fontSize="sm" color="white" fontWeight="bold">
          Consulta con el Doctor : {doctor.name}
        </Text>
        <Text fontSize="sm" color="white" fontWeight="bold">
          Especialidad : {doctor.speciality}
        </Text>
        <Text fontSize="sm" color="white" fontWeight="bold">
          Fecha : {date} 
        </Text>
        <Text fontSize="sm" color="white" fontWeight="bold">
          Hora : {time} 
        </Text>
      </Box>
      <Box
        id="PaymentForm"
        w="full"
        h="full"
        bg="white"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        px={4}
        gap={4}
        py={4}
      >
        <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
          Detalles del pago
        </Text>
        <Text fontSize="sm" color="murphy.emeraldDark" fontWeight="bold">
          Numero de Tarjeta
        </Text>
        <Input placeholder="Numero de Tarjeta"  w="100%" />
        <Box 
          w="full"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          gap={2}
        >
          <Box w="50%" display="flex" flexDirection="column" h="auto">
            <Text fontSize="sm" color="murphy.emeraldDark" fontWeight="bold">
              Fecha de Expiración
            </Text>
            <Input placeholder="Fecha de Expiración" w="100%" />
          </Box>
          <Box w="50%" display="flex" flexDirection="column" h="auto">
            <Text fontSize="sm" color="murphy.emeraldDark" fontWeight="bold">
              CVV
            </Text>
            <Input placeholder="CVV" w="100%" />
          </Box>
        </Box>
        <Text fontSize="sm" color="murphy.emeraldDark" fontWeight="bold">
          Nombre en la tarjeta
        </Text>
        <Input placeholder="Nombre en la tarjeta"  w="100%" />
        <Box alignItems="center">
          <Button w={64} h={12} _text={{ fontSize: 16, fontWeight:"bold" }} active={true} onPress={hanldePressGoError}>Realizar una cita</Button>
        </Box>
      </Box>

    </AnimatedColorBox>
  )
}
