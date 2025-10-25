import { motion } from 'framer-motion'
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import titleAnimation from '../../ani'

const Quant = () => {
  return (
    <>
      <motion.div
        style={{ width: '100%' }}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
      >
        <Center w="100%" color="#fff" px="20px" mt="120px">
          <Box maxW="1200px" w="100%">
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
                  GT-Quant
                </Heading>

                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  color="#888"
                  mb="20px"
                  lineHeight="1.6"
                >
                  Returns from quantitative arbitrage not only provide
                  <br />
                  liquidity for BTC DCA but also cover the principal
                  <br /> input of primary investments.
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
                    opacity={0.8}
                  >
                    {/* Grid Lines */}
                    <Image src="/images/performance-r.png" objectFit="contain" w="100%" h="100%" />
                  </Box>
                </motion.div>
              </Box>
            </Flex>

            {/* Navigation Dots */}
          </Box>
        </Center>
      </motion.div>
    </>
  )
}
export default Quant
