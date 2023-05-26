import React, { useCallback } from 'react'
import {
  HStack,
  VStack,
  Center,
  Button,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animated-color-box'
import ThemeToggle from './theme-toggle'
import { Feather,Octicons,Entypo } from '@expo/vector-icons'
import MenuButton from './menu-button'
import {useTranslation} from 'react-i18next'

const Sidebar = (props: DrawerContentComponentProps) => {
  const {t} = useTranslation()
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])

  const handlePressMenuBills = useCallback(() => {
    navigation.navigate('Bills')
  }, [navigation])

  const handlePressSignOut = useCallback(() => {
    navigation.navigate('Begin')
  }, [navigation])


  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('lightBlue.100', 'lightBlue.300')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="space-between">
          <IconButton
            onPress={handlePressMenuMain}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('darkBlue.300', 'darkBlue.300')}
            _icon={{
              as: Octicons,
              name: 'gear',
              size: 6,
              color: useColorModeValue('darkBlue.300', 'darkBlue.300')
            }}
            bg={currentRoute === 'MyAccount' ? "blueGray.500" : 'transparent'}
          />
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('darkBlue.300', 'darkBlue.300')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('darkBlue.300', 'darkBlue.300')
            }}
          />
        </HStack>
        <Avatar
          source={require('../../assets/images/diegoProfile.jpg')}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="blueGray.800"
          borderWidth={3}
        />
        <Heading mb={4} size="xl"
          color={useColorModeValue('darkBlue.300', 'darkBlue.600')}
        >
          Diego Peña Vicente
        </Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="check"
          pro={false} 
        >
          {t('Rentals')}
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Bills'}
          onPress={handlePressMenuBills}
          icon="text-document"
          pro={false} 
        >
          {t('Bills')}
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
        <Button
          color={useColorModeValue("white","white")}
          bg={useColorModeValue("red.400","red.400")}
          onPress={handlePressSignOut}>
          {t('Sign Out')}
        </Button>
      </Center>
    </AnimatedColorBox>
  )
}

export default Sidebar
