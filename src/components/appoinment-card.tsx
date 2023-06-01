import React,{useCallback} from 'react'
import {HStack, Pressable, Box, Image, Icon,Text, IButtonProps, IconButton } from 'native-base'
import { View } from 'moti'
import { Ionicons, Feather} from '@expo/vector-icons'
import Button from './shared/button';
import {Appoinment} from '../interfaces/global';
import { makeStyledComponent } from '../utils/styled';
import SwipableView from './shared/swipable-view';
import { PanGestureHandlerProps } from 'react-native-gesture-handler'

const StyledView = makeStyledComponent(View)

interface AppointmentCardProps extends Appoinment, Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  onPressChatDoctor: (doctorId: number) => void;
  onEditing:() => void;
  onRemove:(id:number) => void;
}

const AppointmentCard = (doctorCardProps: AppointmentCardProps) => {

  const {simultaneousHandlers,id,doctorId,specialty,doctorName,timestamp,onPressChatDoctor,onEditing,onRemove} = doctorCardProps;

  const appointmentDate = new Date(timestamp);
  const hours = appointmentDate.getHours();
  const minutes = appointmentDate.getMinutes();
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const year = appointmentDate.getFullYear();
  const month = String(appointmentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(appointmentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;


  const handlePressDoctorChat = useCallback(() => {
    onPressChatDoctor(doctorId);
  },[doctorId])

  const handleOnRemove = useCallback(()=>{
    onRemove(id)
  },[id])

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
        backView={
          <HStack h="48" my="2">
            <Pressable w="80%" onPress={onEditing}>
                <Box
                  w="100%"
                  h="full"
                  alignItems="flex-end"
                  justifyContent="center"
                  pr="7.5%"
                  bg="murphy.emeraldDark"

                >
                <Icon color="white" as={<Feather name="edit" />} size="2xl" />
              </Box>
            </Pressable>
            <Pressable w="20%" onPress={handleOnRemove}>
              <Box
                w="100%"
                h="full"
                bg="red.500"
                alignItems="center"
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
          h="48"
          w="full"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          borderRadius="2xl"
          bg="murphy.emeraldLight"
          gap={2}
          px={4}
          my={2}
        >
          <Box display="flex" w="60%" gap="0.5" flexDirection="column">
            <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
              id de la Cita: {id}
            </Text>
            <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
              {doctorName}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Fecha de cita: {formattedDate}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Hora de cita: {`${formattedHours}:${formattedMinutes}`}
            </Text>
            <Text fontSize="sm" color="murphy.gray">
              Especilidad:{specialty}
            </Text>
          </Box>
          <Box display="flex" w="40%" gap="0.5" flexDirection="column" justifyContent="center" alignItems="center">
            <Button
              size="md"
              w={20}
              h={20}
              rounded="full"
              bg="murphy.emeraldLight"
              px={0} 
              py={0} 
              _pressed={{
                bg: 'murphy.emerald',
              }}
              onPress={handlePressDoctorChat}
            >
            <Icon
              as={Ionicons}
              name="chatbox-ellipses"
              size={12}
              color="murphy.emeraldDark"
            />
            </Button>
          </Box>
        </Box>
      </SwipableView>
    </StyledView>
  )
}

export default AppointmentCard
