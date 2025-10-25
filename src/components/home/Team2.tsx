import React from 'react'
import { Box, Text, Grid, Flex, Image, Heading, Center } from '@chakra-ui/react'
import Title from './Title'
import { motion } from 'framer-motion'
import TasselEffect from '../TasselEffect'

interface SectionCardProps {
  title: string
  description: string
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description }) => {
  return (
    <Box>
      <Text fontSize={{ base: '20px', md: '21px' }} fontWeight="medium" mb={4} color="white">
        {title}
      </Text>
      <Text fontSize={{ base: '16px', md: '16px' }} color="#868686" lineHeight="1.8">
        {description}
      </Text>
    </Box>
  )
}

const Team2 = () => {
  const founderName = 'James Harris Simons'
  const founderImage = '/images/Vision.png'

  const sections = {
    leftTop: {
      title: 'Unrivaled Legacy',
      description:
        'The Medallion Fund, founded by Nobel laureate Jim Simons, is the gold standard of hedge funds, with a 66% average annual gross return (39% net) from 1988 to 2018.',
    },
    leftBottom: {
      title: 'Similarities',
      description:
        'AdaptAI echoes the Medallion Fund with its data-driven quantitative core, adaptive strategies, and focus on risk-adjusted returns.',
    },
    rightTop: {
      title: 'Open Access',
      description:
        'While the Medallion Fund remains exclusive, closed to outside investors, AdaptAI embraces a fully open approach.',
    },
    rightBottom: {
      title: 'Financial Democratization',
      description:
        "Honoring the Medallion Fund's legacy, AdaptAI welcomes all to its mission of world-class wealth creation.",
    },
  }
  return (
    <Box maxW="1200px" mx="auto" mt={{ base: '50px', md: '150px' }} py="20px" px="20px" id="Team">
      <Box>
        <motion.div
          style={{ width: '100%' }}
          initial={{ y: -100, opacity: 0.3 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <Title>Team</Title>
        </motion.div>
        <motion.div
          style={{ width: '100%' }}
          initial={{ y: -20, opacity: 0.3 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          <Heading
            fontSize={{ base: '32px', md: '40px' }}
            fontWeight="400"
            lineHeight="1.2"
            mb="10px"
            mt="50px"
          >
            Tribute to the
            <br />
            Medallion Fund
          </Heading>
          <Text fontSize="16px" color="#888" lineHeight="1.6">
            <br />
            Adapt AI is a decentralized community of AI scientists,
            <br /> mathematicians, and algorithm engineers united by a shared <br />
            vision: to outperform the market with AI.
          </Text>
        </motion.div>
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(1fr,3)', md: '1fr 0.5fr 1fr' }}
        gap="27px"
        alignItems="center"
        mt="110px"
      >
        {/* 左侧列 */}
        <Box>
          <Box mb={16}>
            <SectionCard
              title={sections.leftTop?.title || ''}
              description={sections.leftTop?.description || ''}
            />
          </Box>
          <Box>
            <SectionCard
              title={sections.leftBottom?.title || ''}
              description={sections.leftBottom?.description || ''}
            />
          </Box>
        </Box>

        {/* 中间列 - 头像 */}
        <Flex direction="column" align="center" justify="center">
          <Box
            position="relative"
            w="180px"
            h="180px"
            borderRadius="full"
            overflow="hidden"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.28)"
            mb={6}
            p="20px"
          >
            {founderImage ? (
              <Image src={founderImage} alt={founderName} w="100%" h="100%" objectFit="cover" />
            ) : (
              <Flex align="center" justify="center" h="100%" color="#3D3D3D">
                <Text fontSize="sm">Image Placeholder</Text>
              </Flex>
            )}
          </Box>
          <Text fontSize="lg" color="#fff" textAlign="center">
            {founderName}
          </Text>
        </Flex>

        {/* 右侧列 */}
        <Box>
          <Box mb={16}>
            <SectionCard
              title={sections.rightTop?.title || ''}
              description={sections.rightTop?.description || ''}
            />
          </Box>
          <Box>
            <SectionCard
              title={sections.rightBottom?.title || ''}
              description={sections.rightBottom?.description || ''}
            />
          </Box>
        </Box>
      </Grid>

      <Center position="relative" mt="50px">
        <TasselEffect />
      </Center>
    </Box>
  )
}

export default Team2
