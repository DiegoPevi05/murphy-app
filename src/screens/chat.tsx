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
  Center,
  Image
} from 'native-base'


import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import { Entypo,Ionicons } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled'
import {Chat,Message} from '../interfaces/global';
import InputChat from '../components/InputChat';

const StyledScrollView = makeStyledComponent(ScrollView)

const chatData: Chat = {
  id: "1",
  messages: [
    {
      id: "1",
      senderId: "1",
      receiverId: "2",
      text: "Hola, ¿cómo estás?",
      timestamp: 1622457600000, // 31 May 2023 00:00:00 GMT
    },
    {
      id: "2",
      senderId: "2",
      receiverId: "1",
      text: "Hola, estoy bien. ¿Y tú?",
      timestamp: 1622457660000, // 31 May 2023 00:01:00 GMT
    },
    {
      id: "3",
      senderId: "1",
      receiverId: "2",
      text: "Estoy bien, gracias. ¿Qué estás haciendo?",
      timestamp: 1622457720000, // 31 May 2023 00:02:00 GMT
    },
    {
      id: "4",
      senderId: "2",
      receiverId: "1",
      text: "Estoy trabajando en un proyecto. ¿Y tú?",
      timestamp: 1622457780000, // 31 May 2023 00:03:00 GMT
    },
  ],
};

export default function ChatScreen({route,navigation}:any){

  const { id_chat, id_doctor,name,image } = route.params;
  const sessionID = "1";
  const [messages,setMessages] = useState<Message[]>(chatData.messages);

  const refScrollView = useRef(null);

  const handlePressGoBack = useCallback(() => {
    navigation.navigate({name:'Chats'});
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
        <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold">{name}</Text>
        <Image
          source={{
            uri: image
          }}
          alt={"Doctor_Image_"+id_doctor}
          resizeMode="contain"
          h="12"
          w="12"
          rounded="full"
          borderWidth={2}
          borderColor="murphy.emeraldDark"
        />
      </Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        style={{ width: '100%', position: 'absolute', bottom: 0 }}
      >
        <InputChat/>
      </KeyboardAvoidingView>
    </AnimatedColorBox>
  )
}
