import { Image, ImageProps } from '@chakra-ui/react'

const Logo = (props: ImageProps) => {
  return <Image src="/images/logo.png" objectFit="contain" {...props} />
}
export default Logo
