import { Box, Center } from '@chakra-ui/react'
import useIsMobile from '../../hooks/useIsMobile'
import LogoLoop from '../LogoLoop'
import Title from './Title'

const Partners = () => {
  const isMobile = useIsMobile()
  const techLogos = [
    {
      src: '/images/logos/surge.png',
      title: 'Sui Network',
      href: 'https://sui.io/',
      description: (
        <>
          High-performance Layer 1, adopting <br /> Move language and object-centric <br />
          architecture.
        </>
      ),
    },
    {
      src: '/images/logos/surge.png',
      title: 'Cetus',
      href: 'https://www.cetus.zone/',
      description: (
        <>
          The leading DEX and liquidity infra on <br /> Sui, with cumulative trade volume ~$68
          billion.
        </>
      ),
    },
    {
      src: '/images/logos/surge.png',
      title: 'Navi',
      href: 'https://naviprotocol.io/',
      description: (
        <>
          The largest native lending & LSTDefi <br /> protocol on Sui, with TVL exceeding $500m.
        </>
      ),
    },
    {
      src: '/images/logos/surge.png',
      title: 'Surge',
      href: 'https://surgeai.io',
      description: (
        <>
          The First AI Agent Launchpad <br /> Built on SUI
        </>
      ),
    },
    {
      src: '/images/logos/surge.png',
      title: 'Sui Community',
      href: 'https://sui.io/community-events-hub',
      description: (
        <>
          Global Sui community unites worldwide <br /> developers, users, and contributors.
        </>
      ),
    },
  ]
  return (
    <Center w="100%" color="#fff" px="20px" id="Partners">
      <Box maxW="1200px" w="100%" mt={{ base: '0px', md: '100px' }} px={{ base: '0', md: '20px' }}>
        {/* 标题 */}
        <Box mb={{ base: '40px', md: '60px' }}>
          <Title>Partners</Title>
        </Box>
        <LogoLoop logos={techLogos} boxHeight={isMobile ? 200 : 300} isMobile={isMobile} />
      </Box>
    </Center>
  )
}
export default Partners
