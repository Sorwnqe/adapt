import { Box, Flex, Icon } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { FC } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { motion } from 'framer-motion'

// 流苏效果动画 - 透明度逐渐变化
const tasselAnimation = keyframes`
    0% {
        opacity: 0.2;
    }
    25% {
        opacity: 0.25;
    }
    50% {
        opacity: 0.75;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.2;
    }
`

// 流苏效果组件 - 4个点 + 向下箭头
const TasselEffect: FC = () => {
  return (
    <motion.div
      initial={{
        x: 0,
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay: 0.5 },
      }}
    >
      <Box mt="40px">
        <Flex direction="column" align="center" justify="center" gap="8px" left="50%">
          {/* 4个点，从上到下逐渐变透明 */}
          {Array.from({ length: 4 }).map((_, index) => (
            <Box
              key={index}
              w="5px"
              h="5px"
              bg="white"
              borderRadius="50%"
              animation={`${tasselAnimation} 2s infinite ease-in-out`}
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            />
          ))}

          {/* 向下箭头 */}
        </Flex>

        <Icon
          mt="4px"
          fontSize="26px"
          color="#fff"
          fontWeight="bold"
          animation={`${tasselAnimation} 2s infinite ease-in-out`}
          style={{
            animationDelay: '1.2s', // 在4个点之后开始动画
          }}
          as={IoIosArrowDown}
        ></Icon>
      </Box>
    </motion.div>
  )
}
export default TasselEffect
