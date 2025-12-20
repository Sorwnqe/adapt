import { Box, Center, Image } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product')({
  component: Product,
})

function Product() {
  return (
    <Center>
      <Box maxW="1200px" w="100%">
        <Image src="/images//product/coming-soon.jpg" />
      </Box>
    </Center>
  )
}
