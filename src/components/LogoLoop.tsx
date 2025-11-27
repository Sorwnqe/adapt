import { Box, Center, Flex, Image, Link, Text } from '@chakra-ui/react'
import { ReactNode, MouseEvent, useRef, FC } from 'react'

interface LogoItem {
  src: string
  alt?: string
  href?: string
  title?: string
  description?: ReactNode
}

interface LogoLoopProps {
  logos: LogoItem[]
  boxHeight?: number
  isMobile?: boolean
}

const LogoLoop: FC<LogoLoopProps> = ({ logos = [], boxHeight = 260 }) => {
  // 横向拖拽滚动状态
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const isDraggingRef = useRef(false)
  const dragMovedRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current
    if (!el) return
    isDraggingRef.current = true
    dragMovedRef.current = false
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
    if (Math.abs(dx) > 3) {
      dragMovedRef.current = true
    }
    el.scrollLeft = scrollLeftRef.current - dx
  }

  // 为了更长的滚动体验，可以简单重复一遍数据
  const loopLogos = [...logos, ...logos]

  return (
    <Box w="100%" position="relative" h={`${boxHeight}px`} py="20px">
      <Box
        ref={scrollRef}
        w="100%"
        h="100%"
        overflowX="auto"
        overflowY="hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onMouseMove={handleMouseMove}
        sx={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Flex
          className="logoloop__track"
          as="div"
          align="stretch"
          gap={{ base: 4, md: 6 }}
          minW="max-content"
        >
          {loopLogos.map((logo, index) => {
            const title = logo.title || ''
            const desc = logo.description

            const CardContent = (
              <Box
                minW={{ base: '260px', md: '320px' }}
                maxW={{ base: '260px', md: '320px' }}
                h="100%"
                borderRadius="24px"
                border="1px solid #171717"
                bg="rgba(255,255,255,0.02)"
                p={{ base: '17px 20px', md: '17px 20px' }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                opacity={0.6}
                _hover={{
                  opacity: 1,
                  borderColor: '#292929',
                  bg: '#080808',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.25s ease-out',
                }}
              >
                <Center mb="18px" border="1px solid #292929" w="43px" h="43px" borderRadius="50%">
                  <Image
                    draggable={false}
                    src={logo.src}
                    alt={logo.alt || title}
                    w="28px"
                    h="28px"
                    objectFit="contain"
                  />
                </Center>

                {title && (
                  <Text fontSize={{ base: '16px', md: '18px' }} fontWeight="400">
                    {title}
                  </Text>
                )}

                {desc && (
                  <Text
                    fontSize={{ base: '12px', md: '13px' }}
                    color="#B9B9B9"
                    lineHeight="1.6"
                    noOfLines={3}
                  >
                    {desc}
                  </Text>
                )}

                {logo.href && (
                  <Text
                    mt="10px"
                    fontSize={{ base: '14px', md: '15px' }}
                    color="#CFCFCF"
                    display="inline-flex"
                    alignItems="center"
                    gap={1}
                  >
                    More
                    <Box as="span">›</Box>
                  </Text>
                )}
              </Box>
            )

            return logo.href ? (
              <Link
                draggable={false}
                key={`${logo.src}-${index}`}
                href={logo.href}
                isExternal
                _hover={{ textDecoration: 'none' }}
                onClick={(e) => {
                  if (dragMovedRef.current) {
                    e.preventDefault()
                    e.stopPropagation()
                  }
                }}
              >
                {CardContent}
              </Link>
            ) : (
              <Box key={`${logo.src}-${index}`}>{CardContent}</Box>
            )
          })}
        </Flex>
      </Box>
    </Box>
  )
}

export default LogoLoop
