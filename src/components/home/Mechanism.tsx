import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Mechanism = () => {
  return (
    <>
      <Box maxW="1200px" px={{ base: '20px' }}>
        <motion.div
          style={{ width: '100%' }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1.25 },
          }}
        >
          <Flex flexDirection="column" mt={{ base: '20px', md: '0' }}>
            <Heading
              fontSize={{ base: '24px', md: '40px' }}
              fontWeight="400"
              lineHeight="1.2"
              mb="30px"
            >
              Agent Network in Action
            </Heading>
            <Text my="12px" fontSize="20px">
              Unleash the Swarm: Millions of Strategies, One Adaptive Empire
            </Text>

            <Text fontSize="18px" my="12px" color="#868686">
              Integrate external strategies via Adapt SDK to forge autonomous agents that
              collaborate in real-time. ANP3 drives seamless trade settlements, while emergent
              intelligence hedges risks, amplifies wins, and maximizes collective yields through any
              volatility.
            </Text>
            <Text fontSize="18px" color="#868686">
              No silos. No delays. Exponential edge.
            </Text>
            <Image mt="35px" src="/images/Agent-Network-in-Action1.png" />
          </Flex>
        </motion.div>
      </Box>
    </>
  )
}

export default Mechanism
