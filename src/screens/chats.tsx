import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
/******************COMPONENTS*******************************/
import {
  Box,
  IconButton,
  Text,
  Input,
  Icon,
  Button,
  AlertDialog,
  Center
} from 'native-base'

import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import FooterNav from '../components/shared/footernav';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Entypo,Ionicons } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled'
import {Chat, User} from '../interfaces/global';
import ChatPreview from '../components/chat-preview';

const StyledScrollView = makeStyledComponent(ScrollView)

const myDoctors:User[] = [
  {
    id:"2",
    name:'Dr. John Doe',
    image:"https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png",
    email:'diego10azul@hotmail.com'
  }
]

export default function ChatsScreen({navigation}:any){

  const [doctorsAvailable,setDoctorsAvailable] = useState<User[]>(myDoctors);
  const refScrollView = useRef(null);

  const handlePressGoBack = useCallback(() => {
    navigation.navigate({name:'Main'});
  },[])

  const handleFooterNavPress = (routeName: string) => {
    navigation.navigate({name:routeName});
  };
  
  const handlePressOpenChat = useCallback((id_doctor:string,name:string,image:string) => {
    //con el doctorID y el userID debo hallar el chatID
    navigation.navigate({name:'Chat', params:{ id_chat:"1",id_doctor:"1",name:'Dr. John Doe', image:"https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Images.png"}});
  },[])

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
        <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold">Mensajes</Text>
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
        <Text color="murphy.gray" fontSize={16} fontWeight="bold">Todos tus Mensajes</Text>
      </Box>
      <StyledScrollView flex={1} ref={refScrollView} w="full" px="4" mb={24}>
        <AnimatePresence>
          {doctorsAvailable.map((doctor)=>(
            <ChatPreview
              key={"chat_"+doctor.id}
              id={doctor.id}
              name={doctor.name}
              image={doctor.image}
              email={doctor.email}
              onPressChatDoctor={handlePressOpenChat}
            />
          ))}
        </AnimatePresence>
      </StyledScrollView>
      <FooterNav section="Chats" onTap={handleFooterNavPress}/>
    </AnimatedColorBox>
  )
}
