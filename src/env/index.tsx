import { RiGithubFill, RiMediumFill, RiTwitterXFill } from 'react-icons/ri'

export const BASE_URL = window.location.origin

export const socials = [
  {
    name: 'twitter',
    link: 'https://x.com/AdaptHF',
    icon: <RiTwitterXFill size={18} />,
  },
  {
    name: 'github',
    link: 'https://github.com/agent-network-protocol/AgentNetworkProtocol',
    icon: <RiGithubFill size={18} />,
  },
  {
    name: 'medium',
    link: 'https://medium.com/@AdaptAI',
    icon: <RiMediumFill size={18} />,
  },
]
