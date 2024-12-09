import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'

export function Confirm({ title, info, open, closeModal, confirmEvt, loading }) {
  return (
    <Modal mode={'base'} isOpen={open} title={title} closeModal={closeModal}>
      <div className="flex h-[112px] flex-col justify-between">
        <p className="text-sm opacity-80">{info}</p>
        <div className="flex justify-end">
          <Button className="mr-2" variant="outlined" onClick={() => closeModal('Cancel')}>
            Cancel
          </Button>
          <Button loading={loading}  onClick={() => confirmEvt()}>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  )
}
