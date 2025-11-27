import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

const HomeCard = () => {
  return (
    <Box w="100%" backdropFilter="blur(8px)" transition="all 0.5s ease" cursor="pointer">
      <SimpleGrid columns={{ base: 1, md: 4 }} w="100%" gap={{ base: '10px', md: '30px' }}>
        <Box
          position="relative"
          p="24px"
          borderRadius="18px"
          bg="#000"
          transition="all 0.5s ease"
          sx={{
            '.icon-show': {
              transition: 'all 0.6s ease',
              opacity: 0,
              transform: 'translate(25%, 0%)',
            },
          }}
          _hover={{
            background: '#202020',
            borderTopLeftRadius: '50%',

            '.icon-show': {
              opacity: 1,
              transform: 'translate(25%, -50%)',
            },
          }}
        >
          <Box position="absolute" top="0" left="25%" w="120px" h="auto" className="icon-show">
            <Image src="/images/homecard/Adapt-or-Bleed.png" w="120px" objectFit="contain" />
          </Box>
          <Heading
            fontSize={{ base: '20px', md: '23px' }}
            fontWeight="400"
            color="white"
            mt="50px"
            lineHeight="1.3"
          >
            Real-Time Adaptation
          </Heading>

          <Text mt="20px" fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400">
            Detect shifts milliseconds ahead, coordinating buys, sells, and hedges network-wide for
            flawless execution.
          </Text>
        </Box>
        <Box
          position="relative"
          p="24px"
          borderRadius="18px"
          bg="#000"
          transition="all 0.5s ease"
          sx={{
            '.icon-show': {
              transition: 'all 0.6s ease',
              opacity: 0,
              transform: 'translate(25%, 0%)',
            },
          }}
          _hover={{
            background: '#202020',
            borderTopLeftRadius: '50%',

            '.icon-show': {
              opacity: 1,
              transform: 'translate(25%, -50%)',
            },
          }}
        >
          <Box position="absolute" top="0" left="25%" w="120px" h="auto" className="icon-show">
            <Image src="/images/homecard/Adapt-or-Bleed.png" w="120px" objectFit="contain" />
          </Box>
          <Heading
            fontSize={{ base: '20px', md: '23px' }}
            fontWeight="400"
            color="white"
            mt="50px"
            lineHeight="1.3"
          >
            Expert-Like Precision
          </Heading>

          <Text mt="20px" fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400">
            Specialized agents (e.g., sentiment analysis, volatility forecasting) collaborate to
            forge superior strategies from shared signals.
          </Text>
        </Box>
        <Box
          position="relative"
          p="24px"
          borderRadius="18px"
          bg="#000"
          transition="all 0.5s ease"
          sx={{
            '.icon-show': {
              transition: 'all 0.6s ease',
              opacity: 0,
              transform: 'translate(25%, 0%)',
            },
          }}
          _hover={{
            background: '#202020',
            borderTopLeftRadius: '50%',

            '.icon-show': {
              opacity: 1,
              transform: 'translate(25%, -50%)',
            },
          }}
        >
          <Box position="absolute" top="0" left="25%" w="120px" h="auto" className="icon-show">
            <Image src="/images/homecard/Adapt-or-Bleed.png" w="120px" objectFit="contain" />
          </Box>
          <Heading
            fontSize={{ base: '20px', md: '23px' }}
            fontWeight="400"
            color="white"
            mt="50px"
            lineHeight="1.3"
          >
            Resilient Edge
          </Heading>

          <Text mt="20px" fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400">
            In crypto volatility, solo agents crumble. Our network thrives, outperforming 2-3x in
            backtested bears via emergent behaviors no single agent can match.
          </Text>
        </Box>
        <Box
          position="relative"
          p="24px"
          borderRadius="18px"
          bg="#000"
          transition="all 0.5s ease"
          sx={{
            '.icon-show': {
              transition: 'all 0.6s ease',
              opacity: 0,
              transform: 'translate(25%, 0%)',
            },
          }}
          _hover={{
            background: '#202020',
            borderTopLeftRadius: '50%',

            '.icon-show': {
              opacity: 1,
              transform: 'translate(25%, -50%)',
            },
          }}
        >
          <Box position="absolute" top="0" left="25%" w="120px" h="auto" className="icon-show">
            <Image src="/images/homecard/Adapt-or-Bleed.png" w="120px" objectFit="contain" />
          </Box>
          <Heading
            fontSize={{ base: '20px', md: '23px' }}
            fontWeight="400"
            color="white"
            mt="50px"
            lineHeight="1.3"
          >
            Scale Revolutio
          </Heading>

          <Text mt="20px" fontSize="15px" color="#868686" lineHeight="1.6" fontWeight="400">
            Millions converge to forge a new economic layer—emergent markets, hyper-liquidity, quant
            renaissance redefining crypto frontiers.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
export default HomeCard
