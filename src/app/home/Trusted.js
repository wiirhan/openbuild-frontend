'use client'

import Marquee from 'react-fast-marquee'

import {
  SuiIcon,
  BitKeepIcon,
  LinkIcon,
  ScrollIcon,
  WalletConnectIcon,
  ProximityIcon,
  SolanaIcon,
  InterchainIcon,
  ConsensysIcon,
  SubqueryIcon,
  SmartTokenIcon,
  GitcoinIcon,
  BNBChainIcon,
  ConfluxIcon,
  EthStorageIcon,
  SeiIcon,
} from '@/components/Icons/Partners'

const LineOne = [
  {
    ele: <ConsensysIcon />
  },
  {
    ele: <SolanaIcon />
  },
  {
    ele: <ProximityIcon />
  },
  {
    ele: <InterchainIcon />
  },
  {
    ele: <GitcoinIcon />
  },
  {
    ele: <BNBChainIcon />
  },
  {
    ele: <LinkIcon />
  },
  {
    ele: <ConfluxIcon />
  },
]
const LineTwo = [
  {
    ele: <ScrollIcon />
  },
  {
    ele: <EthStorageIcon />
  },
  {
    ele: <SuiIcon />
  },
  {
    ele: <SubqueryIcon />
  },
  {
    ele: <SeiIcon />
  },
  {
    ele: <SmartTokenIcon />
  },
  {
    ele: <WalletConnectIcon />
  },
  {
    ele: <BitKeepIcon />
  },
]
export function Trusted() {

  return (
    <div className="text-center mb-14 md:mb-[120px] newest !p-0" data-aos="fade-up" data-aos-delay="500">
      <h1 className="text-[42px] leading-[52px] mb-9 max-md:text-[28px] max-md:leading-9 max-md:mb-6">Trusted By</h1>
      <div>
        <Marquee speed={30}>
          {LineOne.map((i, k) => <div
            key={`trusted-one-${k}`}
            className="trusted-box border border-gray-600 rounded-full md:h-[96px] md:w-[320px] h-12 w-[160px] mr-3 flex justify-center items-center">
            {i.ele}
          </div>)}
        </Marquee>
        <div className="md:h-6 h-3"></div>
        <Marquee direction="right" speed={30}>
          {LineTwo.map((i, k) => <div
            key={`trusted-one-${k}`}
            className="trusted-box border border-gray-600 rounded-full md:h-[96px] md:w-[320px] h-12 w-[160px] mr-3 flex justify-center items-center">
            {i.ele}
          </div>)}
        </Marquee>
      </div>
    </div>
  )
}