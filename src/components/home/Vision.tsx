import { motion } from 'framer-motion'
import { Box, Center, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import TasselEffect from '../TasselEffect'
import useIsMobile from '../../hooks/useIsMobile'

const Marker = () => {
  const isMobile = useIsMobile()
  return (
    <Box
      position="absolute"
      top="50%"
      left="10%"
      transform="translate(-50%, -50%)"
      zIndex={2}
      id="Vision"
    >
      {/* 实心圆点 */}
      <Box position="relative" w="8px" h="8px">
        {/* 实心圆 */}
        <Box w="8px" h="8px" borderRadius="50%" bg="#656565" position="relative" zIndex={2} />
        {/* 扩散波纹动画 */}
        <Ripple delay={0} />
        <Ripple delay={1} />
      </Box>

      {/* 折线路径 */}
      <Box
        width="180"
        height="40"
        style={{ position: 'absolute', top: '0', left: '100%' }}
        transform="scaleY(-1) translateY(100%)"
      >
        {isMobile ? (
          <svg>
            <polyline points="0,0 20,20 100,40" stroke="#656565" strokeWidth="1" fill="none" />
          </svg>
        ) : (
          <svg>
            <polyline points="0,0 20,20 180,40" stroke="#656565" strokeWidth="1" fill="none" />
          </svg>
        )}
      </Box>

      {/* 标签文字 */}
      <Text
        fontSize="12px"
        color="white"
        whiteSpace="nowrap"
        position="absolute"
        top="20px"
        left="0%"
        transform={{ base: 'translateX(-20%)', md: 'translateX(-50%)' }}
      >
        James Harris Simons
      </Text>
    </Box>
  )
}
const Ripple = ({ delay = 0 }) => (
  <motion.div
    style={{
      position: 'absolute',
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.4)',
      top: 0,
      left: 0,
    }}
    animate={{
      scale: [1, 3],
      opacity: [0, 0.5, 0],
    }}
    transition={{
      duration: 3,
      ease: 'easeOut',
      repeat: Infinity,
      delay,
    }}
  />
)
const Vision = () => {
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 },
      }}
    >
      <Center w="100%" mt={{ base: '60px', md: '120px' }} mb="60px">
        <Heading
          fontSize={{ base: '32px', md: '48px' }}
          fontWeight="600"
          color="white"
          textAlign="center"
        >
          Vision
        </Heading>
      </Center>

      <Center w="100%" color="#fff" px="20px">
        <Box maxW="1200px" w="100%">
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="flex-start"
            justify="space-between"
            gap="80px"
          >
            {/* Left Content */}
            <Box flex="1" maxW={{ base: '100%', lg: '600px' }}>
              <Heading
                fontSize={{ base: '32px', md: '48px' }}
                fontWeight="400"
                lineHeight="1.2"
                mb="60px"
              >
                Medallion Fund for the
                <br />
                Blockchain Era
              </Heading>

              <VStack align="flex-start" spacing="40px">
                {/* Unrivaled Legacy */}
                <Box>
                  <Heading
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="600"
                    mb="16px"
                    color="white"
                  >
                    Unrivaled Legacy
                  </Heading>
                  <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                    The Medallion Fund, founded by Nobel laureate Jim Simons, is the gold standard
                    of hedge funds, with a 66% average annual gross return (39% net) from 1988 to
                    2018.
                  </Text>
                </Box>

                {/* Similarities */}
                <Box>
                  <Heading
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="600"
                    mb="16px"
                    color="white"
                  >
                    Similarities
                  </Heading>
                  <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                    AdaptAI echoes the Medallion Fund with its data-driven quantitative core,
                    adaptive strategies, and focus on risk-adjusted returns.
                  </Text>
                </Box>

                {/* Open Access */}
                <Box>
                  <Heading
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="600"
                    mb="16px"
                    color="white"
                  >
                    Open Access
                  </Heading>
                  <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                    While the Medallion Fund remains exclusive, closed to outside investors, AdaptAI
                    embraces a fully open approach.
                  </Text>
                </Box>

                {/* Financial Democratization */}
                <Box>
                  <Heading
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="600"
                    mb="16px"
                    color="white"
                  >
                    Financial Democratization
                  </Heading>
                  <Text fontSize={{ base: '14px', md: '16px' }} color="#888" lineHeight="1.6">
                    Honoring the Medallion Fund's legacy, AdaptAI welcomes all to its mission of
                    world-class wealth creation.
                  </Text>
                </Box>
              </VStack>
            </Box>

            {/* Right Image Area */}
            <Box
              flex="1"
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* 动画波纹层 */}
              <Image src="/images/Vision.png" position="relative" zIndex={1} />
              <Marker />
            </Box>
          </Flex>

          {/* Navigation */}
          <Center mt="80px" gap="12px">
            <TasselEffect />
          </Center>

          <Center mt="20px" gap="20px">
            <Text color="#666" fontSize="14px">
              Vision 02
            </Text>
            <Text color="white" fontSize="14px" fontWeight="500">
              Pioneering the Liquidity Future
            </Text>
          </Center>
        </Box>
      </Center>
    </motion.div>
  )
}
export default Vision
