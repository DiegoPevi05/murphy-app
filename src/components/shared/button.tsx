import React from 'react'
import { Button, Icon,HStack,Spinner,Heading, IButtonProps } from 'native-base'
import { AntDesign } from '@expo/vector-icons'; 

interface Props extends IButtonProps {
  type?:string
  active?: boolean
  children: React.ReactNode
  isLoading?: boolean
}

const ButtonComp = ({ active,type,isLoading=false, children,pro, ...props }: Props) => {
  return (
    <Button
      size="md"
      py={1}
      px={6}
      w={type === "lg" ? 48 : 32}
      h={10}
      rounded="full"
      bg={active ? "murphy.emeraldDark" : 'white'}
      borderColor="murphy.emeraldDark"
      borderWidth="1"
      _text={{
        color: active ? 'white' : 'murphy.emeraldDark', 
      }}
      _pressed={{
        bg: active ? 'white':'murphy.emeraldDark',
        _text: {
          color: active ? 'murphy.emeraldDark':'white',
        },
      }}
      {...props}
      disabled={isLoading ? true: false}
    >
      {isLoading ? 
        <HStack justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading ml={2} color="white" fontSize="md">
            {children}
          </Heading>
        </HStack>
      :
      <>{children}</>
      }
    </Button>
  )
}

export default ButtonComp
