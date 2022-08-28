import { Divider, Flex, useBreakpointValue } from "@chakra-ui/react"
import Head from "next/head"

import { HeroSection } from "./home/HeroSection"
import { IllustrationsSection } from "./home/IllustrationsSection"
import { SliderSection } from "./home/SliderSection"

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <HeroSection />
      <IllustrationsSection />
      <Flex justify="center">
        <Divider width="90px" borderColor="black" borderTopWidth="2px" />
      </Flex>
      <SliderSection />
    </>
  )
}
export default Home
