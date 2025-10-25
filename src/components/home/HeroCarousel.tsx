import React, { ReactNode } from 'react'
import { Box, Text, Flex, Image, Center } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import TasselEffect from '../TasselEffect'

interface TextSwiperProps {
  texts: ReactNode[]
  speed?: number
  delay?: number
}

const TextSwiper: React.FC<TextSwiperProps> = ({ texts, speed = 1000, delay = 3000 }) => {
  return (
    <Box h={{ base: '240px', md: '440px' }} w="100%" overflow="hidden" position="relative">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        speed={speed}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        style={{ height: '100%' }}
      >
        {texts.map((text, index) => (
          <SwiperSlide key={index}>
            {({ isActive, isPrev, isNext }) => (
              <Flex
                align="center"
                justify="center"
                h="100%"
                transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Text
                  fontSize={{ base: isActive ? '20px' : '18px', md: isActive ? '57px' : '29px' }}
                  fontWeight="bold"
                  color={isActive ? 'white' : '#343434'}
                  textAlign="center"
                  whiteSpace="nowrap"
                  opacity={isActive ? 1 : isPrev || isNext ? 0.5 : 0.3}
                  transform={`scale(${isActive ? 0.9 : 0.85})`}
                  transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  {text}
                </Text>
              </Flex>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

const HeroCarousel: React.FC = () => {
  const topTexts = [
    <>
      Profit From Volatility,
      <br /> Adapt Across Bull & Bear
    </>,
    <>
      Multi-Strategy,
      <br />
      At Your Fingertips
    </>,

    <>
      Intent-Driven Gateway
      <br />
      to Crypto Quant
    </>,

    <>
      On-Chain Medallion Fund: Open to All
      <br />
      DeFi-Composable, Endless Scenarios
    </>,
  ]

  const defaultLogo = (
    <Box
      w="80px"
      h="80px"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Image src="/images/Performance-3.png" />
    </Box>
  )

  return (
    <Box maxW="1200px" w="100%" position="relative" overflow="hidden" mt="60px" mb="60px">
      <Box
        minH={{ base: '300px', md: '450px' }}
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={20}
      >
        {/* 左上角 Logo */}
        <Box position="absolute" top={{ base: '-20px', md: '60px' }} left="80px">
          {defaultLogo}
        </Box>

        {/* 右下角 Logo */}
        <Box position="absolute" bottom="60px" right="80px" transform="rotate(90deg)">
          {defaultLogo}
        </Box>

        <Flex direction="column" align="center" w="100%" px={8}>
          <Box mb={8} w="100%">
            <TextSwiper texts={topTexts} speed={1000} delay={3000} />
          </Box>
        </Flex>
      </Box>

      <Center>
        <TasselEffect />
      </Center>
    </Box>
  )
}

export default HeroCarousel
