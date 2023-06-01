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


import { KeyboardAvoidingView, Platform,Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import { MaterialIcons,FontAwesome5,AntDesign } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled';
import Button from '../components/shared/button';

const StyledScrollView = makeStyledComponent(ScrollView)

interface SignInFrom {
  email:string;
  password:string;
}

export default function SignInScreen({route,navigation}:any){

  const toast = useToast();

  const emptySignInForm = {
    email:'',
    password:''
  }

  const refScrollView = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [form,setForm] = useState<SignInFrom>(emptySignInForm);

  const onChangeEmail = (text:string) => {
    setForm({
      ...form,
      ["email"]: text,
    });

  }

  const onChangePassword = (text:string) => {
    setForm({
      ...form,
      ["password"]: text,
    });
  }

  const handleSignIn = async() => {

    if(form.email.length === 0 || form.password.length === 0){
      showToast("Debes escribir tu información de inicio de sesión");
      return;
    }

    try{
      const config = {
        headers: {
          Authorization: "Code of sending data"
        }
      }

      navigation.navigate({name:'Main'});
      //await axios.post("url",form,config);
      //setForm(emptySignInForm);
    } catch(error){
      showToast("Ocurrio un error enviando el mensaje");
    }   
  } 

  const handleSignInFacebook = async() => {
    showToast("Inicio Sesión con Facebook");
  } 

  const handleSignInGoogle = async() => {
    showToast("Inicio Sesión con Google");
  } 

  const handlePressSignUp = useCallback(()=>{
    navigation.navigate({name:'SignUp'});
  })

  const handlePressForgotPassword = useCallback(() => {
    navigation.navigate({name:'ForgotPassword'});
  },[])

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
        <Text color="murphy.emeraldDark" fontSize={32} fontWeight="bold">Bienvenido</Text>
      </Box>
      <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold" mb={4}>Inicia Sesión</Text>
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
      <Text color="murphy.emeraldDark" fontSize={16}>Contraseña</Text>
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
          type={showPassword ? "text" : "password"} 
          onChangeText={onChangePassword}
          InputRightElement={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} 
            size={5} 
            mr="2" 
            color="muted.400" />
          </Pressable>
          } 
          placeholder="Ingresa tu contraseña" 
        />
      </Box>
      <Pressable onPress={handlePressForgotPassword} w="full" alignItems="center" my="4">
        <Text color="murphy.emeraldDark" fontSize={14} >Olvidaste tu Contraseña?</Text>
      </Pressable>
      <Box w="full" alignItems="center">
        <Button 
          w={64} h={12} 
          _text={{ fontSize: 20, fontWeight:"bold" }} 
          active={true} 
          onPress={handleSignIn}>
          Ingresar
        </Button>
      </Box>
      <Box w="auto" h="auto" display="flex" justifyContent="center"
        alignItems="center" flexDirection="row" my={4} gap={4}>
        <IconButton
          onPress={handleSignInFacebook}
          borderRadius={100}
          borderWidth={1}
          borderColor="murphy.emeraldDark"
          _icon={{
            as: FontAwesome5,
            name: 'facebook',
            size: 10,
            color: 'murphy.emeraldDark'
          }}
          _pressed={{
            bg: 'murphy.emeraldDark',
            _icon: {
              color: 'white'
            }
          }}
        />
        <IconButton
          onPress={handleSignInGoogle}
          borderRadius={100}
          borderWidth={1}
          borderColor="murphy.emeraldDark"
          _icon={{
            as: AntDesign,
            name: 'google',
            size: 10,
            color: 'murphy.emeraldDark'
          }}
          _pressed={{
            bg: 'murphy.emeraldDark',
            _icon: {
              color: 'white'
            }
          }}
        />
      </Box>
      <Pressable onPress={handlePressSignUp} w="full" alignItems="center">
        <Text color="murphy.emeraldDark" fontSize={14}>No tienes una cuenta? Registrate</Text>
      </Pressable>
    </AnimatedColorBox>
  )
}
