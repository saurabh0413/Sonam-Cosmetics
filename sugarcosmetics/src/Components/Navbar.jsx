import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

export  function Navbar() {
 
  return (
    <>
      <Box bg={"black"} px={4} color='white'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
          <Avatar
                    size={'sm'}
                    src={'https://i.pinimg.com/564x/e4/fa/0b/e4fa0b6c8c7e975eb62e907102320af6.jpg'}
                  />
            
          </Box>
          <Box>

{/* <Input htmlSize={80} width='auto' />
<Button color={"black"} bg={"white"}  marginTop="-7px">🍳 Search</Button> */}



<InputGroup >
      <Input
        pr='4.5rem'
        
        placeholder='Try Liquiq Lipstick'
      />
      <InputRightElement width='4.5rem'>
        <Button   color={"black"} bg={"white"}>
        🍳 Search
        </Button>
      </InputRightElement>
    </InputGroup>
</Box>
          
   
          <Box>Login/Register</Box>

          <Flex h={26} alignItems={'center'} justifyContent={'space-between'} gap="25px">
          <Box>🤍</Box>
          <Box>👜</Box>
          <Box>☀</Box>
          </Flex>
        
        </Flex>

        
      </Box>
    </>
  );
}