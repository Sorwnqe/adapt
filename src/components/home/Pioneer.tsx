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
      <Center pb="300px" pos="relative">
        <Box maxW="1280px" w="100%" mt="120px" mb="60px">
          <Heading
            fontSize={{ base: '36px', md: '40px' }}
            fontWeight="400"
            lineHeight="1.2"
            mb="60px"
          >
            Pioneering the Liquidity Future
          </Heading>
          <Flex align="center" gap="60px">
            {/* Unrivaled Legacy */}
            <Box>
              <Heading fontSize="24px" fontWeight="600" mb="16px" color="white">
                01. On-Chain Finance
              </Heading>
              <Text fontSize="16px" color="#888" lineHeight="1.6">
                The SEC’s “Project Crypto” integrates America’s trillion-dollar markets onto
                blockchain. AdaptAI drives this vision with AI-powered trading, boosting
                transparency and liquidity.
              </Text>
            </Box>
            <Flex direction="column" gap="60px">
              <Box>
                <Heading fontSize="24px" fontWeight="600" mb="16px" color="white">
                  01. On-Chain Finance
                </Heading>
                <Text fontSize="16px" color="#888" lineHeight="1.6">
                  The SEC’s “Project Crypto” integrates America’s trillion-dollar markets onto
                  blockchain. AdaptAI drives this vision with AI-powered trading, boosting
                  transparency and liquidity.
                </Text>
              </Box>
              <Box>
                <Heading fontSize="24px" fontWeight="600" mb="16px" color="white">
                  01. On-Chain Finance
                </Heading>
                <Text fontSize="16px" color="#888" lineHeight="1.6">
                  The SEC’s “Project Crypto” integrates America’s trillion-dollar markets onto
                  blockchain. AdaptAI drives this vision with AI-powered trading, boosting
                  transparency and liquidity.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box w="70%" pos="absolute" bottom="0" left={0} zIndex="-1">
          <video src="White-Particle.mp4" autoPlay muted loop />
        </Box>
      </Center>
    </motion.div>
  )
}
export default Pioneer
