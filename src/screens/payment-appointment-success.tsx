import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
import {
  Box,
  Icon,
  Text,
} from 'native-base'

import AnimatedColorBox from '../components/shared/animated-color-box'
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../components/shared/button';

export default function PaymentAppointmentScreenSuccess({route,navigation}:any){

  const { doctor } = route.params;

  const handlePressGoMain = useCallback(() => {
    navigation.navigate({name:'Main'});
  },[])

  return(
    <AnimatedColorBox
      flex={1}
      bg='white'
      w="full"
    >
      <Box
        id={"PaymentCard_"+doctor.id}
        h="full"
        w="full"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        px={4}
        my={2}
      >
        <Icon as={AntDesign} name="checkcircle" size={32} color="murphy.emeraldDark"/>
        <Text fontSize={40} color="murphy.emeraldDark" fontWeight="bold">
          Felicidades
        </Text>
        <Text fontSize="sm" color="murphy.emeraldDark" fontWeight="bold">
          Tu Pago ha sido exitoso
        </Text>
        <Box alignItems="center">
          <Button w={64} h={12} _text={{ fontSize: 20, fontWeight:"bold" }} active={true} onPress={handlePressGoMain}>Regresar</Button>
        </Box>
      </Box>
    </AnimatedColorBox>
  )
}
