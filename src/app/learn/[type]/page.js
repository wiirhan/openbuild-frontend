import { Suspense } from 'react'
import { Title } from '../Title'
import { SartOnOpenBuild } from '../SartOnOpenBuild'
import { Filter } from '@/components/Filter'
import { ChallengesFilter } from '../ChallengesFilter'
import { Container } from './Container'
import { ListSkeleton } from './ListSkeleton'
// import { LearnNavBar } from './nav'


export default async function Page({ params, searchParams }) {
  return (
    <div>
      <div className="px-6">
        {params.type === 'courses' && (
          <Title
            title="Open Courses"
            desc="Selected open courses from technical skills to practical tasks, accessible to everyone with no cost!"
            // link="https://forms.gle/s2tDbixtdqTU8xbp9"
            // linkText="Click Here"
          />
        )}
        {params.type === 'challenges' && (
          <Title
            title="Challenges"
            desc="Hands-on Bootcamp, Workshop or Hackerhouse, etc."
            // link="https://forms.gle/s2tDbixtdqTU8xbp9"
            // linkText="Click Here"
          />
        )}
        {params.type === 'career_path' && (
          <Title
            title="Career Path"
            desc="Learning paths designed for different levels of builder"
          />
        )}
        {/* <LearnNavBar /> */}
        <div className="flex">
          <Filter type={params.type === 'courses' ? 'open_course' : params.type}>{params.type === 'challenges' && <ChallengesFilter />}</Filter>
          <Suspense fallback={<ListSkeleton />}>
            <Container type={params.type} searchParams={searchParams}  />
          </Suspense>
        </div>
      </div>
      <SartOnOpenBuild />
    </div>
  )
}
