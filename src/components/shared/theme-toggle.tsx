import React from 'react'
import {HStack,
        Switch,
        useColorMode,
        MoonIcon,SunIcon} from 'native-base'


export default function ThemeToggle(){
  const {colorMode,toggleColorMode} = useColorMode()
  return (
    <HStack
      alignItems="center"
      p={2}
      position="relative"
      top={0}
      right={24}
      w={16}
      h={16}
      >
      <SunIcon color="yellow.500" size="md"/>
        <Switch
          isChecked={colorMode === 'dark'}
          onToggle={toggleColorMode}
        ></Switch>
      <MoonIcon color="blueGray.900" size="sm"/>
    </HStack>
  )
}

