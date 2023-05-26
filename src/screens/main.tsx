import * as React from 'react';
import {useState,useEffect,useCallback} from 'react';
/******************COMPONENTS*******************************/
import {
  VStack,
  Text,
  useColorModeValue,
} from 'native-base'
import AnimatedColorBox from '../components/shared/animated-color-box'
import NavBar from '../components/shared/navbar';
import {useTranslation} from 'react-i18next'

export default function MainScreen({navigation}:any){

  const {t} = useTranslation();
  return(
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('white', 'warmGray.50')}
      w="full"
    >
      <VStack 
        w="full"
        h="full"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="murphy.emeraldDark">Aqui comienza la historia de murphy</Text>
      </VStack>
    </AnimatedColorBox>
  )
}
