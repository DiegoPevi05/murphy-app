import React from 'react'
import { Button, Icon, IButtonProps } from 'native-base'
import { Foundation,Entypo} from '@expo/vector-icons'

interface Props extends IButtonProps {
  active: boolean
  icon: string
  children: React.ReactNode
  pro:boolean
}

const MenuButton = ({ active, icon, children,pro, ...props }: Props) => {
  return (
    <Button
      size="lg"
      _light={{
        colorScheme: 'blue',
        _pressed: {
          bg: 'darkBlue.300'
        },
        _text: {
          color: active ? 'blue.50' : 'blueGray.900'
        }
      }}
      _dark={{
        colorScheme: 'darkBlue',
        _pressed: {
          bg: 'darkBlue.300'
        },
        _text: {
          color: active ? 'blue.50' : undefined
        }
      }}
      bg={active ? "afito.blue" : 'transparent'}
      variant="solid"
      justifyContent="flex-start"

      leftIcon={<Icon as={Entypo} name={icon} size="sm" opacity={0.5} 
        _light={{
          color:active ? 'blue.50':'blueGray.900'
        }}
        _dark={{
          color:active ? 'blue.50':'blueGray.900'
        }}
      />}
      {...props}
        rightIcon = { pro === true ? <Icon as={Foundation} name={"crown"} size="sm" opacity={1} 
          _light={{
            color:active ? 'yellow.600':'yellow.600'
          }}
          _dark={{
            color:active ? 'yellow.600':'yellow.600'
          }}
        /> : undefined}
    >
      {children}
    </Button>
  )
}

export default MenuButton
