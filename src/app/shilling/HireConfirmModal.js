import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import Image from 'next/image'
import MessagePic from 'public/images/message.png'

export function HireConfirmModal({ open, closeModal }) {
  return (
    <Modal isOpen={open} closeModal={closeModal} mode={'base'}>
      <div className="flex flex-col items-center">
        <Image width={78} src={MessagePic} alt="" />
        <p className="my-9 text-center">
          Suggest to communicate with the developer to confirm the cost before employ, thank you.
        </p>
        <div className="flex w-full">
          <Button onClick={closeModal} variant="outlined" className="mr-2 flex-1 px-10">
            Contact First
          </Button>
          <Button onClick={closeModal} variant="contained" className="flex-1 px-10">
            Continue Hire
          </Button>
        </div>
      </div>
    </Modal>
  )
}
