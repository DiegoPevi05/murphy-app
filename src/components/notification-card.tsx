import React,{useCallback} from 'react'
import {Box, Image, Icon,Text, IButtonProps,HStack,Pressable } from 'native-base'
import { View } from 'moti'
import { FontAwesome,Feather} from '@expo/vector-icons'
import Button from './shared/button';
import {NotificationData} from '../interfaces/global';
import { makeStyledComponent } from '../utils/styled'
import SwipableView from './shared/swipable-view';
import { PanGestureHandlerProps } from 'react-native-gesture-handler'


const StyledView = makeStyledComponent(View)


interface NotificationCardProps extends NotificationData, Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  onRemove:(id:string) => void;
}

const NotificationCard = (notificationCardProps: NotificationCardProps) => {

  const {simultaneousHandlers,onRemove,id,text,timestamp} = notificationCardProps;

  const handleOnRemove = useCallback(()=>{
    onRemove(id)
  },[id])

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

  const date = new Date(timestamp);
  const currentDate = formatDate(date);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return (

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
      <SwipableView
        simultaneousHandlers={simultaneousHandlers}
        SingleAction={true}
        backView={
          <HStack h="24" my="2">
            <Pressable w="full" onPress={handleOnRemove}>
              <Box
                w="100%"
                h="full"
                bg="red.500"
                pr="7.5%"
                alignItems="flex-end"
                justifyContent="center"
                borderRightRadius="20"
              >
                <Icon color="white" as={<Feather name="trash-2" />} size="2xl" />
              </Box>
            </Pressable>
            </HStack>
        }
      >
      <Box
        id={"Doctor_ID_"+id}
        h="24"
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        borderRadius="2xl"
        bg="murphy.emeraldLight"
        px={4}
        my={2}
      >
        <Box display="flex" w="20%" gap="0.5" flexDirection="column">
        <Icon
            as={FontAwesome}
            name="bell-o"
            size={10}
            color="murphy.emeraldDark"
        />
        </Box>
        <Box display="flex" w="80%" flexDirection="column">
          <Box display="flex" h="auto" w="full" 
            flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
              {currentDate}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {`${formattedHours}:${formattedMinutes}`}
            </Text>
          </Box>
          <Text fontSize="sm" color="gray.600">
            {text}
          </Text>
        </Box>
      </Box>
      </SwipableView>
    </StyledView>
  )
}

export default NotificationCard
