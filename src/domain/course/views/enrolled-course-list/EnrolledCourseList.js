import LoadableList from '@/components/loadable-list'

import { fetchEnrolledCourseList } from '../../repository'
import EnrolledCourseItem from './EnrolledCourseItem'

function EnrolledCourseList({ list }) {
  return (
    <div>
      {list.map(({ series }, idx) => <EnrolledCourseItem key={`course-${idx}`} data={series} />)}
    </div>
  )
}

function EnrolledCourseListView({ params }) {
  return (
    <LoadableList
      params={params}
      fetch={fetchEnrolledCourseList}
      resolveResponse={res => ({ list: res.data.list, total: res.data.count })}
      renderList={list => <EnrolledCourseList list={list} />}
    />
  )
}

export default EnrolledCourseListView
