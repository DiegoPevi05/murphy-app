import * as React from 'react';
import {useState,useEffect,useCallback,useRef,} from 'react';
/******************COMPONENTS*******************************/
import {
  Box,
  IconButton,
  Text,
  Input,
  Icon,
  Button,
  AlertDialog,
  Center
} from 'native-base'

import { ScrollView } from 'react-native-gesture-handler'
import { AnimatePresence, View } from 'moti'
import AnimatedColorBox from '../components/shared/animated-color-box'
import FooterNav from '../components/shared/footernav';
import Calendar from '../components/calendar';
import AppointmentCard from '../components/appoinment-card';
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Entypo,Ionicons } from '@expo/vector-icons'; 
import { makeStyledComponent } from '../utils/styled'
import {Appoinment} from '../interfaces/global';
import { subMonths,addMonths, format} from 'date-fns';
 



const StyledScrollView = makeStyledComponent(ScrollView)

const dataAppointment: Appoinment[] = [
  {
    id: 1,
    doctorId: 101,
    specialty: "Cardiologia",
    doctorName: "Dr. Smith",
    date: "2023-05-01",
    time: "09:30"
  },
  {
    id: 2,
    doctorId: 102,
    specialty: "Oftalmologia",
    doctorName: "Dr. Johnson",
    date: "2023-06-04",
    time: "10:30"
  },
  {
    id: 3,
    doctorId: 103,
    specialty: "Pediatria",
    doctorName: "Dr. Davis",
    date: "2023-05-07",
    time: "11:30"
  },
  {
    id: 4,
    doctorId: 104,
    specialty: "General",
    doctorName: "Dr. Miller",
    date: "2023-06-10",
    time: "12:30"
  },
  {
    id: 5,
    doctorId: 105,
    specialty: "Cardiologia",
    doctorName: "Dr. Wilson",
    date: "2023-06-13",
    time: "13:30"
  },
  {
    id: 6,
    doctorId: 106,
    specialty: "Oftalmologia",
    doctorName: "Dr. Moore",
    date: "2023-06-16",
    time: "14:30"
  },
  {
    id: 7,
    doctorId: 107,
    specialty: "Pediatria",
    doctorName: "Dr. Taylor",
    date: "2023-06-19",
    time: "15:30"
  },
  {
    id: 8,
    doctorId: 108,
    specialty: "General",
    doctorName: "Dr. Anderson",
    date: "2023-06-22",
    time: "16:30"
  },
  {
    id: 9,
    doctorId: 109,
    specialty: "Cardiologia",
    doctorName: "Dr. Thomas",
    date: "2023-06-25",
    time: "17:30"
  },
  {
    id: 10,
    doctorId: 110,
    specialty: "Oftalmologia",
    doctorName: "Dr. Jackson",
    date: "2023-06-28",
    time: "18:30"
  }
];


export default function AppoinmentsScreen({navigation}:any){

  const refScrollView = useRef(null);
  const cancelRef = useRef(null);

  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState<boolean>(false);
  const onCloseAlertDialog = () => setIsOpenAlertDialog(false);

  const [isOpenEditDialog, setIsOpenEditDialog] = useState<boolean>(false);
  const onCloseEditDialog = () => setIsOpenEditDialog(false);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [AppointmentsMonth,setAppointmentsMonth] = useState<Appoinment[]>([]);

  const prevMonth = () => {
    setCurrentMonth(prevMonth => subMonths(prevMonth, 1));
  }

  const nextMonth = () => {
    setCurrentMonth(nextMonth => addMonths(nextMonth, 1));
  }

  useEffect(()=>{
    setAppointmentsMonth(dataAppointment.filter((appoinment) => appoinment.date.includes(format(currentMonth,'yyyy-MM'))))
  },[currentMonth])

  const handlePressGoBack = useCallback(() => {
    navigation.navigate({name:'Main'});
  },[])

  const handlePressChatDoctor = useCallback(() => {
    navigation.navigate({name:'Chats',params:{ doctorId:doctorId }});
  },[])

  const handleFooterNavPress = (routeName: string) => {
    navigation.navigate({name:routeName});
  };

  const handleEditingAppoinment = useCallback(()=> {
    setIsOpenEditDialog(true)
  },[])

  const handleRemoveAppoinment = useCallback((idAppoinment:number)=> {
    setIsOpenAlertDialog(true);
  },[])

  return(
    <AnimatedColorBox
      flex={1}
      bg='white'
      w="full"
    >
      <Box 
        w="full" 
        h={32} 
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4} 
        pt={10}
      >
        <IconButton
          onPress={handlePressGoBack}
          borderRadius={100}
          _icon={{
            as: Entypo,
            name: 'chevron-left',
            size: 8,
            color: 'murphy.gray'
          }}
        />
        <Text color="murphy.emeraldDark" fontSize={20} fontWeight="bold">Citas</Text>
      </Box>
      <Calendar currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth}/>
      {AppointmentsMonth.length > 0 ? 
        <StyledScrollView flex={1} ref={refScrollView} w="full" px="4" mb={24}>
          <AnimatePresence>
            {AppointmentsMonth.map((appoinment)=>(
              <AppointmentCard
                key={"AppointmentCard"+appoinment.id}
                simultaneousHandlers={refScrollView}
                id={appoinment.id}
                doctorId={appoinment.doctorId}
                specialty={appoinment.specialty}
                doctorName={appoinment.doctorName}
                date={appoinment.date}
                time={appoinment.time}
                onPressChatDoctor={handlePressChatDoctor}
                onEditing={handleEditingAppoinment}
                onRemove={handleRemoveAppoinment}
              />
            ))}
          </AnimatePresence>
        </StyledScrollView>
        :
        <Box
          id={"CardNotDates"}
          h="32"
          w="80%"
          alignSelf="center"
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
          <Box display="flex" w="60%" gap="0.5" flexDirection="column">
            <Text fontSize="md" color="murphy.emeraldDark" fontWeight="bold">
              No tienes citas, Reserva una para que puedas verla aqui.
            </Text>
          </Box>
          <Box display="flex" w="40%" gap="0.5" flexDirection="column" justifyContent="center" alignItems="center">
            <Button
              size="md"
              w={20}
              h={20}
              rounded="full"
              bg="white"
              px={0} 
              py={0} 
              _pressed={{
                bg: 'murphy.emeraldLight',
              }}
              onPress={handlePressGoBack}
            >
            <Icon
              as={Ionicons}
              name="search-outline"
              size={12}
              color="murphy.emeraldDark"
            />
            </Button>
          </Box>
        </Box>
      }
      <FooterNav section="Appointments" onTap={handleFooterNavPress}/>

      <Center>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenEditDialog} onClose={onCloseEditDialog}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Editar Cita</AlertDialog.Header>
            <AlertDialog.Body>
              No se puede borrar cita. Consulta con tu medico a traves del chat para ver su disponibilidad inmediata.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button variant="unstyled" colorScheme="coolGray" onPress={onCloseEditDialog} ref={cancelRef}>
                  Continuar
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>

      <Center>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpenAlertDialog} onClose={onCloseAlertDialog}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Eliminar Cita</AlertDialog.Header>
            <AlertDialog.Body>
              Esta acción borrara la cita programada con tu doctor. No habra reembolso tras cancelación.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button variant="unstyled" colorScheme="coolGray" onPress={onCloseAlertDialog} ref={cancelRef}>
                  Cancelar
                </Button>
                <Button colorScheme="danger" onPress={onCloseAlertDialog}>
                  Cancelar Cita
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    </AnimatedColorBox>
  )
}
