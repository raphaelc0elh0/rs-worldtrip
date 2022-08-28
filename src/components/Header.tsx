import { Flex } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex as="header" align="center" justify="center" width="100%" height={100}>
      <img src="/logo.svg" alt="logo" width={184} />
    </Flex>
  )
}
