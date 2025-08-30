import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react'

const HomeCard = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
      gap="24px"
      w="100%"
    >
      {/* Card 1: Meta-RL Agen */}
      <Box
        bg="rgba(20, 20, 20, 54%)"
        border="1px solid rgba(255, 255, 255, 0.1)"
        bgImg={{ base: '/images/Backtest-Results-bg.png', md: 'unset' }}
        borderRadius="16px"
        p="28px"
        backdropFilter="blur(8px)"
        transition="all 0.5s ease"
        cursor="pointer"
        _hover={{
          transform: 'translateY(-8px)',
          bg: 'rgba(20, 20, 20, 64%)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 0 12px 6px rgba(255, 255, 255, 0.2)',
        }}
        minH="280px"
        position="relative"
        overflow="hidden"
      >
        {/* 图标 */}
        <Box w="48px" h="48px" mb="24px" position="relative" zIndex="1">
          <Box w="100%" h="100%" borderRadius="50%">
            <Image src="/images/meta-RL.png" w="100%" />
          </Box>
        </Box>

        <Heading fontSize="22px" fontWeight="600" color="white" mb="16px" lineHeight="1.3">
          Meta-RL Agent
        </Heading>

        <Text fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400" maxW="60%">
          Reinforcement Learning for Automated Evolution and Improvement Processes
        </Text>
      </Box>

      {/* Card 2: Trade the Weather */}
      <Box
        bg="rgba(20, 20, 20, 54%)"
        bgImg={{ base: '/images/Backtest-Results-bg.png', md: 'unset' }}
        border="1px solid rgba(255, 255, 255, 0.1)"
        borderRadius="16px"
        p="28px"
        backdropFilter="blur(8px)"
        transition="all 0.5s ease"
        cursor="pointer"
        _hover={{
          transform: 'translateY(-8px)',
          bg: 'rgba(20, 20, 20, 64%)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 0 12px 6px rgba(255, 255, 255, 0.2)',
        }}
        minH="280px"
        position="relative"
        overflow="hidden"
      >
        {/* 图标 */}
        <Box w="48px" h="48px" mb="24px" position="relative" zIndex="1">
          <Box w="100%" h="100%" borderRadius="50%">
            <Image src="/images/trade-the.png" w="100%" />
          </Box>
        </Box>

        <Heading fontSize="22px" fontWeight="600" color="white" mb="16px" lineHeight="1.3">
          Trade the Weather
        </Heading>

        <Text fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400" maxW="60%">
          When conditions change, tactics switch automatically —fearless of market volatility.
        </Text>
      </Box>

      {/* Card 3: Beyond Single Tasks */}
      <Box
        bg="rgba(20, 20, 20, 54%)"
        bgImg={{ base: '/images/Backtest-Results-bg.png', md: 'unset' }}
        border="1px solid rgba(255, 255, 255, 0.1)"
        borderRadius="16px"
        p="28px"
        backdropFilter="blur(8px)"
        transition="all 0.5s ease"
        cursor="pointer"
        _hover={{
          transform: 'translateY(-8px)',
          bg: 'rgba(20, 20, 20, 64%)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 0 12px 6px rgba(255, 255, 255, 0.2)',
        }}
        minH="280px"
        position="relative"
        overflow="hidden"
      >
        {/* 图标 */}
        <Box w="48px" h="48px" mb="24px" position="relative" zIndex="1">
          <Box w="100%" h="100%" borderRadius="50%">
            <Image src="/images/beyond-Single.png" w="100%" />
          </Box>
        </Box>

        <Heading fontSize="22px" fontWeight="600" color="white" mb="16px" lineHeight="1.3">
          Beyond Single Tasks
        </Heading>

        <Text fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400" maxW="60%">
          Generalizes from rewards alone, No retraining needed
        </Text>
      </Box>

      {/* Card 4: Community-Driven */}
      <Box
        bg="rgba(20, 20, 20, 54%)"
        bgImg={{ base: '/images/Backtest-Results-bg.png', md: 'unset' }}
        border="1px solid rgba(255, 255, 255, 0.1)"
        borderRadius="16px"
        p="28px"
        backdropFilter="blur(8px)"
        transition="all 0.5s ease"
        cursor="pointer"
        _hover={{
          transform: 'translateY(-8px)',
          bg: 'rgba(20, 20, 20, 64%)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 0 12px 6px rgba(255, 255, 255, 0.2)',
        }}
        minH="280px"
        position="relative"
        overflow="hidden"
      >
        {/* 图标 */}
        <Box w="48px" h="48px" mb="24px" position="relative" zIndex="1">
          <Box w="100%" h="100%" borderRadius="50%">
            <Image src="/images/community.png" w="100%" />
          </Box>
        </Box>

        <Heading fontSize="22px" fontWeight="600" color="white" mb="16px" lineHeight="1.3">
          Community-Driven
        </Heading>

        <Text fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400" maxW="60%">
          Harnesses community consensus to enhance RL agent's self-optimization
        </Text>
      </Box>
    </Grid>
  )
}
export default HomeCard
