import React from 'react'
import {Box, Button, Icon,Text, IButtonProps } from 'native-base'
import { FontAwesome5,FontAwesome,MaterialIcons,MaterialCommunityIcons,Ionicons,Feather} from '@expo/vector-icons'

interface Props extends IButtonProps {
  type?:string
  icon:string
  label:string
  iconLibrary?: 'MaterialCommunityIcons'|'FontAwesome5' | 'FontAwesome' | 'MaterialIcons' | 'Ionicons' | 'Feather';
  children: React.ReactNode
}

const ButtonIcon = ({type,icon,iconLibrary,label, children,pro, ...props }: Props) => {

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
    default:
      IconComponent = FontAwesome5; 
      break;
  }

  return (
  <Box alignItems="center">
    <Button
      size="md"
      w={16}
      h={16}
      rounded="full"
      bg="murphy.emeraldLight"
      px={0} 
      py={0} 
      _pressed={{
        bg: 'murphy.emerald',
      }}
      {...props}
    >
      <Icon
          as={IconComponent}
          name={icon}
          color={props.onClick ? 'white' : 'murphy.emeraldDark'}
          size="2xl"
        />
    </Button>
    <Text color="murphy.gray">{label}</Text>
  </Box>
  )
}

export default ButtonIcon
