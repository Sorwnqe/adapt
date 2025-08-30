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
            fontSize={{ base: '36px', md: '40px' }}
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
                  01. On-Chain Finance
                </Heading>
                <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                  The SEC’s “Project Crypto” integrates America’s trillion-dollar markets onto
                  blockchain. AdaptAI drives this vision with AI-powered trading, boosting
                  transparency and liquidity.
                </Text>
              </Box>
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
            src="White-Particle.mp4"
            autoPlay
            muted
            loop
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Box>
      </Center>
    </motion.div>
  )
}
export default Pioneer
