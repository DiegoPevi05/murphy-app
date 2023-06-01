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

  const handlePressHistory = useCallback(() => {
    navigation.navigate('HistoryAppoinments')
  }, [navigation])

  const handlePressPersonalData = useCallback(() => {
    navigation.navigate('Personal Data')
  }, [navigation])

  const handlePressSettings = useCallback(() => {
    navigation.navigate('Settings')
  }, [navigation])

  const handlePressHep = useCallback(() => {
    navigation.navigate('Help')
  }, [navigation])

  const handlePressSignOut = useCallback(() => {
    navigation.navigate('SignIn')
  }, [navigation])


  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg="murphy.emeraldLight"
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="space-between">
          <Avatar
            source={require('../../assets/images/diegoProfile.jpg')}
            size="xl"
            borderRadius={100}
            mb={6}
            borderColor="murphy.emeraldDark"
            borderWidth={3}
          />
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor="murphy.emeraldDark"
            h={10}
            w={10}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: 'murphy.emeraldDark',
            }}
          />
        </HStack>
        <Heading mb={4} size="xl"
          color={"murphy.emeraldDark"}
        >
          Diego Peña Vicente
        </Heading>
        <MenuButton
          active={currentRoute === 'History'}
          onPress={handlePressHistory}
          iconLibrary="Entypo"
          icon="text-document"
          pro={false} 
        >
          Historial de Citas
        </MenuButton>

        <MenuButton
          active={currentRoute === 'PersonalData'}
          onPress={handlePressPersonalData}
          iconLibrary="AntDesign"
          icon="user"
          pro={false} 
        >
          Información Personal
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Settings'}
          onPress={handlePressSettings}
          iconLibrary="FontAwesome"
          icon="gear"
          pro={false} 
        >
          Configuración
        </MenuButton>
        <MenuButton
          active={currentRoute === 'Help'}
          onPress={handlePressHep}
          iconLibrary="Entypo"
          icon="help"
          pro={false} 
        >
          Ayuda
        </MenuButton>
        <MenuButton
          active={true}
          onPress={handlePressSignOut}
          iconLibrary="Ionicons"
          icon="close-circle"
          pro={false} 
        >
          Cerrar Sesión
        </MenuButton>
      </VStack>
    </AnimatedColorBox>
  )
}

export default Sidebar
