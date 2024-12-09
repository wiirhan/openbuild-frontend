import Link from 'next/link'
import { XMarkIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'
import { QuizCore } from './QuizCore'
import { useEffect, useMemo, useState } from 'react'
import { post } from '@/utils/request'
import { toast } from 'react-toastify'
import FeedbackDialog from '../../widgets/feedback-dialog'
import AnswerRecordDrawer from './AnswerRecordDrawer'

export function QuizComponents({id, data}) {
  const [page, setPage] = useState(1)
  const [quiz, setQuiz] = useState()
  const [submiting, setSubmiting] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [submitData, setSubmitData] = useState()

  useEffect(() => {
    if (data) {
      const arr = (data.quiz_body || []).map(i => {
        return {...i, answer: []}
      })
      setQuiz(arr)
    }
  }, [data])

  const _progress = useMemo(() => {
    const noAnswer = quiz?.filter(f => f.answer?.length !== 0)
    return noAnswer ? (noAnswer.length / quiz.length) * 100 : 0
  }, [quiz])

  const submit = async () => {
    const sendParams = quiz?.map(i => {
      return {
        'quiz_body_id': i.id,
        'quiz_item_id': i.answer
      }
    })
    setSubmiting(true)
    const res = await post(`ts/v1/quiz/${id}/answer`, {data: sendParams})
    setSubmiting(false)
    if (res.code === 200) {
      setSubmitData(res.data)
      setOpenModal(true)
      const arr = res.data.quiz_user_answer.map((i, k) => {
        return {...quiz[k], judgment: i.judgment}
      })
      setQuiz(arr)
    } else {
      toast.error(res.message)
    }
  }
  return (
    <>
      <div className="flex items-center justify-between mb-[64px]">
        <Link href={`/quiz/${id}`} className="opacity-60 text-xs flex items-center">
          <XMarkIcon className="h-4 w-4 mr-2" /> Close
        </Link>
        <div className="flex items-center">
          <AnswerRecordDrawer questions={quiz} result={submitData} submitting={submiting} onSubmit={submit} />
          {!submitData && <Button className="min-w-[120px] ml-3" onClick={submit} loading={submiting}>Submit</Button>}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[680px]">
          <QuizCore quiz={quiz} setQuiz={setQuiz} page={page} submitData={submitData} />
          <div className="absolute bottom-14 flex items-center justify-between w-[680px]">
            <div className="flex items-center">
              <progress class="progress w-56" value={_progress.toFixed(0)} max="100"></progress>
              <span className="text-xs ml-2">{_progress.toFixed(0)}%</span>
            </div>
            <div className="flex items-center">
              {page > 1 && <Button variant="outlined" onClick={() => setPage(page - 1)}><ChevronLeftIcon className="w-5 h-5" /></Button>}
              {page < data?.quiz_body?.length && <Button className="ml-2 px-12" onClick={() => setPage(page + 1)}>Next</Button>}
            </div>
          </div>
        </div>
      </div>
      <FeedbackDialog
        openModal={openModal}
        result={submitData}
        setOpenModal={setOpenModal}
        quiz={data}
      />
    </>
  )
}
