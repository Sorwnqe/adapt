import { motion } from 'framer-motion'
import { Box, Center, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import TasselEffect from '../TasselEffect'
import titleAnimation from '../../ani'

const Performance = () => {
  return (
    <>
      <motion.div
        style={{ width: '100%' }}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0 },
        }}
      >
        <Center w="100%" mt="120px" mb="60px">
          <Heading fontSize="48px" fontWeight="600" color="white" textAlign="center">
            Performance
          </Heading>
        </Center>
      </motion.div>
      <motion.div
        style={{ width: '100%' }}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
      >
        <Center w="100%" color="#fff" px="20px">
          <Box maxW="1280px" w="100%">
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              align="flex-start"
              justify="space-between"
              gap="60px"
            >
              {/* Left Content */}
              <Box flex="1" maxW={{ base: '100%', lg: '' }}>
                <Heading
                  fontSize={{ base: '32px', md: '40px' }}
                  fontWeight="400"
                  lineHeight="1.2"
                  mb="30px"
                >
                  Adapt or Bleed...
                  <br />
                  We outperform.
                </Heading>

                <Text fontSize="18px" color="#888" mb="20px" lineHeight="1.6">
                  The 2020–21 bull run masked failures; most lost it all in
                  <br /> 2022 as rigid bots bought the dip to ruin.
                </Text>

                <Text fontSize="18px" color="#888" lineHeight="1.6">
                  AdaptAI sensed the bear, reduced risk, and even
                  <br /> profited from shorts.
                </Text>
              </Box>

              {/* Right Chart Area */}
              <Box position="relative" minH="400px">
                <motion.div
                  style={{ width: '100%' }}
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                >
                  {/* Performance Chart Placeholder */}
                  <Box
                    w="100%"
                    h="300px"
                    bg="rgba(255, 255, 255, 0.03)"
                    borderRadius="12px"
                    position="relative"
                    overflow="hidden"
                    animation={`${titleAnimation} 5s infinite linear`}
                  >
                    {/* Grid Lines */}
                    <Image src="/images/performance-r.png" objectFit="contain" w="100%" h="100%" />
                  </Box>
                </motion.div>
              </Box>
            </Flex>

            {/* Navigation Dots */}
            <Center mt="40px" gap="12px" w="100%">
              <TasselEffect />
            </Center>

            <Center gap="20px" pos="relative">
              <Image
                src="/images/performance-drop.png"
                pos="absolute"
                transform="translatey(20%)"
                zIndex="-1"
              />
              <Text color="#666" fontSize="14px">
                Performance 02
              </Text>
              <Text color="white" fontSize="14px" fontWeight="500">
                Backtest Results
              </Text>
            </Center>
          </Box>
        </Center>
      </motion.div>
      <motion.div
        style={{ width: '100%' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.8 },
        }}
      >
        <Center w="100%" mt="120px" color="#fff" px="20px">
          <Box maxW="1280px" w="100%">
            <Heading fontSize="21px" fontWeight="400" mb="60px">
              Backtest Results (2020-2023, BTC/ETH):
            </Heading>

            <Flex direction={{ base: 'column', lg: 'row' }} gap="60px" align="flex-start">
              {/* Charts Area */}
              <Image src="images/backtest-Result.png" width="70%" ml="-40px" />

              {/* Info Cards */}
              <VStack spacing="20px" flex="1">
                {/* Static Card */}
                <motion.div
                  style={{ width: '100%' }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 1 },
                  }}
                >
                  <Box
                    w="100%"
                    bg="rgba(255, 255, 255, 0.05)"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="12px"
                    p="24px"
                    ml="-30px"
                  >
                    <Heading fontSize="18px" color="white" mb="12px">
                      Static:
                    </Heading>
                    <Text fontSize="14px" color="#B0B0B0" lineHeight="1.6">
                      Mean Reversion, Moving-Average Crossover Momentum
                    </Text>
                  </Box>
                </motion.div>
                {/* RL Card */}{' '}
                <motion.div
                  style={{ width: '100%' }}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 1.5 },
                  }}
                >
                  <Box
                    w="100%"
                    bg="rgba(255, 255, 255, 0.05)"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="12px"
                    p="24px"
                  >
                    <Heading fontSize="18px" color="white" mb="12px">
                      RL:
                    </Heading>
                    <Text fontSize="14px" color="#B0B0B0" lineHeight="1.6">
                      PPO-driven, dynamic sub-strategy /cash switching (regime-aware)
                    </Text>
                  </Box>
                </motion.div>
              </VStack>
            </Flex>
          </Box>
        </Center>
      </motion.div>
    </>
  )
}
export default Performance
