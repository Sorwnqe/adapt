import { createFileRoute } from '@tanstack/react-router'
import { Box, Center, Flex, Heading, Text, Image, Button, Divider } from '@chakra-ui/react'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'
import HomeCard from '../components/home/card'
import TasselEffect from '../components/TasselEffect'
import Performance from '../components/home/Performance'
import titleAnimation from '../ani'
import Vision from '../components/home/Vision'
import Pioneer from '../components/home/Pioneer'
import Team from '../components/home/Team'
import LitePaper from '../components/home/LitePaper'
import FAQ from '../components/home/Faq'

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
            src="/video/BlackFuturisticComingSoon.mp4"
            autoPlay
            muted
            loop
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          ></video>
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
          maxW="1280px"
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
                {t('The 1st Meta Reinforcement Learning AI Agent that adapts to ALL ')}
              </Text>
              <Text
                fontSize={{ base: '16px', md: '22px' }}
                color="#C5C5C5"
                fontWeight={400}
                lineHeight="28px"
              >
                {t('complex market conditions.')}
              </Text>

              <Text
                fontSize={{ base: '16px', md: '22px' }}
                color="#C5C5C5"
                fontWeight={400}
                lineHeight="28px"
              >
                {t('Incubated by VakLabs technology.')}
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
                sx={{
                  // background: '#131313',
                  'border-radius': '18px',
                  bg: 'url(/images/join-Wishlist.png) no-repeat',
                  bgSize: 'cover',
                }}
              >
                Join Wishlist
              </Button>
            </Heading>
          </Center>
        </Flex>

        <Center position="relative">
          <TasselEffect />
        </Center>
      </motion.div>
      <Box>
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
      </Box>
      <motion.div
        style={{ width: '100%', position: 'relative' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <Center w="100%" mt="40px">
          <Flex
            maxW="1280px"
            color="#fff"
            w="100%"
            pb={{ base: '22px', md: '82px' }}
            px="20px"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Box
              pos={{ base: 'initial', md: 'absolute' }}
              bottom="0"
              left="0"
              w="100%"
              h="110%"
              zIndex="-1"
            >
              <Image src="/images/market-changes.png" w="100%" h="110%" objectFit="contain" />
            </Box>
            <Box>
              <Heading
                mb="34px"
                fontSize={{ base: '24px', md: '40px' }}
                lineHeight={{ base: '24px', md: '46px' }}
                fontWeight="400"
                color="#fff"
              >
                Market changes So…we just Adapt.
                <br />
              </Heading>
              <Text color="#868686" fontSize="19px">
                Meta-RL lets AI trading agents adapt to
              </Text>
              <Text color="#868686" fontSize="19px">
                any market - without retraining
              </Text>

              <Flex mt="50px" gap="30px" justify="space-between">
                <HomeCard />
              </Flex>
            </Box>
          </Flex>
        </Center>
      </motion.div>
      <Performance />
      <Vision />
      <Pioneer />
      <Team />
      <LitePaper />
      <FAQ />
      <Divider />
    </Center>
  )
}
