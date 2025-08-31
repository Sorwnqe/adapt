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
        <Center w="100%" mt={{ base: '60px', md: '120px' }} mb="60px" id="Performance">
          <Heading
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight="600"
            color="white"
            textAlign="center"
          >
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

                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="#888"
                  mb="20px"
                  lineHeight="1.6"
                >
                  The 2020-21 bull run concealed failures. Rigid traditional bots tried to buy the
                  dip,
                  <br /> resulting in significant losses for most in 2022. Unlike the others, we
                  adapt.
                </Text>

                <Text fontSize={{ base: '16px', md: '18px' }} color="#888" lineHeight="1.6">
                  AdaptAI sensed the bear, reduced risk, and even profited from shorts.
                </Text>
              </Box>

              {/* Right Chart Area */}
              <Box position="relative" minH="300px" mx="auto">
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
            <Center mt={{ base: '40px', md: '140px' }} gap="12px" w="100%">
              <TasselEffect />
            </Center>

            <Center gap="20px" pos="relative">
              <Image
                src="/images/performance-drop.png"
                pos="absolute"
                transform={{ base: 'translatey(10%)', md: 'translatey(20%)' }}
                zIndex="-1"
                maxW={{ base: '150%', md: '70%' }}
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
        <Center w="100%" mt={{ base: '60px', md: '120px' }} color="#fff" px="20px" bg="#000">
          <Box
            maxW="1280px"
            w="100%"
            bgImg="/images/performance-bg.png"
            bgSize="100%"
            bgRepeat="no-repeat"
            p={{ base: '30px 20px', md: '80px' }}
          >
            <Heading fontSize="21px" fontWeight="400" mb="30px">
              Backtest Results (2020-2023, BTC/ETH):
            </Heading>

            <Flex direction={{ base: 'column', lg: 'row' }} gap="60px" align="flex-start">
              {/* Charts Area */}
              <Image
                src="images/backtest-Result.png"
                width={{ base: '100%', md: '70%' }}
                ml={{ base: '0', md: '-40px' }}
              />

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
                    bgImg="/images/Backtest-Results-bg.png"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="12px"
                    p="24px"
                    ml={{ base: '0', md: '-30px' }}
                  >
                    <Heading fontSize={{ base: '16px', md: '18px' }} color="white" mb="12px">
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
                    bgImg="/images/54eafab4073b1f2eaf8226c8958c0a2.png"
                    bgSize="cover"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="12px"
                    p="24px"
                  >
                    <Heading fontSize={{ base: '16px', md: '18px' }} color="#000" mb="12px">
                      RL:
                    </Heading>
                    <Text fontSize="14px" color="#000" lineHeight="1.6">
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
