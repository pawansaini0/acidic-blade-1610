import React from "react";
import { Image, Flex, Box, Text } from "@chakra-ui/react";
const Home = () => {
  return (
    <div>
      <Image
        h={"30rem"}
        w="80rem"
        src="https://images.trvl-media.com/lodging/47000000/46210000/46205200/46205118/0731738d.jpg?impolicy=resizecrop&rw=1200&ra=fit"
      ></Image>
      <Flex m={"1.7rem"} gap="2rem">
        <Box>
          <Image
            borderTopRightRadius={"10px"}
            borderTopLeftRadius={"10px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
          ></Image>
          <Text fontSize={"small"}>
            Plan a trip for the whole family—from family travel tips to
            family-friendly filters, our tools make it easy.
          </Text>
        </Box>
        <Box>
          <Image
            borderTopRightRadius={"10px"}
            borderTopLeftRadius={"10px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
          />
          <Text fontSize={"small"}>
            Looking for a change of scenery, but want something flexible? With
            free cancellation on most hotels, you can book with peace of mind.
          </Text>
        </Box>
        <Box>
          <Image
            borderTopRightRadius={"10px"}
            borderTopLeftRadius={"10px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
          />
          <Text fontSize={"small"}>
            Need more help along your journey? We offer 24/7 support on social
            and through virtual agents onsite.
          </Text>
        </Box>
      </Flex>
      <Flex m={"0 2rem"} gap="1.7rem">
        <Box>
          <Image
            borderRadius={"8px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_AllInclusive_imgB_1199x399_20211104.jpg?impolicy=fcrop&w=1400&h=600&q=mediumHigh"
          ></Image>
        </Box>
        <Box>
          <Image
            borderRadius={"8px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_LastMinute_imgB_1199x399_20211104.jpg?impolicy=fcrop&w=1400&h=600&q=mediumHigh"
          ></Image>
        </Box>
      </Flex>
      <Text
        fontSize={"3xl"}
        fontWeight="bold"
        textAlign={"left"}
        marginLeft="2rem"
        marginTop={"1rem"}
      >
        Start planning your next trip
      </Text>
      <Flex w="95%" m={"auto"} gap="1.7rem">
        <Box>
          <Image
            borderRadius={"8px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
          ></Image>
        </Box>
        <Box>
          <Image
            borderRadius={"8px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
          ></Image>
        </Box>
        <Box>
          <Image
            borderRadius={"8px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
          ></Image>
        </Box>
        <Box>
          <Image
            borderRadius={"8px"}
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
          ></Image>
        </Box>
      </Flex>
      <Text
        fontSize={"3xl"}
        fontWeight="bold"
        textAlign={"left"}
        marginLeft="2rem"
        marginTop={"1rem"}
      >
        Featured offers
      </Text>
      <Box>
        <Image
          h={"20rem"}
          w={"95%"}
          m="auto"
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Family_imgB_1200x674_20211104.jpg"
        ></Image>
      </Box>
      <Text
        fontSize={"3xl"}
        fontWeight="bold"
        textAlign={"left"}
        marginLeft="2rem"
        marginTop={"3rem"}
        marginBottom={"1rem"}
      >
        Here to help keep you on the move
      </Text>
      <Flex w={"95%"} m="auto" justify="space-between" gap={"0.8rem"}>
        <Box textAlign={"left"} border="1px solid gray" padding={"1rem 3rem 1rem 12px" } borderRadius="8px">
          <Text fontSize={"large"} fontWeight={"bold"}>Change or cancel a trip</Text>
          <Text fontSize={"small"}>Make updates to your itinerary or cancel a booking</Text>
        </Box>
        <Box textAlign={"left"} border="1px solid gray" padding={"1rem 8rem 1rem 12px" } borderRadius="8px">
          <Text fontSize={"large"} fontWeight={"bold"}>Use a credit or coupon</Text>
          <Text fontSize={"small"}>Apply a coupon code or credit to a new trip</Text>
        </Box>
        <Box textAlign={"left"} border="1px solid gray" padding={"1rem 8rem 1rem 12px" } borderRadius="8px">
          <Text fontSize={"large"} fontWeight={"bold"}>Track your refund</Text>
          <Text fontSize={"small"}>Check the status of a refund currently in progress</Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
