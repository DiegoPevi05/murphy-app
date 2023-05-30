import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
/******************COMPONENTS*******************************/
import {
  Box,
  IconButton,
  Text,
  Image
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
import {extractAllDates, retrieveTimesByDate} from '../utils/helper';

const doctorTimeSheets:DoctorTimeSheets = {
  id:1,
  doctorId:1,
  dates:[
    {
      date:"2021-10-01",
      times:["08:00","09:00","09:30","11:00","11:30"]
    },
    {
      date:"2021-10-02",
      times:["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30"]
    }
  ]
}


const StyledScrollView = makeStyledComponent(ScrollView)

export default function AppoinmentsDoctorScreen({route,navigation}:any){

  const { doctor } = route.params;
  const [selectedDate, setSelectedDate] = useState<string|undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string|undefined>(undefined);
  const [dates,setDates] = useState<string[]>([]);
  const [times,setTimes] = useState<string[]>([]);

  useEffect(()=>{
    setSelectedDate(doctorTimeSheets.dates[0].date);
    setSelectedTime(doctorTimeSheets.dates[0].times[0]);
    setDates(extractAllDates(doctorTimeSheets.dates))
    setTimes(retrieveTimesByDate(doctorTimeSheets.dates[0].date,doctorTimeSheets.dates))
  },[])


  const handlePressGoBack = useCallback(() => {
    navigation.navigate({name:'Main'});
  },[])

  const handlePressGoPayment = useCallback(() => {
    navigation.navigate({name:'PaymentAppointment',params:{doctor,time:selectedTime,date:selectedDate}});
  },[])

  useEffect(()=>{
    const newtimes = retrieveTimesByDate(selectedDate,doctorTimeSheets.dates);
    setTimes(newtimes);
    setSelectedTime(newtimes[0]);
  },[selectedDate])

  const handlePressSelectDate = useCallback((date:string)=>{
    setSelectedDate(date);
  },[])

  const handlePressSelectTime = useCallback((time:string)=>{
    setSelectedTime(time); 
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
        <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold">Citas</Text>
      </Box>
      <Box
        id={"Doctor_ID_"+doctor.id}
        h="32"
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        bg="murphy.emeraldLight"
        gap={2}
        px={4}
        my={2}
      >
        <Image
          source={{
            uri: doctor.image
          }}
          alt={"Doctor_Image_"+doctor.id}
          resizeMode="cover"
          h="full"
          w="20%"
          rounded="full"
        />
        <Box display="flex" w="80%" gap="0.5" flexDirection="column">
          <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
            {doctor.name}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {doctor.description}
          </Text>
          <Text fontSize="sm" color="murphy.gray">
            Especilidad:{doctor.speciality}
          </Text>
          <Text fontSize="md" color="murphy.emeraldDark">
            Pago : ${doctor.cost}.00
          </Text>
        </Box>
      </Box>

      <Text color="murphy.gray" fontSize="lg" fontWeight="bold" px={4}>Detalles</Text>
      <Text color="murphy.gray" fontSize="sm" px={4}>{doctor.details}</Text>
      <Box
        h={10}
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <Text color="murphy.gray" fontSize="lg" fontWeight="bold">Horarios de Citas</Text>
        <Text color="murphy.emeraldDark"></Text>
      </Box>

      <Box h={16}>
        <StyledScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={refScrollView} 
          w="full" 
          px="4">
          <AnimatePresence>
            {times.map((time,index)=>(
              <Button
                key={"DateDoctor_"+index}
                mr={2}
                active={selectedTime === time ? true : false}
                onPress={()=>handlePressSelectTime(time)}
              >
                {time}
              </Button>
            ))}
          </AnimatePresence>
        </StyledScrollView>
      </Box>

      <Box
        h={10}
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <Text color="murphy.gray" fontSize="lg" fontWeight="bold">Fechas Disponibles</Text>
        <Text color="murphy.emeraldDark"></Text>
      </Box>
      <Box h={16}>
        <StyledScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={refScrollView} 
          w="full" 
          px="4">
          <AnimatePresence>
            {dates.map((date,index)=>(
              <Button
                key={"DateDoctor_"+index}
                mr={2}
                active={selectedDate === date ? true : false}
                onPress={()=>handlePressSelectDate(date)}
              >
                {date}
              </Button>
            ))}
          </AnimatePresence>
        </StyledScrollView>
      </Box>
      <Box alignItems="center">
        <Button w={64} h={12} _text={{ fontSize: 16, fontWeight:"bold" }} active={true} onPress={handlePressGoPayment}>Realizar una cita</Button>
      </Box>
    </AnimatedColorBox>
  )
}
