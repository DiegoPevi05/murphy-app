import React from 'react'
import { Button, Icon, IButtonProps } from 'native-base'
import { FontAwesome5,FontAwesome,MaterialIcons,MaterialCommunityIcons,Ionicons,Feather,Foundation,Entypo} from '@expo/vector-icons'

interface Props extends IButtonProps {
  active: boolean
  icon: string
  children: React.ReactNode
  iconLibrary?: 'MaterialCommunityIcons'|'FontAwesome5' | 'FontAwesome' | 'MaterialIcons' | 'Ionicons' | 'Feather'|'Entypo';
  pro:boolean
}

const MenuButton = ({ active, icon,iconLibrary, children,pro, ...props }: Props) => {

  let IconComponent;

  switch (iconLibrary) {
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'Entypo':
      IconComponent = Entypo;
      break;
    default:
      IconComponent = FontAwesome5; 
      break;
  }

  return (
    <Button
      size="lg"
      bg={active ? "murphy.emeraldDark" : 'transparent'}
      _text={{
        color : active ? 'white' : 'murphy.gray',
      }}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={IconComponent} name={icon} size="md" opacity={1} mr={2} 
        color={active ? 'white' : 'murphy.emeraldDark'}
      />}
      _pressed={{
        bg: 'murphy.emeraldDark',
        _text: {
          color: 'white',
        },
      }}

      {...props}
        rightIcon = { pro === true ? <Icon as={Foundation} name={"crown"} size="lg" opacity={1} 
          color={active ? 'yellow.400' : 'yellow.400'}
        /> : undefined}
    >
      {children}
    </Button>
  )
}

export default MenuButton
