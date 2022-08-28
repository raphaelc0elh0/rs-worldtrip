import { Circle, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
import { Section } from "../../components/Section"

export const IllustrationsSection = () => {
  const displayIllustrations = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Section>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }}>
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
            spacing={6}
            justify="center"
            direction={displayIllustrations ? "column" : "row"}
          >
            {displayIllustrations ? (
              <img src={img.imgSrc} alt={img.imgAlt} width="85px" />
            ) : (
              <Circle size="8px" bg="yellow.500" mt="0.5" />
            )}
            <Text fontWeight="600" fontSize={{ base: "lg", md: "xl", xl: "2xl" }}>
              {img.label}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Section>
  )
}
