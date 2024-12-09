import LoadableList from '@/components/loadable-list'

import { useUser } from '#/state/application/hooks'

import { fetchPublishedChallengeList } from '../../repository'
import PublishedChallengeItem from './PublishedChallengeItem'

function PublishedChallengeList({ list, viewingSelf }) {
  return (
    <div>
      {list.map((item, idx) => <PublishedChallengeItem key={`challenge-${idx}`} data={item} viewingSelf={viewingSelf} />)}
    </div>
  )
}

function PublishedChallengeListView({ params }) {
  const currentUser = useUser()
  const viewingSelf = params && currentUser ? params.userId === currentUser.base.user_id : false

  return (
    <LoadableList
      params={params}
      fetch={fetchPublishedChallengeList}
      resolveResponse={res => ({ list: res.data.list, total: res.data.count })}
      renderList={list => <PublishedChallengeList list={list} viewingSelf={viewingSelf} />}
    />
  )
}

export default PublishedChallengeListView
