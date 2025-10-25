import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex w="100%" gap="15px" alignItems="end" justify="center">
      <Box
        w={{ base: '20px', md: '40px' }}
        h={{ base: '20px', md: '40px' }}
        borderRadius="4px"
        position="relative"
      >
        <Image src="/images/Performance-3.png" />
      </Box>
      <Heading>{children}</Heading>
      <Box
        w={{ base: '20px', md: '40px' }}
        h={{ base: '20px', md: '40px' }}
        borderRadius="4px"
        position="relative"
      >
        <Image src="/images/Performance-3.png" />
      </Box>
    </Flex>
  )
}

export default Title
