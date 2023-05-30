import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
/******************COMPONENTS*******************************/
import {
  Box,
  IconButton,
  Text,
} from 'native-base'

import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import FooterNav from '../components/shared/footernav';
import DoctorCard from '../components/doctor-card';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Entypo } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled'
import {DoctorData} from '../interfaces/global';

const doctorData:DoctorData[] = [
  { id:1,name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",description:"Doctor en psicologia", 
    details:"anything",speciality: "Pediatria", rating: 4.3, cost:120 },
    { id:2,name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",description:"Doctor en pediatria",details:"anything",speciality: "Oftalmologia", rating: 3.2,cost:100 },
    { id:3,name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",description:"Doctor en pediatria",details:"anything",speciality: "Pediatria", rating: 4.1, cost:80 },
    { id:4,name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",description:"Doctor en pediatria",details:"anything",speciality: "Pediatria", rating: 4.0, cost:50 }
]

const StyledScrollView = makeStyledComponent(ScrollView)

export default function DoctorListScreen({navigation}:any){

  const handlePressGoBack = useCallback(() => {
    navigation.navigate({name:'Main'});
  },[])

  const handlePressDoctorBook = useCallback((doctor:DoctorData) => {
    navigation.navigate({name:'DoctorAppoinment',params:{doctor:doctor}});
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
        <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold">Doctores</Text>
      </Box>
      <StyledScrollView flex={1} ref={refScrollView} w="full" px="4">
        <AnimatePresence>
          {doctorData.map((doctor)=>(
            <DoctorCard
              key={"DoctorCard_"+doctor.id}
              id={doctor.id}
              name={doctor.name}
              image={doctor.image}
              description={doctor.description}
              details={doctor.details}
              speciality={doctor.speciality}
              rating={doctor.rating}
              cost={doctor.cost}
              onPressBookDoctor={handlePressDoctorBook}
            />
          ))}
        </AnimatePresence>
      </StyledScrollView>
    </AnimatedColorBox>
  )
}
