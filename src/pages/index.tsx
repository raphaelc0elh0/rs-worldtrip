import { Box, Center, Divider, Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react"

import { HeroSection } from "./Home/HeroSection"
import { SliderSection } from "./Home/SliderSection"

const Home = () => {
  return (
    <>
      <HeroSection />
      <Flex justify="center">
        <Divider width="90px" borderColor="black" borderTopWidth="2px" />
      </Flex>
      <SliderSection />
    </>
  )
}
export default Home
