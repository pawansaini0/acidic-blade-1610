import React from 'react'
import Login from '../Pages/Login'
import { Text ,Image,Select,Box,Flex,Link,Option,Center} from '@chakra-ui/react'
import logo from "../images/xy.png"
const Navbar = () => {
  return (
    <Center h={"4rem"}  bg={"#0a438b"}>
      <Flex w={"95%"} m="auto" justifyContent={"space-between"}>
      <Flex justifyContent={"space-between"}>
        <Link href="/"><Image w="8rem" src={"https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2"}/></Link>
        <Select border={"none"} placeholder='More Travel' color={"white"}>
          <option>Stays</option>
          <option>Flights</option>
          <option>Hotels</option>
        </Select>
      </Flex>
      <Flex justifyContent={"space-evenly"} gap="2rem" alignItems="center">
        <Text color='white'>Español</Text>
        <Text color='white'>List your property</Text>
        <Text color='white'>Support</Text>
        <Text color='white'>Trips</Text>
        <Link href='/login' color='white'>Sign in</Link>
      </Flex>
      </Flex>
    </Center>
  )
}

export default Navbar
