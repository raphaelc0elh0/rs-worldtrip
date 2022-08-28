import { Box, Center, Divider, Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// import required modules
import { Navigation, Pagination } from "swiper"

const Home = () => {
  return (
    <>
      <HStack
        as="section"
        align="start"
        justify="space-between"
        spacing={20}
        pt="20"
        px="36"
        backgroundImage="url('/images/night-sky.png')"
        backgroundRepeat="no-repeat"
      >
        <Stack spacing={5}>
          <Text color="catskill-white.50" fontWeight="500" fontSize="4xl">
            5 continentes, <br />
            infinitas possibilidades
          </Text>
          <Text color="alto.300" fontSize="xl">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        <Box>
          <img src="/images/airplane.png" alt="airplane illustration" />
        </Box>
      </HStack>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} px="36" py="20">
        {[
          { imgSrc: "/images/cocktail.png", imgAlt: "cocktail illustration", label: "vida noturna" },
          { imgSrc: "/images/surf.png", imgAlt: "surf illustration", label: "praia" },
          { imgSrc: "/images/building.png", imgAlt: "building illustration", label: "moderno" },
          { imgSrc: "/images/museum.png", imgAlt: "museum illustration", label: "clássico" },
          { imgSrc: "/images/earth.png", imgAlt: "earth illustration", label: "e mais..." }
        ].map((img) => (
          <Stack key={img.label} spacing={2} align="center">
            <img src={img.imgSrc} alt={img.imgAlt} width="85px" />
            <Text fontSize="2xl">{img.label}</Text>
          </Stack>
        ))}
      </SimpleGrid>
      <Flex justify="center">
        <Divider width="90px" borderColor="black" borderTopWidth="2px" />
      </Flex>
      <Stack mx="100px" py="14" spacing="14">
        <Flex justify="center" px="24">
          <Box textAlign="center" fontSize="4xl">
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Box>
        </Flex>
        <Box>
          <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]} className="mySwiper">
            {[
              { imgSrc: "/images/places/europe.png", title: "Europa", subtitle: "O continente mais antigo." },
              { imgSrc: "/images/places/north-america.jpeg", title: "América do Norte", subtitle: "O continente..." },
              { imgSrc: "/images/places/south-america.jpeg", title: "América do Sul", subtitle: "O continente..." },
              { imgSrc: "/images/places/asia.jpeg", title: "Ásia", subtitle: "O continente..." },
              { imgSrc: "/images/places/middle-east.jpeg", title: "Oriente Médio", subtitle: "O continente..." },
              { imgSrc: "/images/places/oceania.jpeg", title: "Oceania", subtitle: "O continente..." },
              { imgSrc: "/images/places/africa.jpeg", title: "África", subtitle: "O continente..." }
            ].map((section) => (
              <SwiperSlide key={section.title}>
                <Center background={`center / cover no-repeat url('${section.imgSrc}')`} h="450px">
                  <Stack spacing="4" textAlign="center" fontWeight="bold">
                    <Text fontSize="5xl" color="white">
                      {section.title}
                    </Text>
                    <Text fontSize="2xl" color="alto.300">
                      {section.subtitle}
                    </Text>
                  </Stack>
                </Center>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>
    </>
  )
}
export default Home
