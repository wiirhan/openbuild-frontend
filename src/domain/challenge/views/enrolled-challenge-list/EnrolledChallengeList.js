import LoadableList from '@/components/loadable-list'

import { fetchEnrolledChallengeList } from '../../repository'
import EnrolledChallengeItem from './EnrolledChallengeItem'

function EnrolledChallengeList({ list }) {
  return (
    <div>
      {list.map(({ series }, idx) => <EnrolledChallengeItem key={`challenge-${idx}`} data={series} />)}
    </div>
  )
}

function EnrolledChallengeListView({ params }) {
  return (
    <LoadableList
      params={params}
      fetch={fetchEnrolledChallengeList}
      resolveResponse={res => ({ list: res.data.list, total: res.data.count })}
      renderList={list => <EnrolledChallengeList list={list} />}
    />
  )
}

export default EnrolledChallengeListView
