import React from "react";
import { Grid, Box, Image, Center, Flex, Text } from "@chakra-ui/react";
import { Link as DataLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Offers = () => {
  const [data, setData] = useState([]);

  const getAllData = () => [
    axios.get(`http://localhost:8080/places`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }),
  ];

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <Box bg={"gray.100"}>
      {data.map((elem) => {
        return (
          <DataLink key={elem.id} to={`${elem.id}`}>
            <Box mb={"2rem"} borderRadius="2rem" cursor={"pointer"}>
              <Box borderRadius="1rem" w={"60%"} m="auto">
                <Grid
                  // rowGap="1rem"
                  templateColumns={"repeat(2,1fr)"}
                  // w={"60%"}
                  // m="auto"
                  bg={"white"}
                  borderRadius="1rem"
                  // border={"3px solid green"}
                >
                  <Box>
                    <Image
                      h={"15rem"}
                      borderLeftRadius="1rem"
                      src={elem.image1}
                    ></Image>
                  </Box>
                  <Box>
                    <Text fontSize="xl" fontWeight={"bold"} textAlign="start">
                      {elem.title}
                    </Text>
                    <Flex justifyContent={"space-around"} mt="4rem">
                      <Box>{elem.rating.rate}</Box>
                      <Text fontSize={"2xl"} fontWeight="bold">
                        ${elem.price}
                      </Text>
                    </Flex>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </DataLink>
        );
      })}
    </Box>
  );
};

export default Offers;
