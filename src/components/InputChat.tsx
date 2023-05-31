import * as React from 'react';
import { StyleSheet } from 'react-native';
import {useState,useEffect,useCallback,useRef} from 'react';
import axios from 'axios';
/******************COMPONENTS*******************************/
import {
  Text,
  Box,
  Input,
  Icon,
  Button,
  useToast
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'; 


interface MessageProps {
  sessionId:string;
  chatId:string;
  message:string;
}

const InputChat = () => {
  const toast = useToast();

  const emptyMessage:MessageProps = {
    sessionId:"1",
    chatId:"1",
    message:""
  }

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [newMessage, setNewMessage] = useState<MessageProps>(emptyMessage);

  const onChangeMessage = (text:string) => {
    setNewMessage({
      ...newMessage,
      ["message"]: text,
    });
  }

  const handleSendMessage = async() => {

    if(newMessage.message.length === 0){
      showToast("Debes escribir un mensaje");
    }

    try{
      const config = {
        headers: {
          Authorization: "Code of sending data"
        }
      }
      console.log(newMessage)
      //await axios.post("url",newMessage,config);
      //setForm(emptyMessage);
    } catch(error){
      showToast("Ocurrio un error enviando el mensaje");
    }   
  } 

  const onFocusChange = () => {
    setIsFocused(true);
  }

  const onBlurChange = () => {
    setIsFocused(false);
  }

  const showToast = (message:string) => {
    toast.show({
      placement: 'top',
      render: () => {
        return <Box bg="murphy.emeraldDark" px="4" py="1" rounded="sm" mt={5}>
                <Text color="white" fontSize={16}>{message}</Text>
              </Box>;
      }
    });
  }

  return(
    <Box 
      style={[styles.inputContainer, isFocused ? styles.focusedInputContainer : styles.blurredInputContainer]}
      bg="white" 
      safeAreaTop="0"
      shadow={6}
      h={12}
    >
      <Input 
        type="text" 
        w="100%" 
        h="100%" 
        py="0" 
        fontSize={14}
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        onChangeText={onChangeMessage}
        InputRightElement={<Button bg="murphy.emeraldDark" rounded="none" w="1/6" h="full" onPress={handleSendMessage}>
          <Icon
            as={Ionicons}
            name="send"
            size={6}
            color="white"
          />
        </Button>} 
        placeholder="Enviar Mensaje" />
    </Box>

  )
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
  focusedInputContainer: {
    marginBottom: 0,
  },
  blurredInputContainer: {
    marginBottom: 20, // replace with your desired margin
  },
});

export default InputChat;
