import React, { ReactNode, useState } from 'react'
import { Box, Text, Flex, Icon, Heading, Center } from '@chakra-ui/react'
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { motion } from 'framer-motion'

// 类型定义
interface MonthData {
  month: string
  value: number
}

interface YearCardProps {
  year: string
  annualReturn: string
  data: MonthData[]
  defaultExpanded: boolean
  align: 'column' | 'row' | 'row-reverse' | 'column-reverse'
}

// 年份卡片组件
const YearCard: React.FC<YearCardProps> = ({
  year,
  annualReturn,
  data,
  defaultExpanded = false,
  align = 'column',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <Box
      borderWidth="1px"
      borderColor="rgba(255, 255, 255, 0.28)"
      borderRadius="3xl"
      p="23px 20px 23px 43px"
      bg="black"
      position="relative"
      overflow="hidden"
      transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      cursor="pointer"
      onClick={handleToggle}
      _hover={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
      display="flex"
      flexDirection={align}
      h="fit-content"
    >
      <Box
        maxH={isExpanded ? '400px' : '0px'}
        opacity={isExpanded ? 1 : 0}
        transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        overflow="hidden"
      >
        <Flex direction="column" align="center" mb={6}>
          <Text fontSize={{ base: '32px', md: '40px' }} lineHeight="1">
            {annualReturn}
          </Text>
          <Text fontSize={{ base: '14px', md: '14px' }} mt="13px" color="#8d8d8d">
            Cumul. Ann. (SI)
          </Text>
        </Flex>

        <Box h="300px" w="100%">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={4}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#444444', fontSize: 12 }}
              />
              <Bar
                dataKey="value"
                radius={[4, 4, 0, 0]}
                label={{
                  position: 'top',
                  fill: '#fff',
                  fontSize: 11,
                  formatter: (label: ReactNode) => `${label}%`,
                }}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill="rgba(68,68,68,0.8)" width={15} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Flex justify="space-between" align="center" mt={isExpanded ? 6 : 0}>
        <Text fontSize="40px" fontWeight="400">
          {year}
        </Text>
        <Flex
          justify="center"
          align="center"
          borderWidth="1.5px"
          borderColor="rgba(255, 255, 255, 0.28)"
          borderRadius="50%"
          w="40px"
          h="40px"
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.1)' }}
        >
          {isExpanded ? (
            <Icon as={IoIosArrowDown} size={20} />
          ) : (
            <Icon as={IoIosArrowUp} size={20} />
          )}
        </Flex>
      </Flex>

      {!isExpanded && (
        <Box position="absolute" top={0} left={0} right={0} h="1px" bg="rgba(255, 255, 255, 0.1)" />
      )}
    </Box>
  )
}

// 年度收益率图表主组件
const Historical = () => {
  // 示例数据
  const yearsData = [
    {
      year: '2021',
      annualReturn: '110%',
      data: [
        { month: 'Jan', value: 17.2 },
        { month: 'Feb', value: 15.4 },
        { month: 'Mar', value: 8.1 },
        { month: 'Apr', value: 19.4 },
        { month: 'May', value: 14.1 },
        { month: 'Jun', value: 4.9 },
        { month: 'Jul', value: 0.8 },
        { month: 'Aug', value: 4.3 },
        { month: 'Sep', value: 4.3 },
        { month: 'Oct', value: 7.2 },
        { month: 'Nov', value: 3.9 },
        { month: 'Dec', value: 3.8 },
      ],
    },
    {
      year: '2022',
      annualReturn: '51%',
      data: [
        { month: 'Jan', value: 3.0 },
        { month: 'Feb', value: 3.8 },
        { month: 'Mar', value: 5.4 },
        { month: 'Apr', value: 3.6 },
        { month: 'May', value: 5.2 },
        { month: 'Jun', value: 3.6 },
        { month: 'Jul', value: 6.2 },
        { month: 'Aug', value: 1.9 },
        { month: 'Sep', value: 2.9 },
        { month: 'Oct', value: 2.5 },
        { month: 'Nov', value: 7.1 },
        { month: 'Dec', value: 5.2 },
      ],
    },
    {
      year: '2023',
      annualReturn: '101%',
      data: [
        { month: 'Jan', value: 8.2 },
        { month: 'Feb', value: 24.5 },
        { month: 'Mar', value: 6.0 },
        { month: 'Apr', value: 4.6 },
        { month: 'May', value: 4.8 },
        { month: 'Jun', value: 6.1 },
        { month: 'Jul', value: 5.2 },
        { month: 'Aug', value: 7.5 },
        { month: 'Sep', value: 7.7 },
        { month: 'Oct', value: 5.8 },
        { month: 'Nov', value: 7.7 },
        { month: 'Dec', value: 12.5 },
      ],
    },
  ]

  return (
    <Center w="100%" color="#fff" px="20px" mt={{ base: '40px', md: '120px' }}>
      <Box maxW="1200px" w="100%">
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
            mb="50px"
            mt="87px"
          >
            Historical Quant Returns
          </Heading>
        </motion.div>
        <Flex w="100%" gap="30px" flexWrap="wrap">
          <Box flex={1}>
            <motion.div
              style={{ width: '100%', flex: '1' }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              <Box>
                {yearsData[0] && (
                  <YearCard
                    year={yearsData[0].year}
                    annualReturn={yearsData[0].annualReturn}
                    data={yearsData[0].data}
                    defaultExpanded
                    align="column"
                  />
                )}
              </Box>
            </motion.div>
            <motion.div
              style={{ width: '100%', position: 'relative' }}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              <Box mt="30px">
                {yearsData[2] && (
                  <YearCard
                    year={yearsData[2].year}
                    annualReturn={yearsData[2].annualReturn}
                    data={yearsData[2].data}
                    defaultExpanded
                    align="column-reverse"
                  />
                )}
              </Box>
            </motion.div>
          </Box>

          <motion.div
            style={{ width: '100%', flex: '1' }}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
          >
            <Box mt={{ base: '0', md: '80%' }}>
              {yearsData[1] && (
                <YearCard
                  year={yearsData[1].year}
                  annualReturn={yearsData[1].annualReturn}
                  data={yearsData[1].data}
                  defaultExpanded
                  align="column-reverse"
                />
              )}
            </Box>
          </motion.div>
        </Flex>
      </Box>
    </Center>
  )
}
export default Historical
