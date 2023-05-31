import React,{useCallback} from 'react'
import {Box, Image, Icon,Text, IButtonProps, IconButton } from 'native-base'
import { View } from 'moti'
import { FontAwesome} from '@expo/vector-icons'
import Button from './shared/button';
import {DoctorData} from '../interfaces/global';
import { makeStyledComponent } from '../utils/styled'


const StyledView = makeStyledComponent(View)

interface DoctorCardProps extends DoctorCard {
  onPressBookDoctor: (item: number) => void
}

const DoctorCard = (doctorCardProps: DoctorData) => {

  const {id,name,cost,image,description,details,specialty,rating,onPressBookDoctor} = doctorCardProps;

  const handlePressDoctorBook = useCallback(() => {
    onPressBookDoctor({id,name,cost,image,description,details,specialty,rating});
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
        <Image
          source={{
            uri: image
          }}
          alt={"Doctor_Image_"+id}
          resizeMode="cover"
          h="full"
          w="20%"
          rounded="full"
        />
        <Box display="flex" w="60%" gap="0.5" flexDirection="column">
          <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
          <Text fontSize="sm" color="murphy.gray">
            Especilidad:{specialty}
          </Text>
          <Button onPress={handlePressDoctorBook} h={8} >Buscar Cita</Button>
        </Box>
        <Box display="flex" h="full" w="20%" flexDirection="column" justifyContent="space-between">
          <IconButton
            borderRadius={50}
            _icon={{
              as: FontAwesome,
              name: 'heart-o',
              size: 5,
              color: 'murphy.gray'
            }}
          />
          <Box display="flex" flexDirection="row" alignItems="center">
            <IconButton
              borderRadius={50}
              px={1}
              _icon={{
                as: FontAwesome,
                name: 'star-o',
                size: 5,
                color: 'murphy.emeraldDark'
              }}
            />
            <Text color="murphy.emeraldDark">{rating}</Text>
          </Box>
        </Box>
      </Box>
    </StyledView>
  )
}

export default DoctorCard
