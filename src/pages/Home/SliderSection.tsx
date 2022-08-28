import { Box, Center, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// import required modules
import { Navigation, Pagination } from "swiper"

const data = [
  {
    imgSrc: "/images/places/europe.png",
    title: "Europa",
    subtitle: "O continente mais antigo.",
    link: "europe"
  },
  {
    imgSrc: "/images/places/north-america.jpeg",
    title: "América do Norte",
    subtitle: "O continente...",
    link: "north-america"
  },
  {
    imgSrc: "/images/places/south-america.jpeg",
    title: "América do Sul",
    subtitle: "O continente...",
    link: "south-america"
  },
  { imgSrc: "/images/places/asia.jpeg", title: "Ásia", subtitle: "O continente...", link: "asia" },
  {
    imgSrc: "/images/places/middle-east.jpeg",
    title: "Oriente Médio",
    subtitle: "O continente...",
    link: "middle-east"
  },
  { imgSrc: "/images/places/oceania.jpeg", title: "Oceania", subtitle: "O continente...", link: "oceania" },
  { imgSrc: "/images/places/africa.jpeg", title: "África", subtitle: "O continente...", link: "africa" }
]

export const SliderSection = () => {
  return (
    <Stack as="section" py={{ base: 10, xl: 14 }} spacing={{ base: 10, xl: 14 }}>
      <Stack textAlign="center" fontSize={{ base: "xl", md: "3xl", xl: "4xl" }}>
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Stack>
      <Flex justify="center">
        <Box maxWidth="1240px" width="100%">
          <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]} className="mySwiper">
            {data.map((section) => (
              <SwiperSlide key={section.title}>
                <Link
                  href={`/continents/${section.link}`}
                  _hover={{ textDecoration: "underline", textDecorationColor: "yellow.500" }}
                >
                  <Center
                    background={`center / cover no-repeat url('${section.imgSrc}')`}
                    h={{ base: "250px", md: "350px", xl: "450px" }}
                  >
                    <Stack spacing="4" textAlign="center">
                      <Heading fontSize={{ base: "2xl", md: "3xl", xl: "5xl" }} color="white">
                        {section.title}
                      </Heading>
                      <Text fontSize={{ base: "sm", md: "lg", xl: "2xl" }} color="alto.300" fontWeight="bold">
                        {section.subtitle}
                      </Text>
                    </Stack>
                  </Center>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </Stack>
  )
}
