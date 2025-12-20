import { Center, Image } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product')({
  component: Product,
})

function Product() {
  return (
    <Center>
      <Image src="/images//product/coming-soon.jpg" />
    </Center>
  )
}
