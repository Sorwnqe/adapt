import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const HomeCard = () => {
  return (
    <Box
      w="100%"
      bg="linear-gradient(to bottom, #000000, #121212)"
      // bgImg={{ base: '/images/Backtest-Results-bg.png', md: 'unset' }}
      border="1px solid rgba(255, 255, 255, 0.1)"
      borderRadius="16px"
      p={{ base: '20px 40px', md: '33px 60px' }}
      backdropFilter="blur(8px)"
      transition="all 0.5s ease"
      cursor="pointer"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={{ base: '10px', md: '24px' }}
      >
        {/* Card 1: Meta-RL Agen */}
        <Box position="relative" overflow="hidden" w={{ base: 'calc(50% - 10px)', md: 'auto' }}>
          {/* 图标 */}
          <Box position="relative" zIndex="1" textAlign="left">
            <Text
              fontWeight="bold"
              fontSize={{ base: '50px', md: '57px' }}
              color="#fff"
              opacity="0.2"
            >
              01
            </Text>
          </Box>

          <Heading
            fontSize={{ base: '20px', md: '23px' }}
            fontWeight="400"
            color="white"
            mt="14px"
            lineHeight="1.3"
          >
            Meta-RL+Region <br />
            Detection
          </Heading>

          {/* <Text fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400" maxW="60%">
          Reinforcement Learning for Automated Evolution and Improvement Processes
        </Text> */}
        </Box>

        {/* Card 2: Trade the Weather */}
        <Box position="relative" overflow="hidden" w={{ base: 'calc(50% - 10px)', md: 'auto' }}>
          {/* 图标 */}
          <Box position="relative" zIndex="1">
            <Text
              fontWeight="bold"
              fontSize={{ base: '50px', md: '57px' }}
              color="#fff"
              opacity="0.2"
            >
              02
            </Text>
          </Box>

          <Heading
            fontSize={{ base: '20px', md: '23px' }}
            fontWeight="400"
            color="white"
            mt="14px"
            lineHeight="1.3"
          >
            HMMS
          </Heading>

          {/* <Text fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400" maxW="60%">
          When conditions change, tactics switch automatically —fearless of market volatility.
        </Text> */}
        </Box>

        {/* Card 3: Beyond Single Tasks */}
        <Box position="relative" overflow="hidden" w={{ base: 'calc(50% - 10px)', md: 'auto' }}>
          {/* 图标 */}
          <Box position="relative" zIndex="1">
            <Text
              fontWeight="bold"
              fontSize={{ base: '50px', md: '57px' }}
              color="#fff"
              opacity="0.2"
            >
              03
            </Text>
          </Box>

          <Heading
            fontSize={{ base: '20px', md: '23px' }}
            fontWeight="400"
            color="white"
            mt="14px"
            lineHeight="1.3"
          >
            Beyond Single <br />
            Tasks
          </Heading>

          {/* <Text fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400" maxW="60%">
          Generalizes from rewards alone, No retraining needed
        </Text> */}
        </Box>

        {/* Card 4: Community-Driven */}
        <Box position="relative" overflow="hidden" w={{ base: 'calc(50% - 10px)', md: 'auto' }}>
          {/* 图标 */}
          <Box position="relative" zIndex="1">
            <Text
              fontWeight="bold"
              fontSize={{ base: '50px', md: '57px' }}
              color="#fff"
              opacity="0.2"
            >
              04
            </Text>
          </Box>

          <Heading
            fontSize={{ base: '20px', md: '23px' }}
            fontWeight="400"
            color="white"
            mt="14px"
            lineHeight="1.3"
          >
            Community <br /> Driven
          </Heading>

          {/* <Text fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400" maxW="60%">
          Harnesses community consensus to enhance RL agent's self-optimization
        </Text> */}
        </Box>
      </Flex>
      <Box w="100%" mt="32px">
        <Text fontSize="13px" color="#868686">
          ·Intelligently Adjusts, Filters Strategies Adapt to Any Market, No Retraining.
        </Text>
      </Box>
    </Box>
  )
}
export default HomeCard
