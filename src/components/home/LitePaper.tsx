import { Box, Center, Heading, Text, Flex, Button, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FC } from 'react'

const LitePaper: FC = () => {
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
      <Center w="100%" mt={{ base: '30px', md: '120px' }} mb="60px" id="Litepaper">
        <Heading
          fontSize={{ base: '32px', md: '48px' }}
          fontWeight="600"
          color="white"
          textAlign="center"
        >
          Litepaper
        </Heading>
      </Center>

      <Center w="100%" px="20px" mb="80px">
        <Box maxW="1280px" w="100%" position="relative">
          {/* 地球背景图片 - 按顺序动画：黑色背景入，白圈入，图片入 */}
          <Box
            position="relative"
            w="100%"
            overflow="hidden"
            h={{ base: '150px', md: '400px' }}
            mb="60px"
          >
            {/* 第一步：黑色背景 */}
            <Box w="100%" h="100%" borderRadius="24px" position="relative" zIndex="-1">
              <video src="/BlackandWhite.mp4" width="100%" autoPlay loop muted></video>
              {/* 第二步：白色圆圈 */}

              <Box
                top={{ base: '100px', md: '320px' }}
                pos="absolute"
                left={'50%'}
                transform={'translateX(-50%)'}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.6, delay: 1.0 },
                  }}
                >
                  <Box
                    w={{ base: '30px', md: '80px' }}
                    h={{ base: '30px', md: '80px' }}
                    borderRadius="50%"
                    border="2px solid rgba(255, 255, 255, 0.3)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    zIndex="3"
                  >
                    {/* 第三步：内部图标 */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.4, delay: 1.6 },
                      }}
                    >
                      <Box
                        w={{ base: '20px', md: '40px' }}
                        h={{ base: '20px', md: '40px' }}
                        borderRadius="4px"
                        position="relative"
                      >
                        <Image src="/images/Performance-3.png" />
                      </Box>
                    </motion.div>
                  </Box>
                </motion.div>
              </Box>

              {/* 地球背景图片 */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{
                  opacity: 0.6,
                  scale: 1,
                  transition: { duration: 1.0, delay: 0.8 },
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                }}
              >
                <Box
                  w="100%"
                  h="100%"
                  bgImage="url('/images/earth-background.jpg')"
                  bgSize="cover"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  borderRadius="22px"
                />
                {/* 如果没有图片，使用渐变作为替代 */}
                <Box position="absolute" inset="0" borderRadius="22px" />
              </motion.div>
            </Box>
          </Box>

          {/* 内容区域 */}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="flex-start"
            justify="space-between"
            gap="60px"
            px="40px"
          >
            {/* 左侧内容 */}
            <Box flex="1" maxW={{ base: '100%', lg: '500px' }}>
              <Heading
                fontSize={{ base: '32px', md: '42px' }}
                fontWeight="400"
                lineHeight="1.2"
                mb="30px"
                color="#fff"
              >
                Adapt AI Litepaper
              </Heading>

              <Button
                bg="url(/images/click-top-news.png) no-repeat"
                bgSize="contain"
                borderRadius="12px"
                py="16px"
                color="white"
                fontSize="16px"
                transition="all 0.3s ease"
                width={'175px'}
                _hover={{
                  bg: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-2px)',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                as="a"
                href="https://docsend.com/view/7nus8ncjpg9xun3w"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to view
              </Button>
            </Box>

            {/* 右侧内容 */}
            <Box flex="1" maxW={{ base: '100%', lg: '600px' }}>
              <Heading
                fontSize={{ base: '20px', md: '20px' }}
                lineHeight="1.4"
                color="white"
                mb="8px"
              >
                Reinforcement Learning and Market
              </Heading>
              <Heading
                fontSize={{ base: '20px', md: '20px' }}
                lineHeight="1.4"
                color="white"
                mb="8px"
              >
                RegimeDetection
              </Heading>
              <Text fontSize={{ base: '20px', md: '20px' }} lineHeight="1.4" color="#fff">
                in Cryptocurrency Trading
              </Text>
            </Box>
          </Flex>
        </Box>
      </Center>
    </motion.div>
  )
}

export default LitePaper
