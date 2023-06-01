import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
/******************COMPONENTS*******************************/
import {
  Box,
  Text,
  Input,
  Icon,
  Center,
  Pressable,
  IconButton,
  useToast
} from 'native-base'


import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import { MaterialIcons,FontAwesome5,AntDesign } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled';
import Button from '../components/shared/button';

const StyledScrollView = makeStyledComponent(ScrollView)


export default function ForgotPasswordScreen({route,navigation}:any){

  const toast = useToast();

  const refScrollView = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState<string>("");

  const onChangeEmail = (text:string) => {
    setEmail(text)
  }

  const handleRestorePassword = async() => {

    if(email.length  === 0){
      showToast("Escribe tu correo electronico");
      return;
    }

    try{
      const config = {
        headers: {
          Authorization: "Code of sending data"
        }
      }
      showToast("Se ha enviado un correo electronico para restablecer tu contraseña");
      //await axios.post("url",email,config);
      //setForm(emptySignInForm);
    } catch(error){
      showToast("Ocurrio un error enviando el mensaje");
    }   
  } 

  const handlePressSignIn = useCallback(()=>{
    navigation.navigate({name:'SignIn'});
  })

  const showToast = (message:string) => {
    toast.show({
      placement: 'top',
      render: () => {
        return <Box bg="murphy.emeraldDark" px="4" mx="4" py="2" rounded="lg" mt={5}>
                <Text color="white" fontSize={16}>{message}</Text>
              </Box>;
      }
    });
  }

  return(
    <AnimatedColorBox
      flex={1}
      bg='white'
      w="full"
      px={6}
      justifyContent="center"
    >
      <Box 
        w="full" 
        h={32} 
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="murphy.emeraldDark" fontSize={24} fontWeight="bold">Recupera tu contraseña</Text>
      </Box>
      <Text color="murphy.emeraldDark" fontSize={16}>Correo electronico</Text>
      <Box
        h={10}
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        my={4}
      >
        <Input 
          w="100%" 
          bg="gray.100" 
          rounded="lg" 
          h={12} 
          fontSize={16} 
          type="text" 
          onChangeText={onChangeEmail}
          placeholder="Ingresa tu Correo Electronico" 
        />
      </Box>
      <Box w="full" alignItems="center" my={4}>
        <Button 
          w={64} h={12} 
          _text={{ fontSize: 16, fontWeight:"bold" }} 
          active={true} 
          onPress={handleRestorePassword }>
          Recuperar Contraseña
        </Button>
      </Box>
      <Pressable onPress={handlePressSignIn} w="full" alignItems="center">
        <Text color="murphy.emeraldDark" fontSize={14}>Tienes cuenta? Ingresa</Text>
      </Pressable>
    </AnimatedColorBox>
  )
}
