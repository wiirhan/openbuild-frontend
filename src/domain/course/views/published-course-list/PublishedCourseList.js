import LoadableList from '@/components/loadable-list'

import { useUser } from '#/state/application/hooks'

import { fetchPublishedCourseList } from '../../repository'
import PublishedCourseItem from './PublishedCourseItem'

function PublishedCourseList({ list, viewingSelf }) {
  return (
    <div>
      {list.map((item, idx) => <PublishedCourseItem key={`course-${idx}`} data={item} viewingSelf={viewingSelf} />)}
    </div>
  )
}

function PublishedCourseListView({ params }) {
  const currentUser = useUser()
  const viewingSelf = params && currentUser ? params.userId === currentUser.base.user_id : false

  return (
    <LoadableList
      params={params}
      fetch={fetchPublishedCourseList}
      resolveResponse={res => ({ list: res.data.list, total: res.data.count })}
      renderList={list => <PublishedCourseList list={list} viewingSelf={viewingSelf} />}
    />
  )
}

export default PublishedCourseListView
