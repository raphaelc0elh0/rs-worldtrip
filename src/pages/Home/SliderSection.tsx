import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// import required modules
import { Navigation, Pagination } from "swiper"

export const SliderSection = () => {
  return (
    <Stack as="section" mx="100px" py="14" spacing="14">
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
  )
}
