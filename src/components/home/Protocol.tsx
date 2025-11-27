import { motion } from 'framer-motion'
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import TasselEffect from '../TasselEffect'

const Protocol = () => {
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
        <Center w="100%" color="#fff" px="20px">
          <Box maxW="1200px" w="100%">
            {/* Left Content */}
            <Box maxW={{ base: '100%', lg: '' }}>
              <Heading
                fontSize={{ base: '32px', md: '40px' }}
                fontWeight="400"
                lineHeight="1.2"
                mb="30px"
              >
                Agent Network Protocol (ANP3)
              </Heading>
            </Box>

            <Center
              w="100%"
              alignItems="center"
              gap="20px"
              my="45px"
              flexWrap="wrap"
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Image
                src="/images/protocol/action1.png"
                w={{ base: '100%', md: 'auto' }}
                h={{ base: 'auto', md: '350px' }}
                objectFit="cover"
              />
              VS
              <Image
                src="/images/protocol/action2.png"
                w={{ base: 'auto', md: 'auto' }}
                h={{ base: '350px', md: '350px' }}
                objectFit="cover"
              />
            </Center>

            <Flex gap="30px" flexDirection={{ base: 'column', md: 'row' }}>
              <motion.div
                style={{ width: '100%' }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                <Box
                  sx={{ background: '#1D1D1D', 'border-radius': '18px 18px 0 0 ' }}
                  p="23px 19px"
                  fontSize="21px"
                >
                  The edge behind better performance
                </Box>
                <Box border=" 1px solid #272727" p="44px 23px" borderRadius="0 0 18px 18px">
                  <Box fontSize="19px">Single agents aren’t enough:</Box>
                  <Box fontSize="16px" color="#868686">
                    Real markets are complex. As shown in Alpha Arena, one unspecialized agent is
                    often inaccurate and lacks the skills needed for trading.
                  </Box>
                  <Box fontSize="19px" mt="20px">
                    ANP3 changes that:
                  </Box>
                  <Box fontSize="16px" color="#868686">
                    Our multi‑agent network coordinates specialized agents to build, adjust, and
                    optimize trading decisions with higher accuracy and speed.
                  </Box>
                </Box>
              </motion.div>
              <motion.div
                style={{ width: '100%' }}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                <Box
                  sx={{ background: '#1D1D1D', 'border-radius': '18px 18px 0 0 ' }}
                  p="23px 19px"
                  fontSize="21px"
                >
                  Why multi‑agent beats single‑agent
                </Box>
                <Box border=" 1px solid #272727" p="44px 23px" borderRadius="0 0 18px 18px">
                  <Box fontSize="19px">Higher accuracy:</Box>
                  <Box fontSize="16px" color="#868686">
                    Multi‑agent systems like ANP3 reach up to 88% decision accuracy vs. ~50% for
                    single agents (source: NVIDIA research).
                  </Box>
                  <Box fontSize="19px" mt="20px">
                    Condorcet Jury Theorem:
                  </Box>
                  <Box fontSize="16px" color="#868686">
                    When you combine enough agents that are each better than chance (&gt;50%), the
                    group decision approaches near‑perfect accuracy.
                  </Box>
                </Box>
              </motion.div>
            </Flex>

            <Box mt="33px">
              <Text color="#A5A5A5" fontSize="19px">
                * More specialized agents. Smarter collaboration. Better trades.
              </Text>
            </Box>
          </Box>
        </Center>
        <Center position="relative" mt="50px">
          <TasselEffect />
        </Center>
      </motion.div>
    </>
  )
}

export default Protocol
