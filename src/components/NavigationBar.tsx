import { FC, ReactNode } from 'react'
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
} from '@chakra-ui/react'
import { Link, useRouter } from '@tanstack/react-router'
import Logo from './Logo'
import { jumpAnchor } from '../utils'
import useIsMobile from '../hooks/useIsMobile'
import { IoMdMenu } from 'react-icons/io'

const Item = ({ children, ...props }: MenuItemProps) => {
  return (
    <MenuItem
      bg="transparent"
      borderBottom="0.5px dashed #8A8A8A"
      borderRadius="2px"
      px="8px"
      py="8px"
      mb="12px"
      {...props}
    >
      <Flex justify="space-between" w="100%" alignItems="center">
        {children}
      </Flex>
    </MenuItem>
  )
}

const NavBtn = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => {
  return (
    <Box color="#C8C8C8" as="a" onClick={onClick} cursor={'pointer'}>
      {children}
    </Box>
  )
}
// Home         Strategy         Team         About
const MobileMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton>
          <Icon w="28px" h="28px">
            <IoMdMenu size="26px" />
          </Icon>
        </MenuButton>
        <MenuList bg="#282828" bgImg="/images/Backtest-Results-bg.png" p="8px" w="320px">
          <Box>
            <NavBtn onClick={() => jumpAnchor('Home')}>Home</NavBtn>
            <NavBtn onClick={() => jumpAnchor('Mechanism')}>Mechanism</NavBtn>
            <NavBtn onClick={() => jumpAnchor('Strategy')}>Strategy</NavBtn>
            {/* <Item onClick={() => jumpAnchor('Team')}>Team</Item> */}
            <NavBtn onClick={() => jumpAnchor('Partners')}>Partners</NavBtn>
            <NavBtn onClick={() => jumpAnchor('Roadmap')}>Roadmap</NavBtn>
            <NavBtn onClick={() => jumpAnchor('Litepaper')}>Litepaper</NavBtn>
            <NavBtn onClick={() => jumpAnchor('About')}>About</NavBtn>
            {/* <Button
              color="#c8c8c8"
              fontWeight="400"
              padding="12px 21px"
              sx={{
                // background: '#131313',
                'border-radius': '18px',
                bg: 'url(/images/office-links-btn-bg.png) no-repeat',
                bgSize: 'cover',
              }}
              onClick={() => jumpAnchor('Footer')}
            >
              Official Links
            </Button> */}
          </Box>
        </MenuList>
      </Menu>
    </>
  )
}

export const NavigationBar: FC = () => {
  const { history } = useRouter()
  const isMobile = useIsMobile()
  const router = history.location.pathname

  return (
    <Center as="nav" className={router === '/' ? '' : 'black'} w="100%" id="Home">
      <Flex justify="space-between" w="100%" maxW="1200px" px="20px" align="center" h="100px">
        <Box as={Link} to="/">
          <Logo w="126px" h="36px" />
        </Box>
        {isMobile ? (
          <>
            <MobileMenu />
          </>
        ) : (
          <HStack gap="40px" fontSize="16px">
            {/* Home       Mechanism       Strategy       Roadmap       Litepaper  */}
            <NavBtn onClick={() => jumpAnchor('Home')}>Home</NavBtn>
            <NavBtn onClick={() => jumpAnchor('Mechanism')}>Mechanism</NavBtn>
            <NavBtn onClick={() => jumpAnchor('Strategy')}>Strategy</NavBtn>
            {/* <Item onClick={() => jumpAnchor('Team')}>Team</Item> */}
            <NavBtn onClick={() => jumpAnchor('Partners')}>Partners</NavBtn>
            <NavBtn onClick={() => jumpAnchor('Roadmap')}>Roadmap</NavBtn>
            <NavBtn onClick={() => jumpAnchor('Litepaper')}>Litepaper</NavBtn>
            <NavBtn onClick={() => jumpAnchor('About')}>About</NavBtn>
            {/* <Button
              color="#c8c8c8"
              fontWeight="400"
              padding="12px 21px"
              sx={{
                // background: '#131313',
                'border-radius': '18px',
                bg: 'url(/images/office-links-btn-bg.png) no-repeat',
                bgSize: 'cover',
              }}
              onClick={() => jumpAnchor('Footer')}
            >
              Official Links
            </Button> */}
          </HStack>
        )}
      </Flex>
    </Center>
  )
}
