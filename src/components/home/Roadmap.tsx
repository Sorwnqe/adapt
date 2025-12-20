import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Title from './Title'

const roadmapData = [
  {
    id: 0,
    label: '2026 Q1',
    items: [
      'Complete Token TGE',
      'Launch decentralized governance module',
      'Activate token staking & voting functions',
      'List on more top global exchanges',
    ],
  },
  {
    id: 1,
    label: '2026 Q2',
    items: [
      'Release Adapt ANP3 Quantitative Agent SDK & Support new strategy agent access & network communication',
      'Onboard 1st batch of 2–10 quant teams',
      'Launch multi-level quant products',
    ],
  },
  {
    id: 2,
    label: '2026 Q3',
    items: [
      'Launch "SWIFT" settlement system for quant agents',
      'Support automatic commission sharing',
      'Initiate "Quantitative Agent Incubation Program" to foster 50+ high-quality strategy agents for protocol integration',
    ],
  },
  {
    id: 3,
    label: '2026 Q4',
    items: [
      'Achieve cross-exchange & cross-chain agent collaboration',
      'Drive Adapt ANP3 to become the de facto standard for crypto quant scenarios',
    ],
  },
]

const Roadmap = () => {
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
      <Center w="100%" color="#fff" px="20px" id="Roadmap">
        <Box maxW="1200px" w="100%" px={{ base: '0', md: '20px' }}>
          {/* 标题 */}
          <Box mb={{ base: '40px', md: '60px' }}>
            <Title>Roadmap</Title>
          </Box>

          {/* 时间轴 */}
          <Box w="100%" h="80px" mb={{ base: '40px', md: '60px' }}>
            <svg width="100%" height="80" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="roadmap-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 1 0"
                  />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <style>{`
                  .roadmap-line {
                    animation: dashMove 6s linear infinite;
                  }
                  @keyframes dashMove {
                    to { stroke-dashoffset: -80; }
                  }
                `}</style>
              </defs>

              {/* 虚线主线 */}
              <line
                x1="60"
                y1="40"
                x2="1180"
                y2="40"
                stroke="#666"
                strokeWidth="1.5"
                strokeDasharray="6 10"
                className="roadmap-line"
              />

              {/* 四个节点，对应四个季度 */}
              {([60, 320, 620, 900, 1180] as const).map((cx, index) => (
                <g key={cx} transform={`translate(${cx},40)`}>
                  <circle r="14" fill="rgba(255,255,255,0.25)" filter="url(#roadmap-glow)">
                    <animate
                      attributeName="r"
                      values="12;18;12"
                      dur="2.2s"
                      repeatCount="indefinite"
                      begin={`${index * 0.35}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0.9;0.15;0.9"
                      dur="2.2s"
                      repeatCount="indefinite"
                      begin={`${index * 0.35}s`}
                    />
                  </circle>
                  <circle r="8" fill="#f5f5f5" />
                </g>
              ))}
            </svg>
          </Box>

          {/* 下方文字内容 */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: '32px', md: '20px' }}
            align="flex-start"
            justify="space-between"
            px={{ base: '0', md: '60px' }}
          >
            {roadmapData.map((phase) => (
              <Box key={phase.id} flex="1" minW={{ base: '100%', md: '0' }}>
                <Text
                  fontSize={{ base: '16px', md: '18px' }}
                  fontWeight="600"
                  mb={{ base: 3, md: 4 }}
                >
                  {phase.label}:
                </Text>
                <Box>
                  {phase.items.map((item, idx) => (
                    <Text
                      key={idx}
                      fontSize={{ base: '14px', md: '16px' }}
                      color="#b9b9b9"
                      lineHeight="1.7"
                      mt="12px"
                    >
                      {item}
                    </Text>
                  ))}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Center>
    </motion.div>
  )
}

export default Roadmap
