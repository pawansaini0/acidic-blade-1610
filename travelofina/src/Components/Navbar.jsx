import React from 'react'
import { Text ,Image,Select,Box,Flex} from '@chakra-ui/react'
import logo from "../images/xy.png"
const Navbar = () => {
  return (
    <Flex justifyContent={"space-around"} bg={"#0a438b"}>
      <div>
        <Image w="5rem" src={logo}/>
      </div>
      <Flex justifyContent={"space-between"}>
        <Text color='white'>Español</Text>
        <Text color='white'>List your property</Text>
        <Text color='white'>Support</Text>
        <Text color='white'>Trips</Text>
        <Text color='white'>Sign in</Text>
      </Flex>
    </Flex>
  )
}

export default Navbar
