import { motion } from 'framer-motion'
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'

const Netutral = () => {
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
        <Center w="100%" color="#fff" px="20px" mt="66px">
          <Box maxW="1200px" w="100%">
            {/* Left Content */}
            <Box flex="1" maxW={{ base: '100%', lg: '' }}>
              <Heading
                fontSize={{ base: '30px', md: '40px' }}
                fontWeight="400"
                lineHeight="1.2"
                mb="30px"
              >
                Neutral Strategy:
                <br />
                Effective Low-Risk Arbitrage Returns
              </Heading>
            </Box>

            {/* Right Chart Area */}
            <Flex
              position="relative"
              mx="auto"
              justifyContent="space-between"
              flexWrap="wrap"
              mt={{ base: '50px', md: '101px' }}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 1 },
                }}
              >
                <Flex alignItems="center" direction="column">
                  <Image src="/images/Performance-3.png" w="165px" h="165px" />

                  <Text fontSize={{ base: '16px', md: '18px' }} color="#888" mt="25px">
                    Funding rate <br />
                    Arbitrage
                  </Text>
                </Flex>
                {/* Performance Chart Placeholder */}
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 1.25 },
                }}
              >
                <Flex alignItems="center" direction="column">
                  <Image src="/images/Performance-3.png" w="165px" h="165px" />

                  <Text fontSize="18px" color="#888" mt="25px">
                    Futures-to-spot
                    <br />
                    spread Arbitrage
                  </Text>
                </Flex>
                {/* Performance Chart Placeholder */}
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 1.5 },
                }}
              >
                <Flex alignItems="center" direction="column">
                  <Image src="/images/Performance-3.png" w="165px" h="165px" />

                  <Text fontSize="18px" color="#888" mt="25px">
                    Cross-exchange
                    <br />
                    spread Arbitrage
                  </Text>
                </Flex>
                {/* Performance Chart Placeholder */}
              </motion.div>
            </Flex>

            {/* Navigation Dots */}
          </Box>
        </Center>
      </motion.div>
    </>
  )
}
export default Netutral
