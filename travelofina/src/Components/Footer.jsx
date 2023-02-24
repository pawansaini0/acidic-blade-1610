import React from "react";
import { Box, Image, Link, Flex, Text, Grid, Divider } from "@chakra-ui/react";
const Footer = () => {
  return (
    <div>
      <Box>
        <Image
          marginLeft="2rem"
          marginTop={"4rem"}
          src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
        ></Image>
      </Box>
      <Grid mt={"1rem"} templateColumns="repeat(4, 1fr)">
        <Box
          textAlign={"left"}
          ml="2rem"
          lineHeight={"2rem"}
          fontSize="small"
          color={"#3E54AC"}
        >
          <Text
            textAlign={"left"}
            color="black"
            fontSize={"medium"}
            fontWeight="bold"
          >
            Company
          </Text>

          <Link href="#">about</Link>
          <br />

          <Link href="#">jobs</Link>
          <br />

          <Link href="#">list your company</Link>
          <br />

          <Link href="#">partnership</Link>
          <br />

          <Link href="#">newsroom</Link>
          <br />

          <Link href="#">Invester Relations</Link>
          <br />

          <Link href="#">Roaming Gnore Store</Link>
          <br />

          <Link href="#">Advertising</Link>
          <br />
        </Box>
        <Box
          textAlign={"left"}
          ml="2rem"
          lineHeight={"2rem"}
          fontSize="small"
          color={"#3E54AC"}
        >
          <Text
            textAlign={"left"}
            color="black"
            fontSize={"medium"}
            fontWeight="bold"
          >
            Explore
          </Text>

          <Link href="#">Hotels in United States</Link>
          <br />

          <Link href="#">Vacation Rentals in United States</Link>
          <br />

          <Link href="#">Vacation Rentals in United States</Link>
          <br />

          <Link href="#">Vacation Packages in United States</Link>
          <br />

          <Link href="#">Domestic Flights</Link>
          <br />

          <Link href="#">Car Rentals in United States</Link>
          <br />

          <Link href="#">Travelocity Reviews</Link>
          <br />

          <Link href="#">Travelocity Coupons</Link>
          <br />
          <Link href="#">Unique Places to Stay</Link>
          <br />
          <Link href="#">Travel Blog</Link>
          <br />
        </Box>
        <Box
          textAlign={"left"}
          ml="2rem"
          lineHeight={"2rem"}
          fontSize="small"
          color={"#3E54AC"}
        >
          <Text
            textAlign={"left"}
            color="black"
            fontSize={"medium"}
            fontWeight="bold"
          >
            Policies
          </Text>

          <Link href="#">Privacy Policy</Link>
          <br />

          <Link href="#">Terms of Use</Link>
          <br />

          <Link href="#">Vrbo terms and conditions</Link>
          <br />

          <Link href="#">Accessibility</Link>
          <br />

          <Link href="#">Your Privacy Choices</Link>
          <br />
        </Box>
        <Box
          textAlign={"left"}
          ml="2rem"
          lineHeight={"2rem"}
          fontSize="small"
          color={"#3E54AC"}
        >
          <Text
            textAlign={"left"}
            color="black"
            fontSize={"medium"}
            fontWeight="bold"
          >
            Help
          </Text>

          <Link href="#">Support</Link>
          <br />

          <Link href="#">Cancel your hotel or vacation rental booking</Link>
          <br />

          <Link href="#">Cancel your flight</Link>
          <br />

          <Link href="#">Refund timelines, policies & processes</Link>
          <br />

          <Link href="#">Use a Travelocity coupon</Link>
          <br />
        </Box>
      </Grid>
      <Divider
        w={"95%"}
        m="auto"
        mt={"2rem"}
        borderColor="gray.600"
        mb={"2rem"}
      />
      <Box textAlign={"left"} w="95%" m="auto" mb={"4rem"} color="gray">
        <Text fontSize={"small"}>
          © 2023 Travelscape LLC, an Expedia Group Company. All rights reserved.
        </Text>
        <Text fontSize={"small"}>
          Travelocity, the Stars Design, and The Roaming Gnome Design are
          trademarks or registered trademarks of Travelscape LLC. CST#
          2056372-50.
        </Text>
      </Box>
    </div>
  );
};

export default Footer;
