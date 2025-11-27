import { useRef, useState } from 'react'
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import Historical from './Historical'

const sections = [
  {
    id: 0,
    navLabel: 'Strategies',
    title: 'Strategies Integrated',
    subtitle: 'Unlock unmatched alpha',
    description:
      'From arbitrage to trend-following, convert volatility into profits through nonstop strategy expansion.',
  },
  {
    id: 1,
    navLabel: 'Strategy A',
    title: 'Pick Your Comfort, Earn Your Fit',
    subtitle: 'Strategy A',
    description:
      'Powered by multi-agent collaboration, Adapt aligns with your style for steady gains from conservative to aggressive.',
  },
  {
    id: 2,
    navLabel: 'Strategy B',
    title: 'Strategy B',
    subtitle: 'Endless Yields, Sustained Surge',
    description:
      "Diverse agents' quant arbitrage yields fund BTC DCA liquidity and repay the principal investment.",
  },
]

const Pioneer = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const handleNavClick = (index: number) => {
    setActiveIndex(index)
    if (swiperRef.current) {
      // When loop is enabled, use slideToLoop to jump to logical index
      const slideToLoop = (swiperRef.current as any).slideToLoop || swiperRef.current.slideTo
      slideToLoop.call(swiperRef.current, index)
    }
  }

  const handleSwiperMouseEnter = () => {
    const swiper = swiperRef.current as any
    if (swiper && swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
      swiper.autoplay.stop()
    }
  }

  const handleSwiperMouseLeave = () => {
    const swiper = swiperRef.current as any
    if (swiper && swiper.autoplay && typeof swiper.autoplay.start === 'function') {
      swiper.autoplay.start()
    }
  }

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
      <motion.div
        style={{ width: '100%', position: 'relative' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <Box mt="104px">
          <Title>Strategy</Title>
        </Box>
      </motion.div>
      <Center pos="relative" px="20px" id="Strategy">
        <Box
          maxW="1200px"
          w="100%"
          mt={{ base: '60px', md: '120px' }}
          mb={{ base: '20px', md: '200px' }}
        >
          <Flex
            align="stretch"
            gap={{ base: '32px', md: '64px' }}
            direction={{ base: 'column', md: 'row' }}
          >
            {/* 左侧导航 */}
            <Box w={{ base: '100%', md: '260px' }} flexShrink={0}>
              {/* <Box borderLeft="1px solid rgba(219,219,219,0.2)"> */}
              {sections.map((item, index) => {
                const isActive = index === activeIndex
                return (
                  <Box
                    key={item.id}
                    pl={4}
                    pr={2}
                    py={3}
                    cursor="pointer"
                    onClick={() => handleNavClick(index)}
                    bg={isActive ? 'rgba(255,255,255,0.03)' : 'transparent'}
                    position="relative"
                  >
                    {/* {isActive && (
                        <Box
                          position="absolute"
                          left="-1px"
                          top={0}
                          bottom={0}
                          w="2px"
                          bg="white"
                        />
                      )} */}
                    <Text
                      fontSize={{ base: '16px', md: '18px' }}
                      fontWeight={isActive ? 600 : 400}
                      color={isActive ? 'white' : '#888'}
                      transition="color 0.2s ease, font-weight 0.2s ease"
                    >
                      {item.navLabel}
                    </Text>
                  </Box>
                )
              })}
              {/* </Box> */}
            </Box>

            {/* 右侧内容轮播 */}
            <Box
              flex="1"
              onMouseEnter={handleSwiperMouseEnter}
              onMouseLeave={handleSwiperMouseLeave}
            >
              <Swiper
                className="strategy-swiper"
                direction="vertical"
                slidesPerView={1}
                loop
                centeredSlides={false}
                speed={800}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                autoHeight
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex)
                }}
              >
                {sections.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Flex
                      direction="column"
                      justify="flex-start"
                      py={{ base: 4, md: 6 }}
                      gap={{ base: 6, md: 10 }}
                    >
                      <Box>
                        <Heading fontSize={{ base: '24px', md: '32px' }} fontWeight="400" mb={2}>
                          {item.title}
                        </Heading>
                        <Heading
                          fontSize={{ base: '20px', md: '28px' }}
                          fontWeight="400"
                          mb={{ base: 4, md: 6 }}
                        >
                          {item.subtitle}
                        </Heading>
                        <Text
                          fontSize={{ base: '14px', md: '16px' }}
                          color="#888"
                          lineHeight="1.6"
                          maxW="640px"
                        >
                          {item.description}
                        </Text>
                      </Box>

                      {/* 底部占位卡片区域，方便后续接入图表或统计组件 */}
                      <Box>
                        {activeIndex === 0 && (
                          <motion.div
                            style={{ width: '100%' }}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, delay: 0.4 },
                            }}
                          >
                            <Flex
                              gap={{ base: 4, md: 6 }}
                              wrap="wrap"
                              justify={{ base: 'flex-start', md: 'flex-start' }}
                            >
                              <Box
                                flex="1"
                                minW={{ base: '100%', md: '220px' }}
                                border="1px solid rgba(219,219,219,0.25)"
                                borderRadius="16px"
                                p={{ base: 4, md: 6 }}
                              >
                                <Image src="/images/Strategy-1.png" h="36px" objectFit="contain" />
                                <Heading fontSize={{ base: '20px', md: '24px' }} mb={2} mt="21px">
                                  Risk-Tiered Portfolios
                                </Heading>
                                <Text
                                  fontSize={{ base: '14px', md: '16px' }}
                                  color="#888"
                                  lineHeight="1.6"
                                >
                                  From conservative to aggressive bundles. Adapt for risk-return
                                  balance.
                                </Text>
                              </Box>
                              <Box
                                flex="1"
                                minW={{ base: '100%', md: '220px' }}
                                border="1px solid rgba(219,219,219,0.25)"
                                borderRadius="16px"
                                p={{ base: 4, md: 6 }}
                              >
                                <Image src="/images/Strategy-2.png" h="36px" objectFit="contain" />
                                <Heading fontSize={{ base: '20px', md: '24px' }} mb={2} mt="21px">
                                  Time-Aligned Solutions
                                </Heading>
                                <Text
                                  fontSize={{ base: '14px', md: '16px' }}
                                  color="#888"
                                  lineHeight="1.6"
                                >
                                  Short arbitrage, mid trend,
                                  <br /> long accumulation. Pick your timeline.
                                </Text>
                              </Box>
                              <Box
                                flex="1"
                                minW={{ base: '100%', md: '220px' }}
                                border="1px solid rgba(219,219,219,0.25)"
                                borderRadius="16px"
                                p={{ base: 4, md: 6 }}
                              >
                                <Image src="/images/Strategy-3.png" h="36px" objectFit="contain" />
                                <Heading fontSize={{ base: '20px', md: '24px' }} mb={2} mt="21px">
                                  Cross-Coin Gains
                                </Heading>
                                <Text
                                  fontSize={{ base: '14px', md: '16px' }}
                                  color="#888"
                                  lineHeight="1.6"
                                >
                                  Earn across liquid cryptos. Adapt for more potential.
                                </Text>
                              </Box>
                            </Flex>
                          </motion.div>
                        )}

                        {activeIndex === 1 && (
                          <motion.div
                            style={{ width: '100%' }}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, delay: 0.4 },
                            }}
                          >
                            {/* <Flex
                              gap={{ base: 4, md: 6 }}
                              wrap="wrap"
                              justify={{ base: 'flex-start', md: 'flex-start' }}
                            >
                              <Box
                                flex="1"
                                minW={{ base: '100%', md: '220px' }}
                                border="1px solid rgba(219,219,219,0.25)"
                                borderRadius="16px"
                                p={{ base: 4, md: 6 }}
                              >
                                <Image src="/images/Strategy-1.png" h="36px" objectFit="contain" />
                                <Heading fontSize={{ base: '20px', md: '24px' }} mb={2} mt="21px">
                                  Risk-Tiered Portfolios
                                </Heading>
                                <Text
                                  fontSize={{ base: '14px', md: '16px' }}
                                  color="#888"
                                  lineHeight="1.6"
                                >
                                  From conservative to aggressive bundles. Adapt for risk-return
                                  balance.
                                </Text>
                              </Box>
                              <Box
                                flex="1"
                                minW={{ base: '100%', md: '220px' }}
                                border="1px solid rgba(219,219,219,0.25)"
                                borderRadius="16px"
                                p={{ base: 4, md: 6 }}
                              >
                                <Image src="/images/Strategy-2.png" h="36px" objectFit="contain" />
                                <Heading fontSize={{ base: '20px', md: '24px' }} mb={2} mt="21px">
                                  Time-Aligned Solutions
                                </Heading>
                                <Text
                                  fontSize={{ base: '14px', md: '16px' }}
                                  color="#888"
                                  lineHeight="1.6"
                                >
                                  Short arbitrage, mid trend,
                                  <br /> long accumulation. Pick your timeline.
                                </Text>
                              </Box>
                              <Box
                                flex="1"
                                minW={{ base: '100%', md: '220px' }}
                                border="1px solid rgba(219,219,219,0.25)"
                                borderRadius="16px"
                                p={{ base: 4, md: 6 }}
                              >
                                <Image src="/images/Strategy-3.png" h="36px" objectFit="contain" />
                                <Heading fontSize={{ base: '20px', md: '24px' }} mb={2} mt="21px">
                                  Cross-Coin Gains
                                </Heading>
                                <Text
                                  fontSize={{ base: '14px', md: '16px' }}
                                  color="#888"
                                  lineHeight="1.6"
                                >
                                  Earn across liquid cryptos. Adapt for more potential.
                                </Text>
                              </Box>
                            </Flex> */}
                          </motion.div>
                        )}

                        {activeIndex === 2 && (
                          <Box
                            w="100%"
                            // border="1px solid rgba(219,219,219,0.25)"
                            borderRadius="16px"
                            // p={{ base: 4, md: 6 }}
                          >
                            <Historical />
                          </Box>
                        )}
                      </Box>
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Flex>
        </Box>
        {/* <Box
          w={{ base: '100%', md: '100%' }}
          h={{ base: '70%', md: 'auto' }}
          pos="absolute"
          bottom="0"
          left={{ base: '-20%', md: '-30%' }}
          zIndex="-1"
          opacity="0.5"
        >
          <video
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/White-Particle.mp4" type="video/mp4"></source>
          </video>
        </Box> */}
      </Center>
    </motion.div>
  )
}
export default Pioneer
