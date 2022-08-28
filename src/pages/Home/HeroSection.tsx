import { Box, Circle, Heading, HStack, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react"

export const HeroSection = () => {
  const displayIllustrations = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <>
      <HStack
        as="section"
        align="start"
        spacing={20}
        py={{ base: 7, xl: 20 }}
        px={{ base: 4, md: 8, lg: 36 }}
        backgroundImage="url('/images/night-sky.png')"
        backgroundRepeat="no-repeat"
      >
        <Stack spacing={5}>
          <Heading color="catskill-white.50" fontWeight="500" fontSize={{ base: "xl", md: "3xl", xl: "4xl" }}>
            5 continentes, <br />
            infinitas possibilidades
          </Heading>
          <Text color="alto.300" fontSize={{ base: "sm", md: "md", xl: "xl" }}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        {displayIllustrations && (
          <Box>
            <img src="/images/airplane.png" alt="airplane illustration" />
          </Box>
        )}
      </HStack>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} mx={{ base: 4, md: 8, lg: 36 }} my={{ base: 7, xl: 20 }}>
        {[
          { imgSrc: "/images/cocktail.png", imgAlt: "cocktail illustration", label: "vida noturna" },
          { imgSrc: "/images/surf.png", imgAlt: "surf illustration", label: "praia" },
          { imgSrc: "/images/building.png", imgAlt: "building illustration", label: "moderno" },
          { imgSrc: "/images/museum.png", imgAlt: "museum illustration", label: "clássico" },
          { imgSrc: "/images/earth.png", imgAlt: "earth illustration", label: "e mais..." }
        ].map((img) => (
          <Stack
            key={img.label}
            align="center"
            spacing={2}
            justify="center"
            direction={displayIllustrations ? "column" : "row"}
          >
            {displayIllustrations ? (
              <img src={img.imgSrc} alt={img.imgAlt} width="85px" />
            ) : (
              <Circle size="8px" bg="yellow.500" mt="0.5" />
            )}
            <Text fontSize={{ base: "lg", md: "xl", xl: "2xl" }}>{img.label}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </>
  )
}
