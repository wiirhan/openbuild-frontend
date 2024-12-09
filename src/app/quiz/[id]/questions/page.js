'use client'

import QuizQuestionListView from '#/domain/quiz/views/quiz-question-list'

export default function QuizDetails({ params }) {
  return (
    <QuizQuestionListView id={params.id} />
  )
}
