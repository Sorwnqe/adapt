import { Box, Center, Flex } from '@chakra-ui/react'
import HomeCard from './card'
import { motion } from 'framer-motion'

const MarketChanges = () => {
  return (
    <motion.div
      style={{ width: '100%', position: 'relative' }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.4 },
      }}
    >
      <Center w="100%" mt="40px">
        <Flex
          maxW="1200px"
          color="#fff"
          w="100%"
          pb={{ base: '22px', md: '82px' }}
          px="20px"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box w="100%">
            {/* <Heading
              mb="34px"
              fontSize={{ base: '24px', md: '40px' }}
              lineHeight={{ base: '24px', md: '46px' }}
              fontWeight="400"
              color="#fff"
            >
              Market changes So…we just Adapt.
              <br />
            </Heading>
            <Text color="#868686" fontSize="19px">
              Meta-RL lets AI trading agents adapt to
            </Text>
            <Text color="#868686" fontSize="19px">
              any market - without retraining
            </Text> */}

            <Flex mt="50px" gap="30px" w="100%" justify="space-between">
              <HomeCard />
            </Flex>
          </Box>
        </Flex>
      </Center>
    </motion.div>
  )
}

export default MarketChanges
