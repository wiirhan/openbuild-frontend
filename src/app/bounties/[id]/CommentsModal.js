import { Modal } from '@/components/Modal'

export function CommentsModal({
  open,
  closeModal,
  comment,
}) {
  return (
    <Modal isOpen={open} title={'Comments'} closeModal={closeModal} mode={'base'}>
      <div className="text-sm opacity-80">
        <p>{comment}</p>
      </div>

    </Modal>
  )
}
