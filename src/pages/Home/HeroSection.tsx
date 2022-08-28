import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react"

export const HeroSection = () => {
  return (
    <>
      <HStack
        as="section"
        align="start"
        spacing={20}
        pt={{ sm: 10, xl: 20 }}
        px={{ sm: 12, lg: 36 }}
        background="no-repeat url('/images/night-sky.png')"
        backgroundSize="100% auto"
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
    </>
  )
}
