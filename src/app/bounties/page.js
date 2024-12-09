import { Suspense } from 'react'

import { Title } from '../learn/Title'
import { SartOnOpenBuild } from '../learn/SartOnOpenBuild'
import { Filter } from '@/components/Filter'
import { BountyFilter } from './Filter'
import { Container } from './Container'
import { ListSkeleton } from './ListSkeleton'

export default function Page({ params, searchParams }) {
  return (
    <div>
      <div className="px-6 md:px-6">
        <Title title="Bounties" desc="Post and Discover Bounties with Payment Secured by OpenBuild Smart Contract." />
        <div className="flex">
          <Filter type={'bounty'}>
            <BountyFilter />
          </Filter>
          <Suspense fallback={<ListSkeleton />}>
            <Container type={params.type} searchParams={searchParams}  />
          </Suspense>
          {/* <Content type={'bounty'} /> */}
        </div>
      </div>
      {/* {status !== } */}
      <SartOnOpenBuild />
    </div>
  )
}
