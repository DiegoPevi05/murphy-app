import React,{useCallback, useState,useEffect} from 'react'
import { VStack, HStack, Box, Text,IconButton } from 'native-base';
import { View } from 'moti'
import { FontAwesome, Entypo} from '@expo/vector-icons'
import { startOfMonth, endOfMonth, eachDayOfInterval, format, add, getDay, startOfWeek, endOfWeek, setHours,subMonths,addMonths } from 'date-fns';
import { makeStyledComponent } from '../utils/styled'
import {Appoinment} from '../interfaces/global';


const StyledView = makeStyledComponent(View)
const Months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octobre","Noviembre","Diciembre"]

interface CalendarProps {
  appoinments:Appoinment[]
  currentMonth : Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

const Calendar = (calendarProps:CalendarProps) => {
  const {appoinments,currentMonth,prevMonth,nextMonth} = calendarProps;

  const today = new Date();
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const startOfCurrentMonth = startOfMonth(currentMonth);
    const endOfCurrentMonth = endOfMonth(currentMonth);

    const start = startOfWeek(startOfCurrentMonth);
    const end = endOfWeek(endOfCurrentMonth);

    let monthDays = eachDayOfInterval({ start, end });
    monthDays = monthDays.map(date => setHours(date, 12));

    const weeks = [];
    while (monthDays.length) {
      const week = monthDays.splice(0, 7);
      weeks.push(week);
    }

    setWeeks(weeks);
  }, [currentMonth]);

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
        h="10"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <Text fontSize="xl" fontWeight="bold" color="murphy.emeraldDark">{Months[currentMonth.getMonth()]}</Text>
        <Text fontSize="xl" fontWeight="bold" color="murphy.emeraldDark">{currentMonth.getFullYear()}</Text>
      </Box>
      <VStack space={2}>
        {weeks.map((week, weekIndex) => (
          <HStack key={weekIndex} justifyContent="center">
            {week.map((day, dayIndex) => (
              <Box
                key={dayIndex}
                h="8"
                w="8"
                rounded="full"
                bg={day && day.getDate() === today.getDate() && today.getMonth() === day.getMonth() ? 'murphy.emeraldDark' : 'transparent'}
                border={day && day.getDate() === today.getDate() ? '2' : '0'}
                borderColor="murphy.emeraldDark"
                alignItems="center"
                justifyContent="center"
                my={1}
                mx={2}
              >
                <Text color={day && day.getDate() === today.getDate() && today.getMonth() === day.getMonth() ? 'white' : 'black'}>
                  {day ? format(day, 'dd') : ''}
                </Text>
              </Box>
            ))}
          </HStack>
        ))}
      </VStack>
      <Box
        h="10"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <IconButton
          onPress={prevMonth}
          borderRadius={100}
          _icon={{
            as: Entypo,
            name: 'chevron-left',
            size: 8,
            color: 'murphy.emeraldDark'
          }}
        />

        <IconButton
          onPress={nextMonth}
          borderRadius={100}
          _icon={{
            as: Entypo,
            name: 'chevron-right',
            size: 8,
            color: 'murphy.emeraldDark'
          }}
        />
      </Box>
    </StyledView>
  )
}

export default Calendar
