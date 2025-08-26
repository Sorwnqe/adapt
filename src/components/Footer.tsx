import { Box, Flex, Heading, Text, Input, Button, HStack } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { RiTelegram2Fill, RiTwitterXFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

export const Footer: FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ y: 150, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.5 },
      }}
    >
      <Box bg="#000" color="#fff" py="80px" px="20px" mt="auto">
        <Flex
          maxW="1280px"
          mx="auto"
          justify="space-between"
          align="flex-start"
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: '60px', lg: '80px' }}
        >
          {/* Left Side - Content */}
          <Box flex="1" maxW={{ base: '100%', lg: '500px' }}>
            <Heading
              fontSize={{ base: '32px', md: '48px' }}
              fontWeight="400"
              lineHeight={{ base: '36px', md: '52px' }}
              mb="40px"
              color="#fff"
            >
              AI That Adapts
              <br />
              Market That Reward.
            </Heading>

            <Text fontSize="16px" color="#868686" mb="20px" lineHeight="24px">
              Breakthrough RL algorithm that adapts
              <br />
              with market conditions, powered by
              <br />
              VakLabs technology
            </Text>

            {/* Social Icons */}
            <HStack spacing="20px" mb="60px">
              <Box
                w="44px"
                h="44px"
                borderRadius="50%"
                bg="#101010"
                color="#B9B9B9"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                _hover={{ bg: '#2a2a2a' }}
                transition="background 0.2s"
              >
                <RiTwitterXFill size={18} />
              </Box>
              <Box
                w="44px"
                h="44px"
                borderRadius="50%"
                bg="#101010"
                color="#B9B9B9"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                _hover={{ bg: '#2a2a2a' }}
                transition="background 0.2s"
              >
                <RiTelegram2Fill size={18} />
              </Box>
            </HStack>
          </Box>

          {/* Right Side - Contact Form */}
          <Box
            bg="rgba(255,255,255,0.05)"
            bgImage="/images/contact-us-bg.png"
            p="40px"
            borderRadius="12px"
            minW={{ base: '100%', lg: '400px' }}
            maxW="500px"
          >
            <Heading fontSize="28px" fontWeight="400" mb="30px" color="#fff">
              Contact Us
            </Heading>

            <Flex gap="20px" mb="20px">
              <Box flex="1">
                <Text fontSize="14px" color="#888" mb="8px">
                  First Name
                </Text>
                <Input
                  placeholder="Your first name"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid #333"
                  color="#fff"
                  _placeholder={{ color: '#666' }}
                  _hover={{ borderColor: '#555' }}
                  _focus={{ borderColor: '#666', boxShadow: 'none' }}
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </Box>
              <Box flex="1">
                <Text fontSize="14px" color="#888" mb="8px">
                  Last Name
                </Text>
                <Input
                  placeholder="Your last name"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid #333"
                  color="#fff"
                  _placeholder={{ color: '#666' }}
                  _hover={{ borderColor: '#555' }}
                  _focus={{ borderColor: '#666', boxShadow: 'none' }}
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </Box>
            </Flex>

            <Box mb="30px">
              <Text fontSize="14px" color="#888" mb="8px">
                Email
              </Text>
              <Input
                placeholder="steve@rr.com"
                bg="rgba(255,255,255,0.05)"
                border="1px solid #333"
                color="#fff"
                _placeholder={{ color: '#666' }}
                _hover={{ borderColor: '#555' }}
                _focus={{ borderColor: '#666', boxShadow: 'none' }}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </Box>

            <Button
              w="100px"
              h="32px"
              bg="#1f1f1f"
              color="#ccc"
              border="1px solid #444"
              borderRadius="24px"
              fontSize="14px"
              fontWeight="400"
              _hover={{ bg: '#444', borderColor: '#555' }}
              _active={{ bg: '#555' }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Flex>
        <Box maxW="1280px" mx="auto">
          {/* Copyright */}
          <Text fontSize="14px" color="#444" mb="10px">
            Copyright © 2025 Adapt
          </Text>

          <Text fontSize="12px" color="#333" lineHeight="16px">
            Disclaimer: The articles published on this site only represent personal views and have
            nothing to do with the official position of Adapt.
          </Text>
        </Box>
      </Box>
    </motion.div>
  )
}
