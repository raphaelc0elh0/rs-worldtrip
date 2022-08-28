import { Box, Center, Flex, Heading, HStack, Icon, Img, SimpleGrid, Text, Tooltip } from "@chakra-ui/react"
import Head from "next/head"
import { Section } from "../../components/Section"
import continentsData from "./continentsData.json"

const Continent = () => {
  const mostVisitedCities = Object.entries(continentsData.europe.mostVisitedCities).map((obj) => obj[1])

  return (
    <>
      <Head>
        <title>{continentsData.europe.name} | worldtrip</title>
      </Head>
      <Flex
        align={{ base: "center", lg: "end" }}
        justify={{ base: "center", lg: "start" }}
        width="100%"
        height={{ base: "150px", md: "400px", xl: "500px" }}
        backgroundImage="url('/images/places/europe-highlight.png')"
        backgroundSize="cover"
      >
        <Section>
          <Heading color="white" fontWeight="600" fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}>
            {continentsData.europe.name}
          </Heading>
        </Section>
      </Flex>
      <Section>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          <Text textAlign="justify">{continentsData.europe.summary}</Text>
          <Center>
            <HStack spacing={{ base: 8, md: 12 }} textAlign={{ base: "left", lg: "center" }}>
              <Box>
                <Text color="yellow.500" fontWeight="600" fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}>
                  {continentsData.europe.countryNumber}
                </Text>
                <Text mt="-2" fontWeight="600" fontSize={{ base: "lg", md: "xl", xl: "2xl" }}>
                  países
                </Text>
              </Box>
              <Box>
                <Text color="yellow.500" fontWeight="600" fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}>
                  {continentsData.europe.languageNumber}
                </Text>
                <Text mt="-2" fontWeight="600" fontSize={{ base: "lg", md: "xl", xl: "2xl" }}>
                  línguas
                </Text>
              </Box>
              <Box>
                <Text color="yellow.500" fontWeight="600" fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}>
                  {mostVisitedCities.length}
                </Text>
                <Text mt="-2" fontWeight="600" fontSize={{ base: "lg", md: "xl", xl: "2xl" }}>
                  cidades +100{" "}
                  <Tooltip hasArrow label="Está entre as 100 cidades mais visitadas do mundo">
                    <Icon height="20px" fontSize="sm" mb={1} />
                  </Tooltip>
                </Text>
              </Box>
            </HStack>
          </Center>
        </SimpleGrid>
        <Box mt={12}>
          <Heading fontWeight="500" mb={{ base: 6, lg: 10 }}>
            Cidades +100
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
            {mostVisitedCities.map((city) => (
              <Box key={city.city}>
                <Img src={city.img} alt={city.city} width="100%" borderRadius="5px 5px 0 0" />
                <Flex
                  align="center"
                  justify="space-between"
                  px={6}
                  py={5}
                  borderTop={0}
                  borderRadius="0 0 5px 5px"
                  borderWidth="1px"
                  borderColor="yellow.500"
                  backgroundColor="white"
                >
                  <Box>
                    <Text fontWeight="600" color="river-bed.700" fontSize="xl">
                      {city.cityName}
                    </Text>
                    <Text fontWeight="500" color="gray.500" fontSize="md">
                      {city.countryName}
                    </Text>
                  </Box>
                  <Box>
                    <Img src={`/images/country-flags/${city.country}.png`} alt={city.countryName} />
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Section>
    </>
  )
}
export default Continent
