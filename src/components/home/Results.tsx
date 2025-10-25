import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { columns, data } from './config'
import TasselEffect from '../TasselEffect'

const Results = () => {
  return (
    <Box maxW="1200px" w="100%" px="20px">
      <motion.div
        style={{ width: '100%', position: 'relative' }}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <Heading
          fontSize={{ base: '32px', md: '40px' }}
          fontWeight="400"
          lineHeight="1.2"
          mb="30px"
        >
          Pick Your Comfort, Earn Your Fit
        </Heading>
        <Box>
          <Text fontSize={{ base: '16px', md: '18px' }} color="#888" mb="20px" lineHeight="1.6">
            Strategies tailored to every risk appetite—from conservative to aggressive, <br />
            AdaptAI matches your style to steady gains.
          </Text>
        </Box>
      </motion.div>
      <Center w="100%" mt={{ base: '60px', md: '120px' }} color="#fff" bg="#000">
        <Box
          maxW="1200px"
          w="100%"
          // bgImg="/images/performance-bg.png"
          backgroundSize="cover"
          bgSize="100%"
          bgRepeat="no-repeat"
          // 渐变#121212 -> #00000
          bg="linear-gradient(to bottom, #121212, #000000)"
          p={{ base: '30px 25px', md: '40px 60px' }}
          borderRadius={{ base: '24px', md: '48px' }}
          position="relative"
        >
          <Image src="images/performance-bg.png" w="100%" position="absolute" top="0" left="0" />

          <motion.div
            style={{ width: '100%' }}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
          >
            <Flex gap="10px" alignItems="center" mb="30px">
              <Box background="#343434" p="5px 12px" borderRadius="7px">
                MYquant
              </Box>
              <Heading fontSize={{ base: '16px', md: '21px' }} fontWeight="400">
                Core-Stategy
              </Heading>
            </Flex>
          </motion.div>

          <Flex direction={{ base: 'column', lg: 'column' }} gap="60px" align="flex-start">
            {/* Charts Area */}
            <motion.div
              style={{ width: '100%' }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              <Image src="images/backtest-Result-2.png" width={{ base: '100%', md: '100%' }} />
            </motion.div>
            <motion.div
              style={{ width: '100%' }}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              <TableContainer w="100%" borderRadius="14px">
                <Table variant="simple">
                  <Thead bgColor="#191919">
                    <Tr>
                      {columns.map((f, i) => (
                        <Th
                          color="#D3D3D3"
                          borderRight={i < columns.length - 1 ? '1px solid #2B2B2B' : 'none'}
                          borderColor="#2B2B2B"
                          key={f.title}
                          textTransform="none"
                          fontSize={{ base: '14px', md: '16px' }}
                          p={{ base: '18px', md: '20px' }}
                          borderBottom="none"
                        >
                          {f.title}
                        </Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((d, i) => (
                      <Tr key={d.id}>
                        <Td
                          color="#868686"
                          borderRight="1px solid #2B2B2B"
                          borderColor="#2B2B2B"
                          textTransform="none"
                          fontSize={{ base: '12px', md: '14px' }}
                          p={{ base: '15px', md: '20px' }}
                          borderBottom={i <= columns.length + 1 ? '1px solid #2B2B2B' : 'none'}
                        >
                          {d.level}
                        </Td>
                        <Td
                          color="#868686"
                          borderRight="1px solid #2B2B2B"
                          borderColor="#2B2B2B"
                          textTransform="none"
                          fontSize={{ base: '13px', md: '14px' }}
                          p={{ base: '15px', md: '20px' }}
                          borderBottom={i <= columns.length + 1 ? '1px solid #2B2B2B' : 'none'}
                        >
                          {d.strategy}
                        </Td>
                        <Td
                          color="#868686"
                          borderRight="1px solid #2B2B2B"
                          borderColor="#2B2B2B"
                          textTransform="none"
                          fontSize={{ base: '13px', md: '14px' }}
                          p={{ base: '15px', md: '20px' }}
                          borderBottom={i <= columns.length + 1 ? '1px solid #2B2B2B' : 'none'}
                        >
                          {d.details}
                        </Td>
                        <Td
                          color="#868686"
                          borderColor="#2B2B2B"
                          textTransform="none"
                          fontSize={{ base: '13px', md: '14px' }}
                          p={{ base: '15px', md: '20px' }}
                          borderBottom={i <= columns.length + 1 ? '1px solid #2B2B2B' : 'none'}
                        >
                          {d.performance}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </motion.div>
          </Flex>

          <Center position="relative">
            <TasselEffect />
          </Center>
        </Box>
      </Center>
    </Box>
  )
}
export default Results
