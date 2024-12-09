import { Modal } from '@/components/Modal'
import { useState } from 'react'
import { BASE_INPUT_STYLE } from '@/constants/config'
import { toast } from 'react-toastify'
import { Button } from '@/components/Button'
import { applyAction } from './actions'

export function ApplyModal({ open, closeModal, id }) {
  const [checked, setChecked] = useState(false)
  const [comment, setComment] = useState('')
  const [appling,  setAppling] = useState(false)
  return (
    <Modal isOpen={open} title={'Apply Bounty'} closeModal={closeModal} mode={'base'}>
      <div>
        <p className="mb-1 text-sm opacity-60">Your comment</p>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          className={`${BASE_INPUT_STYLE} h-[100px] pt-2`}
        />
      </div>
      <div className="my-6 flex">
        <label className="label cursor-pointer flex items-center">
          <input onChange={() => setChecked(!checked)} type="checkbox" checked={checked} className="checkbox" />
          <span className="label-text ml-2">I agree send my profie and contact information the employer</span>
        </label>
      </div>
      <Button
        loading={appling}
        disabled={!checked || comment === ''}

        fullWidth
        onClick={async () => {
          setAppling(true)
          const res = await applyAction(id, comment)
          if (res) {
            toast.error(res.message)
          }
          setAppling(false)
          closeModal()
        }}
      >
        Apply
      </Button>
    </Modal>
  )
}
