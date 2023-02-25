import React from "react";
import { Grid, Link, Box, Divider, Input, Text,Checkbox,Flex,Button } from "@chakra-ui/react";
const SearchBox = () => {
  return (
    <Box className="searchBox" h={"15rem"} p="1rem" w={"95%"} m="auto" borderRadius={"8px"}>
      <Grid
        templateColumns={"repeat(6 , 1fr)"}
        w="50%"
        m={"auto"}
        fontWeight="bold"
        color="gray.600"
      >
        <Link href="#">Stays</Link>
        <Link href="#">Flights</Link>
        <Link href="#">Cars</Link>
        <Link href="#">Packages</Link>
        <Link href="#">Things to do</Link>
        <Link href="#">Cruises</Link>
      </Grid>
      <Divider></Divider>
      <Grid mt="1rem" templateColumns={"repeat(4,1fr)"} gap="1rem" >
        <Input h={"3rem"} placeholder="Going to" border={"1px solid gray"}></Input>
        <Box border={"1px solid gray"} borderRadius="7px" >
          <Text fontSize="small">Check-in</Text>
          <Text>Mar 10</Text>
        </Box>
        <Box border={"1px solid gray"} borderRadius="7px">
          <Text fontSize="small">Check-out</Text>
          <Text>Mar 11</Text>
        </Box>
        <Box border={"1px solid gray"} borderRadius="7px">
          <Text fontSize="small">Travelers</Text>
          <Text>1 room, 2 travelers</Text>
        </Box>
      </Grid>
      <Flex gap={"5rem"} mt="1rem">
      <Checkbox color="gray">Add a flight</Checkbox>
      <Checkbox color="gray">Add a car</Checkbox>
      </Flex>
      <Button bg={"#0a438b"} padding="1.5rem 3.5rem" color={"white"}>Search</Button>
    </Box>
  );
};

export default SearchBox;
