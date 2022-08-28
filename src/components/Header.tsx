import { Flex, Img } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex as="header" align="center" justify="center" width="100%" height={{ base: 50, md: 70, xl: 100 }}>
      <Img src="/logo.svg" alt="logo" height={{ base: "20px", md: "32px", xl: "46px" }} />
    </Flex>
  )
}
