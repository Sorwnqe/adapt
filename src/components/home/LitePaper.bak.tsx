import { Box, Center, Heading, Flex, Button, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'
import { useLitePaperModal } from '../../ModalContext'

const LitePaper: FC = () => {
  const { onOpen } = useLitePaperModal()
  const [top, setTop] = useState<string>('100px')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    const updateTop = () => {
      const height = videoEl.getBoundingClientRect().height
      setTop(`${height / 2}px`)
    }
    updateTop()
    const resizeObserver = new ResizeObserver(() => {
      updateTop()
    })
    resizeObserver.observe(videoEl)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      <Center w="100%" px="20px" mb="80px" id="Litepaper">
        <Box maxW="1200px" w="100%" position="relative">
          {/* 地球背景图片 - 按顺序动画：黑色背景入，白圈入，图片入 */}
          <Box
            position="relative"
            w="100%"
            overflow="hidden"
            h={{ base: '150px', md: '450px' }}
            mb="60px"
          >
            {/* 第一步：黑色背景 */}
            <Box w="100%" h="100%" borderRadius="24px" position="relative" zIndex="-1">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 1 },
                }}
              >
                <video width="100%" autoPlay loop muted ref={videoRef} playsInline>
                  <source src="/video/BlackandWhite.mp4" type="video/mp4"></source>
                </video>
              </motion.div>
              {/* 第二步：白色圆圈 */}

              <Box top={top} pos="absolute" left={'50%'} transform={'translate(-50%, -40%)'}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.6, delay: 1.5 },
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
            w="100%"
            px={{ base: '0', md: '40px' }}
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
                onClick={onOpen}
              >
                Click to view
              </Button>
            </Box>

            {/* 右侧内容 */}
            <Box>
              <Text fontSize="20px" lineHeight="1.4" color="white" mb="8px">
                Reinforcement Learning and Market
              </Text>
              <Text fontSize="20px" lineHeight="1.4" color="white" mb="8px">
                Regime Detection AI Specialized
              </Text>
              <Text fontSize="20px" lineHeight="1.4" color="white">
                for Volatile Markets & Complex Systems
              </Text>
            </Box>
          </Flex>
        </Box>
      </Center>
    </>
  )
}

export default LitePaper
