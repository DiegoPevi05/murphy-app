import React,{useCallback} from 'react'
import {Box, Image, Icon,Text, IButtonProps, IconButton } from 'native-base'
import { View } from 'moti'
import { FontAwesome,Ionicons,MaterialIcons} from '@expo/vector-icons'
import Button from './shared/button';
import {User} from '../interfaces/global';
import { makeStyledComponent } from '../utils/styled'
import {goToEmail} from '../utils/helper';


const StyledView = makeStyledComponent(View)


interface PreviewChatProps extends User {
  onPressChatDoctor: (id_doctor:string,name:string,image:string) => void
}

const ChatPreview = (previewChatProps: PreviewChatProps) => {

  const {id,name,image,email,onPressChatDoctor} = previewChatProps;

  const handlePressDoctorChat = useCallback(() => {
    onPressChatDoctor(id,name,image);
  },[id,name,image])

  const handleSendEmailDoctor = useCallback(() => {
    goToEmail(email)
  },[email])

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
        justifyContent="space-between"
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
          resizeMode="contain"
          h="20"
          w="20"
          rounded="full"
          borderWidth={2}
          borderColor="murphy.emeraldDark"
        />
        <Box display="flex" w="auto" gap="0.5" flexDirection="column">
          <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
            Doctor: 
          </Text>
          <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
            {name}
          </Text>
          <Button onPress={handleSendEmailDoctor} h={8} w={32} px={2} >
            Enviar Email
          </Button>
        </Box>
        <Box display="flex" w="auto" gap="0.5" flexDirection="column" justifyContent="center" alignItems="center">
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
            onPress={onPressChatDoctor}
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
    </StyledView>
  )
}

export default ChatPreview
