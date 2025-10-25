import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Title from './Title'

const Pioneer = () => {
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 },
      }}
    >
      <motion.div
        style={{ width: '100%', position: 'relative' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <Box mt="104px">
          <Title>Strategy</Title>
        </Box>
      </motion.div>
      <Center pb={{ base: '50px', md: '300px' }} pos="relative" px="20px" id="Strategy">
        <Box maxW="1200px" w="100%" mt={{ base: '60px', md: '120px' }} mb="60px">
          <motion.div
            style={{ width: '100%', position: 'relative' }}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
          >
            <Heading
              fontSize={{ base: '32px', md: '40px' }}
              fontWeight="400"
              lineHeight="1.2"
              mb="60px"
            >
              Volatility=Profit.
              <br />
              Adapt, Earn, Strategy Evolves
            </Heading>
            <Box>
              <Text fontSize={{ base: '16px', md: '18px' }} color="#888" mb="20px" lineHeight="1.6">
                Crypto volatility=quant edge. AdaptAI’s flex quant solutions
                <br /> turn swings into gains-we adapt via nonstop strategy expansion.
              </Text>
            </Box>
          </motion.div>

          <Flex
            align="start"
            gap={{ base: '44px', md: '84px' }}
            justifyContent="space-around"
            direction={{ base: 'column', md: 'row' }}
            mt="64px"
          >
            <Flex direction="column" gap={{ base: '44px', md: '84px' }}>
              <motion.div
                style={{ width: '100%', position: 'relative' }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                {/* Unrivaled Legacy */}
                <Box border="1px solid rgba(219, 219, 219 , 0.3)" p="40px 47px" borderRadius="16px">
                  <Heading
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="600"
                    mb="16px"
                    color="white"
                  >
                    Risk-Tiered Portfolios
                  </Heading>
                  <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                    5-6 bundles: conservative → aggressive.
                    <br /> Adapt for risk-return balance.
                  </Text>
                </Box>
              </motion.div>
              <motion.div
                style={{ width: '100%', position: 'relative' }}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                <Box border="1px solid rgba(219, 219, 219 , 0.3)" p="40px 47px" borderRadius="16px">
                  <Heading
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="600"
                    mb="16px"
                    color="white"
                  >
                    Cross-Coin Gains
                  </Heading>
                  <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                    Earn across liquid cryptos (not just top coins).
                    <br /> Adapt for more potential.
                  </Text>
                </Box>
              </motion.div>
            </Flex>
            <Box>
              <motion.div
                style={{ width: '100%', position: 'relative' }}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                <Box border="1px solid rgba(219, 219, 219 , 0.3)" p="40px 47px" borderRadius="16px">
                  <Heading
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="600"
                    mb="16px"
                    color="white"
                  >
                    Time-Aligned Solutions
                  </Heading>
                  <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                    Short arbitrage, mid trend, long accumulation.
                    <br /> Pick your timeline.
                  </Text>
                </Box>
              </motion.div>
            </Box>
          </Flex>
        </Box>
        <Box
          w={{ base: '100%', md: '100%' }}
          h={{ base: '70%', md: 'auto' }}
          pos="absolute"
          bottom="0"
          left={{ base: '-20%', md: '-30%' }}
          zIndex="-1"
          opacity="0.5"
        >
          <video
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/White-Particle.mp4" type="video/mp4"></source>
          </video>
        </Box>
      </Center>
    </motion.div>
  )
}
export default Pioneer
