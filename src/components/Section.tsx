import { Box, BoxProps } from "@chakra-ui/react"

export const Section = ({
  children,
  pt = { base: 7, lg: 16, xl: 20 },
  pb = { base: 7, lg: 16, xl: 20 },
  ...rest
}: BoxProps) => {
  return (
    <Box mx={{ base: 4, md: 8, lg: 36 }} pt={pt} pb={pb} {...rest}>
      {children}
    </Box>
  )
}
