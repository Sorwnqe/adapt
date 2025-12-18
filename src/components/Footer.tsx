import { Box, Flex, Heading, Text, Input, Button, HStack, useToast } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import EmailService from '../utils/sendEmail'
import { socials } from '../env'

export const Footer: FC = () => {
  const toaster = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
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
  const copyEmail = async () => {
    const res = await EmailService.sendContactEmailSecure(formData)
    if (!res.success) {
      toaster({
        title: 'Error',
        description: res.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom',
      })
      return
    }
  }

  const handleSubmit = async () => {
    if (isSubmitting) return

    setIsSubmitting(true)
    copyEmail()
    setIsSubmitting(false)
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
      <Box bg="#000" color="#fff" py="80px" px="20px" mt="auto" id="About">
        <Flex
          maxW="1200px"
          mx="auto"
          justify="space-between"
          align="flex-start"
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: '40px', lg: '80px' }}
        >
          {/* Left Side - Content */}
          <Box flex="1" maxW={{ base: '100%', lg: '500px' }}>
            <Heading
              fontSize={{ base: '32px', md: '48px' }}
              lineHeight={{ base: '36px', md: '52px' }}
              fontWeight="400"
              mb="40px"
              color="#fff"
            >
              Adapt Now,
              <br />
              Thrive Always.
            </Heading>

            <Text fontSize="16px" color="#868686" mb="20px" lineHeight="24px">
              Adapt ANP3 will become the "HTTP" Standard for
              <br />
              agents, pushing encrypted quantification into the
              <br />
              era of multi-agant adaptation.
            </Text>

            {/* Social Icons */}
            <HStack spacing="20px" mb={{ md: '60px' }}>
              {socials.map((social) => (
                <Box
                  key={social.name}
                  w="44px"
                  h="44px"
                  borderRadius="50%"
                  bg="#101010"
                  color="#414141"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  _hover={{ bg: '#2a2a2a', color: '#B9B9B9' }}
                  transition="background 0.2s"
                  as="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  {/* <RiTwitterXFill size={18} /> */}
                </Box>
              ))}
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
            <Heading
              fontSize={{ base: '22px', md: '28px' }}
              fontWeight="400"
              mb="30px"
              color="#fff"
            >
              Contact Us
            </Heading>

            <Flex gap="20px" mb="20px">
              <Box flex="1">
                <Text fontSize={{ base: '14px', md: '14px' }} color="#888" mb="8px">
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
                <Text fontSize={{ base: '14px', md: '14px' }} color="#888" mb="8px">
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
                  disabled={isSubmitting}
                />
              </Box>
            </Flex>

            <Box mb="30px">
              <Text fontSize={{ base: '14px', md: '14px' }} color="#888" mb="8px">
                Email
              </Text>
              <Input
                placeholder="name@domain.com"
                bg="rgba(255,255,255,0.05)"
                border="1px solid #333"
                color="#fff"
                _placeholder={{ color: '#666' }}
                _hover={{ borderColor: '#555' }}
                _focus={{ borderColor: '#666', boxShadow: 'none' }}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={isSubmitting}
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
              isLoading={isSubmitting}
              loadingText="Opening..."
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Flex>
        <Box maxW="1200px" mx="auto" mt={{ base: '40px', md: '0' }}>
          {/* Copyright */}
          <Text fontSize="14px" color="#444" mb="10px">
            Copyright © 2025 Adapt-ANP3
          </Text>

          <Text fontSize="12px" color="#333" lineHeight="16px">
            Disclaimer: The articles published on this site only represent personal views and have
            nothing to do with the official position of Adapt-ANP3.
          </Text>
        </Box>
      </Box>
    </motion.div>
  )
}
