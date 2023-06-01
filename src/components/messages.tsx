import * as React from 'react';
import {useState,useEffect,useCallback,useRef} from 'react';
import {Message} from '../interfaces/global';
import { View } from 'moti'
import { makeStyledComponent } from '../utils/styled'
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

const StyledView = makeStyledComponent(View)

interface MessageProps {
  initialMessages: Message[];
  sessionID: string;
}
const Messages = (messageProps:MessageProps) => {

  const {initialMessages, sessionID} = messageProps;

  const formatDate = (date: Date): string => {
    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return 'Hoy';
    } else {
      return date.toLocaleDateString();
    }
  };

  var firstDate = null;

  return(
    <Box 
      w="100%"
      bg="white" 
      safeAreaTop="0"

    >
      {initialMessages.map((message, index) => {
        const currentUser = message.senderId === sessionID  ? true : false;
        const date = new Date(message.timestamp);
        const currentDate = formatDate(date);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        var shouldRenderSeparator = false;
        if(firstDate === null){
          shouldRenderSeparator = true;
          firstDate = currentDate;
        }else if(firstDate !== currentDate){
          shouldRenderSeparator = true;
          firstDate = currentDate;
        }

        return(
          <Box key={`message-${index}`}>
          {shouldRenderSeparator && (
            <Box key={`separator-${index}`} my="2" display="flex" flexDirection="row" justifyContent="center" alignItems="center" >
              <Text color="murphy.gray" textAlign="center" fontSize={12}>
                {currentDate}
              </Text>
            </Box>
          )}
          <StyledView
            w="full"
            from={{
              opacity: 0,
              scale: 0.5,
              tranlateX: 100
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateX: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              translateX: -100
            }}
          >
            <Box 
              w="full" 
              h="auto" 
              display="flex"
              flexDirection={currentUser ? "row-reverse" : "row"}
              my="1"
            >
              <Box 
                w="auto" 
                maxW="80%"
                borderTopRadius="lg"
                borderBottomLeftRadius={currentUser ? "lg" : "none"}
                borderBottomRightRadius={!currentUser ? "lg" : "none"}
                bg="murphy.emeraldDark"
                p="2"
                shadow={4}
              >
                <Text color="white">{message.text}</Text>
                <Text color="white" textAlign={currentUser ? "right" : "left"}>{`${formattedHours}:${formattedMinutes}`}</Text>
              </Box>
            </Box>
          </StyledView>
          </Box>
        )
      })}
    </Box>
  )
};

export default Messages;
