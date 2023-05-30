import {useState} from 'react'
import { Box, HStack, Pressable,Center, Icon, Text } from 'native-base'
import { MaterialCommunityIcons,MaterialIcons,Ionicons} from '@expo/vector-icons'

const Footernav = () => {
  const [selected, setSelected] = useState<number>(3);

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
            <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
              <Center>
                <Icon mb="1" as={<Ionicons name={selected === 0 ? 'home' : 'home-outline'} />} color={selected === 0 ? 'murphy.emeraldDark': 'murphy.gray'} size="lg" />
                <Text color={selected === 0 ? 'murphy.emeraldDark': 'murphy.gray'} fontSize="12">
                  Principal
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
              <Center>
                <Icon mb="1" as={<Ionicons name={selected === 1 ? 'calendar' : 'calendar-outline'} />} color={selected === 1 ? 'murphy.emeraldDark': 'murphy.gray'} size="lg" />
                <Text color={selected === 1 ? 'murphy.emeraldDark': 'murphy.gray'} fontSize="12">
                  Citas
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
              <Center>
                <Icon mb="1" as={<Ionicons name={selected === 2 ? 'document-text' : 'document-text-outline'} />} color={selected === 2 ? 'murphy.emeraldDark': 'murphy.gray'} size="lg" />
                <Text color={selected === 2 ? 'murphy.emeraldDark': 'murphy.gray'} fontSize="12">
                  Historial
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color={selected === 3 ? 'murphy.emeraldDark': 'murphy.gray'} size="lg" />
                <Text color={selected === 3 ? 'murphy.emeraldDark': 'murphy.gray'} fontSize="12">
                  Perfil 
                </Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
  );
}

export default Footernav; 
