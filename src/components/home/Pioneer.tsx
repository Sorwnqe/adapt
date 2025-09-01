import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

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
      <Center pb={{ base: '50px', md: '300px' }} pos="relative" px="20px">
        <Box maxW="1280px" w="100%" mt={{ base: '60px', md: '120px' }} mb="60px">
          <Heading
            fontSize={{ base: '32px', md: '40px' }}
            fontWeight="400"
            lineHeight="1.2"
            mb="60px"
          >
            Pioneering the Liquidity Future
          </Heading>
          <Flex align="center" gap="60px" direction={{ base: 'column', md: 'row' }}>
            {/* Unrivaled Legacy */}
            <Box>
              <Heading
                fontSize={{ base: '20px', md: '24px' }}
                fontWeight="600"
                mb="16px"
                color="white"
              >
                01. On-Chain Finance
              </Heading>
              <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                The SEC’s “Project Crypto” integrates America’s trillion-dollar markets onto
                blockchain. AdaptAI drives this vision with AI-powered trading, boosting
                transparency and liquidity.
              </Text>
            </Box>
            <Flex direction="column" gap="60px">
              <Box>
                <Heading
                  fontSize={{ base: '20px', md: '24px' }}
                  fontWeight="600"
                  mb="16px"
                  color="white"
                >
                  02. Democratized, Efficient Markets
                </Heading>
                <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                  AdaptAI fuses AI and Web3, leveraging community-driven learning to optimize
                  trading and align with the Efficient Market Hypothesis, enhancing liquidity
                  through accessible tools.
                </Text>
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: '20px', md: '24px' }}
                  fontWeight="600"
                  mb="16px"
                  color="white"
                >
                  03. Invest in the Liquidity Future
                </Heading>
                <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                  Investing in AdaptAI is investing in the liquidity future, where AI and collective
                  innovation create a dynamic, accessible crypto ecosystem for all.
                </Text>
              </Box>
            </Flex>
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
          >
            <source src="/video/White-Particle.mp4" type="video/mp4"></source>
          </video>
        </Box>
      </Center>
    </motion.div>
  )
}
export default Pioneer
