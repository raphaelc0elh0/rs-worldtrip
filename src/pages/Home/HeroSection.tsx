import { Box, Heading, HStack, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
import { Section } from "../../components/Section"

export const HeroSection = () => {
  const displayIllustrations = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Box backgroundImage="url('/images/night-sky.png')" backgroundRepeat="no-repeat">
      <Section pb={0}>
        <HStack align="start" spacing={20}>
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
      </Section>
    </Box>
  )
}
