import { createFileRoute } from '@tanstack/react-router'
import { Box, Center, Flex, Heading, Text, Button, Divider } from '@chakra-ui/react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import TasselEffect from '../components/TasselEffect'
import About from '../components/home/About'
import titleAnimation from '../ani'
import Pioneer from '../components/home/Pioneer'
// import Team from '../components/home/Team'
import MarketChanges from '../components/home/MarketChanges'
import HeroCarousel from '../components/home/HeroCarousel'
import Mechanism from '../components/home/Mechanism'
import Roadmap from '../components/home/Roadmap'
import Protocol from '../components/home/Protocol'
import ANP3AndSui from '../components/home/ANP3AndSui'
import Partners from '../components/home/Partners'
import LitePaper from '../components/home/LitePaper'

export const Route = createFileRoute('/')({
  component: Index,
})

const GraduallyEnteringTextKeyframes = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const t = (text: string) => text

const GraduallyEnteringText: FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  return text.split('').map((char, i) => (
    <Box
      className="orbitronFont"
      as="span"
      key={i}
      animation={`${GraduallyEnteringTextKeyframes} 1500ms linear forwards`}
      opacity={0}
      style={{
        animationDelay: `${delay + i * 40}ms`,
      }}
    >
      {char}
    </Box>
  ))
}

function Index() {
  return (
    <Center
      w="100%"
      flexDirection="column"
      sx={{
        '.center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      overflow="hidden"
    >
      <Center width="100%" top={0} left={0} position="absolute" zIndex="-1">
        <Box width="100%" maxW="1580px" h={{ base: '600px', md: '900px' }} opacity={0.5}>
          <video
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/BlackFuturisticComingSoon.mp4" type="video/mp4"></source>
          </video>
        </Box>
      </Center>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delay: 1 },
        }}
      >
        <Flex
          direction="column"
          w="100%"
          maxW="1200px"
          align="center"
          px="20px"
          h={{ base: '500px', md: '900px' }}
        >
          <Center textAlign="center" h="100%">
            <Heading
              fontSize={{ base: '32px', md: '55px' }}
              fontWeight="bold"
              color="#fff"
              animation={`${titleAnimation} 5s infinite linear`}
              minH={{ base: 'auto', xl: '400px' }}
              lineHeight={{ base: '42px', md: '66px' }}
            >
              <GraduallyEnteringText text={'AI That Adapts'} />
              <br />
              <GraduallyEnteringText text={t('Market That Reward.')} />
              <br />
              <Text
                mt={10}
                fontSize={{ base: '16px', md: '22px' }}
                color="#C5C5C5"
                fontWeight={400}
                lineHeight="28px"
              >
                The 1st Agent Network Protocol (ANP3) for crypto trading. Connected agents empower
              </Text>
              <Text
                fontSize={{ base: '16px', md: '22px' }}
                color="#C5C5C5"
                fontWeight={400}
                lineHeight="28px"
              >
                expert-like trading & real-time market adaptation.
              </Text>

              <Button
                w={{ base: '180px', md: '234px' }}
                h={{ base: '38px', md: '49px' }}
                mt={{ base: '40px', md: '60px' }}
                color="#c8c8c8"
                fontWeight="700"
                padding="15px 60px"
                fontSize={{ base: '18px', md: '22px' }}
                borderRadius="24px"
                as="a"
                href="https://nodes.adapt-anp3.ai"
                rel="noopener noreferrer"
                sx={{
                  // background: '#131313',
                  'border-radius': '18px',
                  bg: 'url(/images/join-Wishlist.png) no-repeat',
                  bgSize: 'cover',
                }}
              >
                Mint NFT
              </Button>
            </Heading>
          </Center>
        </Flex>

        <Center position="relative">
          <TasselEffect />
        </Center>
      </motion.div>
      {/* <Box>
        <motion.div
          style={{ width: '100%' }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
        >
          <Flex gap="10px" mt="20px">
            <Box color="#777777">Home 02</Box>
            <Box>Mechanism</Box>
          </Flex>
        </motion.div>
      </Box> */}
      <HeroCarousel />
      <About />
      <MarketChanges />
      {/* <Netutral /> */}
      <Protocol />
      <ANP3AndSui />
      <Mechanism />
      <Pioneer />
      <Roadmap />
      <Partners />
      {/* <Historical /> */}
      {/* <Vision /> */}
      {/* <Team2 /> */}
      <LitePaper />
      {/* <FAQ /> */}
      <Divider />
    </Center>
  )
}
