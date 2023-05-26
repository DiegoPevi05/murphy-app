import React, { useCallback,useState } from 'react'
import { Box, IconButton, Select, CheckIcon,useColorModeValue } from 'native-base'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

const NavBar = () => {

  const navigation = useNavigation<DrawerNavigationProp<{}>>()
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])

  return (
    <Box 
      w="full" 
      h={24} 
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      px={4} 
      pt={4}
      bg="blue.500"
    >
      <Box 
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
      >
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: 'menu',
          size: 8,
          color: useColorModeValue('white','white')
        }}
      />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="50%"
        mb="2"
      >
      </Box>
    </Box>
  )
}

export default NavBar
