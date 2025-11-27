import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SuiLogo from '../icons/SuiLogo'
import useIsMobile from '../../hooks/useIsMobile'

const ANP3AndSui = () => {
  const isMobile = useIsMobile()
  return (
    <Box position="relative" h={{ base: 'auto', md: '500px' }} w="100%" maxW="1200px">
      <motion.div
        style={{ width: '100%' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 1.25 },
        }}
      >
        <Flex
          w={{ base: '100%', md: '30%' }}
          flexDirection="column"
          ml={{ base: '0', md: '15%' }}
          pt="80px"
          px="20px"
        >
          <Text color="#979797" fontSize="20px">
            Adapt ANP3 is the major agent network protocol which allows agentic payment and
            collective intelligence,
          </Text>
          <Text mt="20px">beyond just the first x402 on SUI</Text>
          {isMobile && (
            <Center>
              <SuiLogo width={50} height={40} />
            </Center>
          )}
        </Flex>
        <Box
          position="absolute"
          top={0}
          left={0}
          zIndex={-1}
          display={{ base: 'none', md: 'block' }}
        >
          <Image w="100%" src="/images/Agent-Network-Protocol-(ANP3)3.png" />
        </Box>
      </motion.div>
    </Box>
  )
}

export default ANP3AndSui
