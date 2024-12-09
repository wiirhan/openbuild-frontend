import { Modal } from '@/components/Modal'
import { ModalCloseIcon } from '@/components/Icons'

import FeedbackScore from './FeedbackScore'
import FeedbackDetail from './FeedbackDetail'
import FeedbackForm from './FeedbackForm'

function FeedbackDialog({ result = {}, openModal, setOpenModal, quiz = {} }) {
  return (
    <Modal isOpen={openModal} closeModal={() => setOpenModal(false)} container mode="base">
      <div >
        <ModalCloseIcon onClick={() => setOpenModal(false)} className="absolute top-[-32px] right-[-32px] cursor-pointer" />
        <div className="p-6">
          <FeedbackScore score={result.score} passed={!!result.pass} />
          <hr className="border-dashed border-gray-600 mt-10" />
          {quiz.reward_collect_address ? <FeedbackForm result={result} quiz={quiz} /> : <FeedbackDetail result={result} />}
        </div>
      </div>
    </Modal>
  )
}

export default FeedbackDialog
