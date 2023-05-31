import {useState,useCallback} from 'react'
import { Box, HStack, Pressable,Center, Icon, Text } from 'native-base'
import { MaterialCommunityIcons,MaterialIcons,Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer'

interface FooterNavProps {
  section: string;
  onTap: (routeName: string) => void;
}
const Footernav = (footerNavProps:FooterNavProps) => {
  const { section, onTap } = footerNavProps;
  const navigation = useNavigation<DrawerNavigationProp<{}>>()

  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])

  return (
        <Box position="absolute"
          bottom={0}
          left={0}
          right={0}
          bg="white" 
          safeAreaTop="0"
          shadow={6}
          h={24}
        >
          <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
            <Pressable cursor="pointer" opacity={section === "Main" ? 1 : 0.5} py="3" flex={1} onPress={() => onTap("Main")}>
              <Center>
                <Icon mb="1" as={<Ionicons name={section === "Main" ? 'home' : 'home-outline'} />} color={section === "Main" ? 'murphy.emeraldDark': 'murphy.gray'} size="lg" />
                <Text color={section === "Main" ? 'murphy.emeraldDark': 'murphy.gray'} fontSize="12">
                  Principal
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={section === "Appointments" ? 1 : 0.5} py="2" flex={1} onPress={() => onTap("Appointments")}>
              <Center>
                <Icon mb="1" as={<Ionicons name={section === "Appointments" ? 'calendar' : 'calendar-outline'} />} color={section === "Appointments" ? 'murphy.emeraldDark': 'murphy.gray'} size="lg" />
                <Text color={section === "Appointments" ? 'murphy.emeraldDark': 'murphy.gray'} fontSize="12">
                  Citas
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={section === "Chats" ? 1 : 0.6} py="2" flex={1} onPress={() => onTap("Chats")}>
              <Center>
                <Icon mb="1" as={<Ionicons name={section === "Chats" ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'} />} color={section === "Chats" ? 'murphy.emeraldDark': 'murphy.gray'} size="lg" />
                <Text color={section === "Chats" ? 'murphy.emeraldDark': 'murphy.gray'} fontSize="12">
                  Chats
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={section === "Profile" ? 1 : 0.5} py="2" flex={1} onPress={handlePressMenuButton}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={section === "Profile" ? 'account' : 'account-outline'} />} color={section === "Profile" ? 'murphy.emeraldDark': 'murphy.gray'} size="lg" />
                <Text color={section === "Profile" ? 'murphy.emeraldDark': 'murphy.gray'} fontSize="12">
                  Perfil 
                </Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
  );
}

export default Footernav; 
