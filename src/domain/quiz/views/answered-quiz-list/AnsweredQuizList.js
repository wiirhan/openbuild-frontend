import LoadableList from '@/components/loadable-list'

import { useUser } from '#/state/application/hooks'

import { fetchAnsweredQuizList } from '../../repository'
import QuizItem from '../../widgets/quiz-item'

function AnsweredQuizList({ list, viewingSelf }) {
  return (
    <div>
      {list.map(i => (
        <QuizItem key={`quiz-${i.quiz_id}`} data={i.quiz_info}>
          {viewingSelf && (
            <>
              <span style={{ marginRight: 8 }}>You Scored</span>
              <span style={{ fontWeight: 'bolder' }}>{i.score}</span>
            </>
          )}
        </QuizItem>
      ))}
    </div>
  )
}

function AnsweredQuizListView({ params }) {
  const currentUser = useUser()
  const viewingSelf = params && currentUser ? params.userId === currentUser.base.user_id : false

  return (
    <LoadableList
      params={params}
      fetch={fetchAnsweredQuizList}
      resolveResponse={res => ({ list: res.data })}
      renderList={list => <AnsweredQuizList list={list} viewingSelf={viewingSelf} />}
    />
  )
}

export default AnsweredQuizListView
