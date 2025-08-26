import { motion } from 'framer-motion'
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

const teamMembers = [
  {
    name: 'Yunshan Ma',
    title: 'Well-suited for dynamic decision-making',
    avatar: '/images/team/yunshan-ma.png',
    other: '/images/team/smu.png',
    pos: 'AI Professor at SMU',
    desc: `The problem of cryptocurrency trading is interesting yet highly challenging, given its notorious volatility compared with other financial markets such as stocks or foreign exchange. Due to these technical challenges, research on cryptocurrency trading has been relatively limited and has often shown inferior performance. There exists a significant gap between research and application that needs to be addressed. The proposed ideas tackle key problems and appear promising. <br/><br/>Reinforcement learning (RL) is well-suited for dynamic decision-making through agent–environment interactions. The market regime detection via a discretization-based solution is particularly interesting, as it incorporates domain characteristics that can enhance RL performance.`,
  },
  {
    name: 'Qi Liu',
    title: 'Next-generation framework',
    avatar: '/images/team/qiliu.png',
    other: '/images/team/hk-un.png',
    pos: 'Cofounder of Reka AI',
    desc: 'This paper provides a compelling exploration of reinforcement learning integrated with market regime detection in cryptocurrency trading. The authors clearly demonstrate how adaptive, regime-aware agents can outperform traditional momentum and mean-reversion strategies, achieving higher Sharpe ratios and reduced drawdowns. <br/> <br/> Particularly noteworthy is the emphasis on adaptability: by dynamically adjusting to bull, bear, and neutral phases, the proposed approach shows strong promise as a next-generation framework for robust, risk-sensitive trading in highly volatile markets. ',
  },
  {
    name: 'Shengjie Wang',
    title: 'Highly effective',
    avatar: '/images/team/shengjie.png',
    other: '/images/team/new-york.png',
    pos: 'AI Professor at NYU',
    desc: 'Though simple, this approach could be highly effective to make the RL decision more robust. ',
  },
  {
    name: 'Xu Miao',
    title: 'Chief Scientist at DataCanvas',
    avatar: '/images/team/xumiao.png',
    pos: 'Chief Scientist at DataCanvas',
    other: '',
    desc: 'This is a great finding. Compared with the traditional trading approach, this RL algorithm with regime awareness seems to be a big improvement.  ',
  },
  {
    name: 'Sebastian See',
    title: 'Makes total sense',
    avatar: '/images/team/tim.png',
    pos: 'Senior AI Research Scientist at NTU',
    other: '/images/team/nanyang.png',
    desc: 'The solution makes total sense, leveraging recent advances in reinforcement learning. This is particularly useful for cryptocurrency quant trading.  ',
  },
]

const TeamCard = ({
  name,
  title,
  avatar,
  desc,
  pos,
  other,
}: {
  name: string
  title: string
  avatar: string
  desc: string
  pos: string
  other?: string
}) => (
  <VStack
    p="24px"
    bg="rgba(255,255,255,0.05)"
    borderRadius="12px"
    spacing="16px"
    _hover={{ bg: 'rgba(255,255,255,0.08)' }}
    transition="0.3s"
    alignItems="start"
    bgImage="/images/Backtest-Results-bg.png"
  >
    <Text fontSize="20px" color="#fff">
      {title}
    </Text>

    <Text fontSize="14px" color="#888" lineHeight="1.6">
      <span dangerouslySetInnerHTML={{ __html: desc }}></span>
    </Text>
    <Flex p="5px 16px" bg="#1A1A1A" w="100%" borderRadius="12px" gap="16px" align={'center'}>
      <AvatarGroup>
        <Avatar src={avatar} w="36px" h="36px" />
        {other && (
          <Box bg="#fff" borderRadius="15px" overflow="hidden">
            <Image src={other} w="93px" h="31px" />
          </Box>
        )}
      </AvatarGroup>
      <Box>
        <Text fontSize="16px">{name}</Text>
        <Text fontSize="12px" color="#868686">
          {pos}
        </Text>
      </Box>
    </Flex>
  </VStack>
)

const Team = () => {
  return (
    <Box w="100%" py="80px" px="20px" mb="60px" maxW="1280px">
      <motion.div
        style={{ width: '100%' }}
        initial={{ y: -100, opacity: 0.3 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Box>
          <Heading textAlign="center" fontSize="48px" fontWeight="600" color="white">
            Team
          </Heading>
          <Heading
            fontSize={{ base: '36px', md: '40px' }}
            fontWeight="400"
            lineHeight="1.2"
            mb="60px"
            mt="50px"
          >
            Professional Team
          </Heading>
          <Text fontSize="16px" color="#888" lineHeight="1.6">
            AdaptAI is driven by a top-tier team, including an NUS AI professor
            <br />
            and expert mathematicians, with plans to onboard traders <br />
            to enhance its community-driven crypto
          </Text>
        </Box>
      </motion.div>
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap="35px" mx="auto" mt="55px">
        {teamMembers.map((member, idx) => (
          <Box key={idx}>
            <motion.div
              style={{ width: '100%' }}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1 * idx * 0.1 },
              }}
            >
              <TeamCard {...member} />
            </motion.div>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default Team
