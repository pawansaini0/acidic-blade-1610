import React from "react";
import { useParams } from "react-router-dom";
import { Image, Grid, Box, HStack, Flex, Text ,Button} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
const SingleOffer = () => {
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/places/${id}`)
      .then((res) => setSingleData(res.data));
  }, []);
  return (
    <div>
      <Box>
        <Flex gap={"2rem"} m={"2rem"} justifyContent={""}>
          <Box>
            <Image h={"100%"} src={singleData.image1}></Image>
          </Box>
          <Box>
            <Flex gap={"2rem"}>
              <Box h={"100%"}>
                <Image src={singleData.image2}></Image>
                <Image src={singleData.image3}></Image>
              </Box>
              <Box h={"100%"}>
                <Image src={singleData.image4}></Image>
                <Image src={singleData.image5}></Image>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Grid gap="4rem" textAlign={"start"} mt={"5rem"} ml="2rem" templateColumns={"repeat(2,1fr)"} justifyContent="space-around">
        <Box>
          <Text  fontSize={"2xl"} fontWeight="bold">
            {singleData.title}
          </Text>
          <Text mb={"2rem"}>{singleData.rate}</Text>
          <Text fontSize={"large"} fontWeight="bold">${singleData.price}</Text>
          <Text >{singleData.description}</Text>
        </Box>
        <Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492479.18763210607!2d74.0066944!3d15.349728450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1677469708430!5m2!1sen!2sin"></iframe>
          <Button bg={"#0a438b"} mt="3rem" color="white">Reserve a room</Button>
        </Box>
      </Grid>
    </div>
  );
};

export default SingleOffer;
