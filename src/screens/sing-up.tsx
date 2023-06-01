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

interface SignUpFrom {
  name:string;
  email:string;
  password:string;
}

export default function SignUpScreen({route,navigation}:any){

  const toast = useToast();

  const emptySignUpForm = {
    name:'',
    email:'',
    password:''
  }

  const refScrollView = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [form,setForm] = useState<SignUpFrom>(emptySignUpForm);

  const onChangeName = (text:string) => {
    setForm({
      ...form,
      ["name"]: text,
    });

  }

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

  const handleSignUp = async() => {

    if(form.email.length === 0 || form.password.length === 0 || form.name.length === 0){
      showToast("Debes Ingresar todos tus datos");
      return;
    }

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!regex.test(form.password)) {
        showToast("La contraseña debe contener al menos 8 caracteres, una letra, un número y un carácter especial.");
        return;
    }

    try{
      const config = {
        headers: {
          Authorization: "Code of sending data"
        }
      }
      console.log(form)
      showToast("Te llegara a tu correo una confirmación para crear tu cuenta");
      //await axios.post("url",form,config);
      //setForm(emptySignInForm);
    } catch(error){
      showToast("Ocurrio un error enviando el mensaje");
    }   
  } 

  const handleSignUpFacebook = async() => {
    showToast("Registro con Facebook");
  } 

  const handleSignUpGoogle = async() => {
    showToast("Registro con Google");
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
        h={24} 
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="murphy.emeraldDark" fontSize={24} fontWeight="bold">Registro</Text>
      </Box>
      <Text color="murphy.emeraldDark" fontSize={16}>Nombre Completo</Text>
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
          onChangeText={onChangeName}
          placeholder="Ingresa tu nombre completo" 
        />
      </Box>
      <Text color="murphy.emeraldDark" fontSize={16}>Correo Electronico</Text>
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
      <Box w="full" alignItems="center">
        <Button 
          my={4}
          w={64} h={12} 
          _text={{ fontSize: 20, fontWeight:"bold" }} 
          active={true} 
          onPress={handleSignUp}>
          Registrarse
        </Button>
      </Box>
      <Box w="auto" h="auto" display="flex" justifyContent="center"
        alignItems="center" flexDirection="row" my={4} gap={4}>
        <IconButton
          onPress={handleSignUpFacebook}
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
          onPress={handleSignUpGoogle}
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
      <Pressable onPress={handlePressSignIn} w="full" alignItems="center">
        <Text color="murphy.emeraldDark" fontSize={14}>Ya tienes una cuenta? Ingresa</Text>
      </Pressable>
    </AnimatedColorBox>
  )
}
