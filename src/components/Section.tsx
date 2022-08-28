import { Box, BoxProps } from "@chakra-ui/react"

export const Section = ({ children, ...rest }: BoxProps) => {
  return (
    <Box mx={{ base: 4, md: 8, lg: 36 }} py={{ base: 7, lg: 16, xl: 20 }} {...rest}>
      {children}
    </Box>
  )
}
