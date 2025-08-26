import { Box, Center, Heading, Text, VStack, Flex } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}

const FAQItem: FC<FAQItemProps> = ({ question, answer, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: index * 0.1 },
      }}
      style={{ width: '100%' }}
    >
      <Box
        w="100%"
        bg="rgba(255, 255, 255, 0.02)"
        border="1px solid rgba(255, 255, 255, 0.1)"
        borderRadius="16px"
        overflow="hidden"
        transition="all 0.3s ease"
        _hover={{
          bg: 'rgba(255, 255, 255, 0.02)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* 问题标题 */}
        <Flex
          p="24px"
          align="center"
          justify="space-between"
          cursor="pointer"
          onClick={onToggle}
          transition="all 0.3s ease"
          _hover={{
            bg: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          <Text fontSize="18px" fontWeight="500" color="white" lineHeight="1.4" flex="1" pr="20px">
            {question}
          </Text>

          {/* 展开/收起按钮 */}
          <Box
            w="40px"
            h="40px"
            bg="white"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease"
            transform={isOpen ? 'rotate(45deg)' : 'rotate(0deg)'}
          >
            <Box w="16px" h="2px" bg="black" borderRadius="1px" position="relative">
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%) rotate(90deg)"
                w="16px"
                h="2px"
                bg="black"
                borderRadius="1px"
              />
            </Box>
          </Box>
        </Flex>

        {/* 答案内容 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto',
                opacity: 1,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.2, ease: 'easeIn' },
              }}
              style={{ overflow: 'hidden' }}
            >
              <Box px="24px" pb="24px" pt="0">
                <Text fontSize="16px" color="#B8B8B8" lineHeight="1.6" fontWeight="400">
                  {answer}
                </Text>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </motion.div>
  )
}

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // 默认第一个展开

  const faqData = [
    {
      question: '1. Can everyday people participate, and how?',
      answer:
        "Absolutely! Anyone can join AdaptAI's mission to shape the crypto liquidity future. Simply sign up for our waitlist to be notified first when opportunities to participate become available.",
    },
    {
      question: '2. How will AdaptAI be released?',
      answer:
        "AdaptAI will be released in phases, starting with a limited beta program for early adopters, followed by a gradual rollout to the broader community. We'll prioritize accessibility while ensuring system stability and security.",
    },
    {
      question: '3. What is the Sharpe ratio ?',
      answer:
        'The Sharpe ratio is a measure of risk-adjusted return, calculated by dividing excess return by standard deviation. It helps evaluate how much additional return you receive for the extra volatility you endure. Higher Sharpe ratios indicate better risk-adjusted performance.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
      <Center w="100%" mt="120px" mb="60px">
        <Heading fontSize="48px" fontWeight="600" color="white" textAlign="center">
          FAQ
        </Heading>
      </Center>

      <Center w="100%" px="20px" pb="120px">
        <Box maxW="1200px" w="100%">
          <VStack spacing="20px" align="stretch">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </VStack>
        </Box>
      </Center>
    </motion.div>
  )
}

export default FAQ
