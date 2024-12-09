import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'


export function ViewModal({
  open,
  closeModal,
  item,
}) {
  return (
    <Modal isOpen={open} title={'View Apply'} closeModal={closeModal} mode={'base'}>
      <div>
        <p className="mb-1 text-sm opacity-60">Your comment</p>
        <p>{item.comment}</p>
      </div>
      {/* <div className="mt-4">
        <p className="mb-1 text-sm opacity-60">Expected period(days)</p>
        <p>10 days</p>
      </div>
      <div className="mt-4">
        <p className="mb-1 text-sm opacity-60">Expected bounty amount</p>
        <p>$1000</p>
      </div> */}

      <Button variant="contained" fullWidth className="mr-4 font-bold mt-4" onClick={() => closeModal()}>
        Close
      </Button>
    </Modal>
  )
}
