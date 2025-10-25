import { ListItem, UnorderedList } from '@chakra-ui/react'

export const columns: any[] = [
  {
    title: 'Risk Level',
    tabIndex: 'level',
  },
  {
    title: 'Strategy',
    dataIndex: 'strategy',
  },
  {
    title: 'Details',
    dataIndex: 'details',
  },
  {
    title: '2024 Performance',
    dataIndex: 'performance',
  },
]

//performances
// • APY: ~20%
// • Max Drawdown: -1%

// • APY: 20-30%
// • Max Drawdown: -2%

// • APY: 30-40%
// • Max Drawdown: -3%

// • APY: 40-50%
// • Max Drawdown: -3.5%

// • APY: 50-60%
// • Max Drawdown: -5%

// • APY: 103%
// • Max Drawdown: -7.6%

// • APY: >300%
// • Max Drawdown: -25%

export const data = [
  {
    id: '1',
    level: 'Low',
    strategy: 'Aribitrage',
    details: (
      <>
        High-frequency arbitrage <br />
        (on-exchange & <br />
        cross-exchange)
      </>
    ),
    performance: (
      <UnorderedList>
        <ListItem>APY: ~20%</ListItem>
        <ListItem>Max Drawdown: -1%</ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '2',
    level: '',
    strategy: (
      <>
        Arbitrage+Core <br />
        Strategy
      </>
    ),
    details: (
      <>
        Arbitrage as profit buffer; <br />
        50:50 ratio with core <br />
        strategy
      </>
    ),
    performance: (
      <UnorderedList>
        <ListItem>APY: 20-30%</ListItem>
        <ListItem>Max Drawdown: -2%</ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '3',
    level: 'Medium',
    strategy: (
      <>
        Core Strategy 1x <br />
        (Arbitrage Buffer)
      </>
    ),
    details: (
      <>
        2-3% buffer via
        <br />
        arbitrage → full deployment
        <br />
        of core strategy
      </>
    ),
    performance: (
      <UnorderedList>
        <ListItem>APY: 30-40%</ListItem>
        <ListItem>Max Drawdown: -3%</ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '4',
    level: '',
    strategy: (
      <>
        Core Strategy
        <br />
        0.5-1x
        <br />
        (Small Buffer)
      </>
    ),
    details: (
      <>
        mall core position builds
        <br />
        2-3% buffer → scale to full
        <br />
        1x core strategy
      </>
    ),
    performance: (
      <UnorderedList>
        <ListItem>APY: 40-50%</ListItem>
        <ListItem>Max Drawdown: -3.5%</ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '5',
    level: '',
    strategy: (
      <>
        Core Strategy 1x
        <br />
        (No Buffer)
      </>
    ),
    details: (
      <>
        Standard core strategy;
        <br />
        no profit buffer
      </>
    ),
    performance: (
      <UnorderedList>
        <ListItem>APY: 50-60%</ListItem>
        <ListItem>Max Drawdown: -5%</ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '6',
    level: 'Medium-High',
    strategy: <>Core Strategy 1.5x</>,
    details: (
      <>
        1.5x leverage on
        <br />
        core strategy
      </>
    ),
    performance: (
      <UnorderedList>
        <ListItem>APY: 103%</ListItem>
        <ListItem>Max Drawdown: -7.6%</ListItem>
      </UnorderedList>
    ),
  },
  {
    id: '7',
    level: 'Extreme',
    strategy: <>Core Strategy 5x</>,
    details: (
      <>
        5x leverage on core
        <br />
        strategy; scientific
        <br />
        betting & loss-controlled
      </>
    ),
    performance: (
      <UnorderedList>
        <ListItem>{'APY: >300%'}</ListItem>
      </UnorderedList>
    ),
  },
]
