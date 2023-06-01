import React,{useCallback} from 'react'
import {HStack, Pressable, Box, Image, Icon,Text, IButtonProps, IconButton } from 'native-base'
import { View } from 'moti'
import { Ionicons, Feather} from '@expo/vector-icons'
import Button from './shared/button';
import {Appoinment} from '../interfaces/global';
import { makeStyledComponent } from '../utils/styled';

const StyledView = makeStyledComponent(View)


const HistoryCard = (doctorCardProps: Appoinment) => {

  const {id,doctorId,specialty,doctorName,timestamp} = doctorCardProps;

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
        <Box
          id={"Doctor_ID_"+id}
          h="32"
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
          <Box display="flex" w="full" gap="0.5" flexDirection="column">
            <Box display="flex" w="full" flexDirection="row" justifyContent="space-between">
              <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
                id de la Cita: {id}
              </Text>
              <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
                {doctorName}
              </Text>
            </Box>
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
        </Box>
    </StyledView>
  )
}

export default HistoryCard
