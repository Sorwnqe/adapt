import { Image, ImageProps } from '@chakra-ui/react'

const SuiLogo = (props: ImageProps) => {
  return <Image src="/images/logo-sui.png" objectFit="contain" {...props} />
}
export default SuiLogo
