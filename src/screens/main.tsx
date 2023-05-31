import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
/******************COMPONENTS*******************************/
import {
  Box,
  HStack,
  IconButton,
  Icon,
  Avatar,
  Text,
  Badge,
  Pressable,
  useColorModeValue,
  Input
} from 'native-base'

import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import FooterNav from '../components/shared/footernav';
import Button from '../components/shared/button';
import ButtonIcon from '../components/shared/button-icon';
import DoctorCard from '../components/doctor-card';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { AntDesign,FontAwesome,Ionicons } from '@expo/vector-icons'
import { makeStyledComponent } from '../utils/styled'
import {DoctorData} from '../interfaces/global';

const doctorData:DoctorData[] = [
  { id:"2",name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",email:"anythin",description:"Doctor en psicologia", 
    details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",specialty: "Pediatria", rating: 4.3, cost:120 },
    { id:"3",name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",email:"anythin",description:"Doctor en pediatria",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",specialty: "Oftalmologia", rating: 3.2, cost:110 },
    { id:"4",name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",email:"anythin",description:"Doctor en pediatria",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",specialty: "Pediatria", rating: 4.1, cost:100},
    { id:"5",name: "Freedman", image: "https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",email:"anythin",description:"Doctor en pediatria",details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",specialty: "Pediatria", rating: 4.0, cost:130}
]


const StyledScrollView = makeStyledComponent(ScrollView)

export default function MainScreen({navigation}:any){

  const handlePressDoctorList = useCallback((specialty:string) => {
    navigation.navigate({name:'DoctorList', params:{specialty:specialty}});
  },[])

  const handlePressSpeciaList = useCallback(() => {
    navigation.navigate({name:'SpecialtiesList'});
  },[])


  const handlePressDoctorBook = useCallback((doctor:DoctorData) => {
    navigation.navigate({name:'DoctorAppoinment',params:{doctor:doctor}});
  },[])

  const handleFooterNavPress = (routeName: string) => {
    navigation.navigate({name:routeName});
  };

  const refScrollView = useRef(null)

  return(
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('white', 'warmGray.50')}
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
        <Box 
          h="full"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={4}
        >
          <Avatar
            source={require('../assets/images/diegoProfile.jpg')}
            size="md"
          />
          <Text color="murphy.gray" >Diego Peña Vicente</Text>
        </Box>
        <Box
          h="full"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            borderRadius={100}
            _icon={{
              as: FontAwesome,
              name: 'heart-o',
              size: 6,
              color: 'murphy.gray'
            }}
          />
          <Box position="relative">
            <IconButton
              borderRadius={100}
              _icon={{
                as: FontAwesome,
                name: 'bell-o',
                size: 6,
                color: 'murphy.gray'
              }}
            />
            <Badge
              position="absolute"
              top={1}
              end={2}
              bg="red.500"
              borderRadius="full"
              h={4}
              w={4}
            />
          </Box>
        </Box>
      </Box>
      <Box
        h={10}
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        px={4}
        my={4}
      >
        <Input w="100%" bg="gray.100" rounded="lg" h={12} fontSize={16} type="text" 
        InputRightElement={
          <Icon as={<Ionicons name="search" />} size={5} mr="2" color="muted.400" />
        } placeholder="Buscar Doctor" />
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
        <Text color="murphy.gray" fontSize={20} fontWeight="bold">Especialidades</Text>
        <Pressable onPress={handlePressSpeciaList}>
          <Text color="murphy.emeraldDark">Ver Todos</Text>
        </Pressable>
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
        <ButtonIcon icon="more-horizontal" iconLibrary="Feather" label="Otros"  onPress={handlePressSpeciaList}/>
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
        <Text color="murphy.gray" fontSize={16} fontWeight="bold">Nuestros Especialistas</Text>
        <Pressable onPress={()=>handlePressDoctorList("All")}>
          <Text color="murphy.emeraldDark">Ver Todos</Text>
        </Pressable>
      </Box>

      <StyledScrollView flex={1} ref={refScrollView} w="full" px="4" mb={24}>
        <AnimatePresence>
          {doctorData.map((doctor)=>(
            <DoctorCard
              key={"DoctorCard_"+doctor.id}
              id={doctor.id}
              name={doctor.name}
              image={doctor.image}
              description={doctor.description}
              details={doctor.details}
              specialty={doctor.specialty}
              rating={doctor.rating}
              cost={doctor.cost}
              onPressBookDoctor={handlePressDoctorBook}
            />
          ))}
        </AnimatePresence>
      </StyledScrollView>
      <FooterNav section="Main" onTap={handleFooterNavPress}/>
    </AnimatedColorBox>
  )
}
