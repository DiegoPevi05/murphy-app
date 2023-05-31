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
import DoctorCard from '../components/doctor-card';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Entypo,Ionicons } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled'
import ButtonIcon from '../components/shared/button-icon';
import {DoctorData} from '../interfaces/global';

const doctorData:DoctorData[] = [
  { id:"1",name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",email:"anything",description:"Doctor en psicologia", 
    details:"anything",specialty: "Pediatria", rating: 4.3, cost:120 },
    { id:"2",name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",email:"anything",description:"Doctor en pediatria",details:"anything",specialty: "Oftalmologia", rating: 3.2,cost:100 },
    { id:"3",name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",email:"anything",description:"Doctor en pediatria",details:"anything",specialty: "Pediatria", rating: 4.1, cost:80 },
    { id:"4",name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",email:"anything",description:"Doctor en pediatria",details:"anything",specialty: "Pediatria", rating: 4.0, cost:50 }
]

const StyledScrollView = makeStyledComponent(ScrollView)

export default function SpecialtiesListScreen({navigation}:any){

  const handlePressGoBack = useCallback(() => {
    navigation.navigate({name:'Main'});
  },[])

  const handlePressDoctorList = useCallback((specialty:string) => {
    navigation.navigate({name:'DoctorList', params:{specialty:specialty}});
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
        <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold">Especialidades</Text>
      </Box>
      <Box
        h="auto" // Set the desired height
        w="full"
        display="flex"
        flexDirection="row"
        flexWrap="wrap" // Wrap the items
        justifyContent="space-around"
        alignItems="center"
        gap="4"
        px={4}
      >
        <ButtonIcon icon="briefcase-medical"  label="General" onPress={()=>handlePressDoctorList("General")}/>
        <ButtonIcon icon="brain" iconLibrary="FontAwesome5" label="Neurologia"  onPress={()=>handlePressDoctorList("Neurologia")}/>
        <ButtonIcon icon="leaf" iconLibrary="Entypo" label="Nutricion"  onPress={()=>handlePressDoctorList("Nutricion")}/>
        <ButtonIcon icon="tooth" iconLibrary="FontAwesome5" label="Odontologia"  onPress={()=>handlePressDoctorList("Odontologia")}/>
        <ButtonIcon icon="stethoscope" iconLibrary="FontAwesome"  label="Pediatria"  onPress={()=>handlePressDoctorList("Pediatria")}/>
        <ButtonIcon icon="radiology-box" iconLibrary="MaterialCommunityIcons"  label="Radiologia"  onPress={()=>handlePressDoctorList("Radiologia")}/>
        <ButtonIcon icon="eye" iconLibrary="FontAwesome"  label="Oftalmologia"  onPress={()=>handlePressDoctorList("Oftalmologia")}/>
        <ButtonIcon icon="eye" iconLibrary="FontAwesome"  label="Obstetricia"  onPress={()=>handlePressDoctorList("Obstetricia")}/>
        <ButtonIcon icon="eye" iconLibrary="FontAwesome"  label="Gastrointerologo"  onPress={()=>handlePressDoctorList("Gastrointerologo")}/>
      </Box>
    </AnimatedColorBox>
  )
}
