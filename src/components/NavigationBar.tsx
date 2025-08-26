import { FC, ReactNode } from 'react'
import { Box, Button, Center, Flex, HStack } from '@chakra-ui/react'
import { Link, useRouter } from '@tanstack/react-router'
import Logo from './Logo'

const NavBtn = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => {
  return (
    <Box color="#C8C8C8" as="a" onClick={onClick}>
      {children}
    </Box>
  )
}

export const NavigationBar: FC = () => {
  const { history } = useRouter()
  const router = history.location.pathname

  return (
    <Center as="nav" className={router === '/' ? '' : 'black'} w="100%">
      <Flex justify="space-between" w="100%" maxW="1280px" px="20px" align="center" h="100px">
        <Box as={Link} to="/">
          <Logo w="126px" h="36px" />
        </Box>
        <HStack gap="60px" fontSize="16px">
          <NavBtn>Home</NavBtn>
          <NavBtn>Performance</NavBtn>
          <NavBtn>Vision</NavBtn>
          <NavBtn>Team</NavBtn>
          <NavBtn>Litepaper</NavBtn>

          <Button
            color="#c8c8c8"
            fontWeight="400"
            padding="12px 21px"
            sx={{
              // background: '#131313',
              'border-radius': '18px',
              bg: 'url(/images/office-links-btn-bg.png) no-repeat',
              bgSize: 'cover',
            }}
          >
            Official Links
          </Button>
        </HStack>
      </Flex>
    </Center>
  )
}
