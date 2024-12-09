import { SvgIcon } from '@/components/Image'
import LoadableList from '@/components/loadable-list'

import { useUser } from '#/state/application/hooks'

import { fetchPublishedQuizList } from '../../repository'
import QuizItem from '../../widgets/quiz-item'

function PublishedQuizList({ list, viewingSelf }) {
  return (
    <div>
      {list.map(i => (
        <QuizItem key={`quiz-${i.id}`} data={i}>
          {viewingSelf && (
            <>
              <span style={{ marginRight: 8 }}>Edit</span>
              <SvgIcon name="arrow-right-top" size={20} />
            </>
          )}
        </QuizItem>
      ))}
    </div>
  )
}

function PublishedQuizListView({ params }) {
  const currentUser = useUser()
  const viewingSelf = params && currentUser ? params.userId === currentUser.base.user_id : false

  return (
    <LoadableList
      params={params}
      fetch={fetchPublishedQuizList}
      resolveResponse={res => ({ list: res.data.list, total: res.data.count })}
      renderList={list => <PublishedQuizList list={list} viewingSelf={viewingSelf} />}
    />
  )
}

export default PublishedQuizListView
