import { Box, Center, Flex, Heading, Text, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FC, MouseEvent, useRef } from 'react'
import Title from './Title'
import { useLitePaperModal } from '../../ModalContext'

type LitePaperSlide = {
  id: string
  // 左侧图片；如果不传 src，则使用占位背景
  imageSrc?: string
  imageAlt?: string
  title: string
  description: string[]
  // 可选外链，点击整张 Slide 打开（_blank）
  link?: string
}

// 每个配置就是一个 SwiperSlide：左侧图片 + 右侧文字
// imageSrc 可按需在这里自行配置
const litePaperSlides: LitePaperSlide[] = [
  {
    id: 'survey',
    imageSrc: '/images/litepaprer1.png',
    title: 'A survey of agent interoperability protocols',
    description: [
      'Model Context Protocol (MCP), Agent Communication Protocol (ACP),',
      'Agent-to-Agent Protocol (A2A), and Agent Network Protocol (ANP).',
    ],
    link: 'https://arxiv.org/abs/2505.02279', // 可选：配置后点击整卡片打开
  },
  {
    id: 'adaptai',
    imageSrc: '/images/litepaprer2.png',
    title: 'AdaptAI',
    description: [
      'Reinforcement Learning and Market Regime Detection',
      'in Cryptocurrency Trading.',
    ],
    link: 'https://docsend.com/view/7nus8ncjpg9xun3w',
  },
  {
    id: 'Agentic AI Frameworks',
    imageSrc: '/images/litepaprer3.png',
    title: 'Agentic AI Frameworks',
    description: ['Architectures, Protocols, and Design Challenges'],
    link: 'https://arxiv.org/pdf/2508.10146',
  },
  {
    id: 'Agent Network Protocol',
    imageSrc: '/images/litepaprer4.png',
    title: 'Agent Network Protocol Technical White Paper',
    description: [''],
    link: 'https://arxiv.org/pdf/2508.00007',
  },
]

const LitePaper: FC = () => {
  const { onOpen } = useLitePaperModal()

  // 鼠标拖拽横向滚动
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const isDraggingRef = useRef(false)
  const dragMovedRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current
    if (!el) return
    isDraggingRef.current = true
    dragMovedRef.current = false // 本次按下重新计数
    startXRef.current = e.clientX
    scrollLeftRef.current = el.scrollLeft
  }

  const endDrag = () => {
    isDraggingRef.current = false
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current
    if (!isDraggingRef.current || !el) return
    e.preventDefault()
    const dx = e.clientX - startXRef.current
    // 移动超过 3px 才认为在拖动
    if (Math.abs(dx) > 3) {
      dragMovedRef.current = true
    }
    el.scrollLeft = scrollLeftRef.current - dx
  }

  return (
    <>
      <motion.div
        style={{ width: '100%', position: 'relative' }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <Box mt={{ base: '60px', md: '100px' }}>
          <Title>Litepaper</Title>
        </Box>
      </motion.div>
      <Center w="100%" px="20px" my="80px" id="Litepaper">
        <Box maxW="1200px" w="100%" position="relative">
          <Box mb={{ base: '32px', md: '48px' }} px={{ base: '0', md: '40px' }} textAlign="center">
            <Text
              fontSize={{ base: '16px', md: '20px' }}
              color="#C5C5C5"
              lineHeight={{ base: '24px', md: '30px' }}
            >
              From human trading to agent alliances, from retail games to professional
              quantification, a new wealth era begins…
            </Text>
          </Box>

          {/* 内容区域：原生横向滚动，隐藏滚动条 */}
          <Box w="100%" px={{ base: '0', md: '40px' }} pb={2}>
            <Box
              ref={scrollRef}
              w="100%"
              overflowX="auto"
              overflowY="hidden"
              onMouseDown={handleMouseDown}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
              onMouseMove={handleMouseMove}
              sx={{
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE/Edge
                '&::-webkit-scrollbar': {
                  display: 'none', // Chrome/Safari
                },
              }}
            >
              <Flex direction="row" gap={{ base: 4, md: 6 }} minW="max-content">
                {litePaperSlides.map((slide) => {
                  const Card = (
                    <Flex
                      w={{ base: '340px', md: '620px' }}
                      h={{ base: '380px', md: '280px' }}
                      borderRadius="24px"
                      flexDirection={{ base: 'column-reverse', md: 'row' }}
                    >
                      <Box
                        flex="1"
                        border="1px solid #171717"
                        h={{ base: 'auto', md: '100%' }}
                        bg="rgba(0,0,0,0.7)"
                        px={{ base: 6, md: 8 }}
                        py={{ base: 6, md: 8 }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Heading
                            fontSize={{ base: '18px', md: '22px' }}
                            fontWeight="400"
                            lineHeight="1.4"
                            mb={{ base: 3, md: 4 }}
                          >
                            {slide.title}
                          </Heading>

                          <Box>
                            {slide.description.map((line) => (
                              <Text
                                key={line}
                                fontSize={{ base: '12px', md: '14px' }}
                                color="#C5C5C5"
                                lineHeight="1.5"
                              >
                                {line}
                              </Text>
                            ))}
                          </Box>
                        </Box>

                        {slide.link && (
                          <Box mt="10px">
                            <Text
                              as="span"
                              fontSize={{ base: '12px', md: '14px' }}
                              color="#CFCFCF"
                              display="inline-flex"
                              alignItems="center"
                              gap={1}
                            >
                              More
                              <Box as="span">›</Box>
                            </Text>
                          </Box>
                        )}
                      </Box>
                      <Box
                        flex={{ base: '0 0 auto', md: '0 0 40%' }}
                        h={{ base: '140px', md: '100%' }}
                        overflow="hidden"
                        bg={
                          slide.imageSrc
                            ? '#0f0f0f'
                            : 'radial-gradient(circle at top, rgba(255,255,255,0.15), #050505 55%)'
                        }
                      >
                        {slide.imageSrc && (
                          <Box
                            as="img"
                            src={slide.imageSrc}
                            alt={slide.imageAlt || slide.title}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            draggable={false}
                          />
                        )}
                      </Box>
                    </Flex>
                  )

                  if (slide.id === 'adaptai') {
                    return (
                      <Box
                        key={slide.id}
                        cursor="pointer"
                        onClick={(e) => {
                          if (dragMovedRef.current) {
                            e.preventDefault()
                            e.stopPropagation()
                            return
                          }
                          onOpen()
                        }}
                      >
                        {Card}
                      </Box>
                    )
                  }

                  return slide.link ? (
                    <Link
                      draggable={false}
                      key={slide.id}
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      _hover={{ textDecoration: 'none' }}
                      onClick={(e) => {
                        if (dragMovedRef.current) {
                          e.preventDefault()
                          e.stopPropagation()
                        }
                      }}
                    >
                      {Card}
                    </Link>
                  ) : (
                    <Box key={slide.id}>{Card}</Box>
                  )
                })}
              </Flex>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  )
}

export default LitePaper
