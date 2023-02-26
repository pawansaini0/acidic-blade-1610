import React from "react";
import { useParams } from "react-router-dom";
import { Image, Grid, Box, HStack } from "@chakra-ui/react";
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
      <Image h={"100%"} src={singleData.image1}></Image>
      <Image h={"60%"} src={singleData.image2}></Image>
      <Image h={"60%"} src={singleData.image3}></Image>
      <Image h={"60%"} src={singleData.image4}></Image>
      <Image h={"60%"} src={singleData.image5}></Image>

      {/* <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
       
        
        
      </Grid> */}
      {singleData.description}
    </div>
  );
};

export default SingleOffer;
