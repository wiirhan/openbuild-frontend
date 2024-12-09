import { classNames } from '@/utils'

import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useSlillhubChain } from '#/state/application/hooks'
import { waitForTransaction } from '@wagmi/core'
// import { writeContract, prepareWriteContract } from '@wagmi/core'
import { hireCancel } from '#/services/shilling'
import { writeContract } from '@wagmi/core';
import { baseInputStyles } from '#/styleds'

export function TerminateModal({ open, closeModal, data }) {
  const slillhubChain = useSlillhubChain()
  const [confirmimg, setConfirmimg] = useState(false)
  const [comment, setComment] = useState('')
  const terminate = async () => {
    if (!slillhubChain) return
    try {
      setConfirmimg(true)
      // const _config = await prepareWriteContract({
      //   address: slillhubChain.contract_address,
      //   abi: JSON.parse(slillhubChain?.abi),
      //   functionName: 'cancelEmployment',
      //   args: [Number(data.contract_index_id)],
      // })

      const { hash } = await writeContract({
        address: slillhubChain.contract_address,
        abi: JSON.parse(slillhubChain?.abi),
        functionName: 'cancelEmployment',
        args: [Number(data.contract_index_id)],
      })
      await waitForTransaction({ hash })
      // wait()
      const res = await hireCancel(data.uid, data.id, hash, comment)
      if (res.code === 200) {
        closeModal()
      } else {
        toast.error(res.message)
      }
      setConfirmimg(false)
    } catch (err) {
      console.log(err)
      setConfirmimg(false)
    }
  }

  return (
    <Modal title={'Terminate Hire'} isOpen={open} closeModal={closeModal} mode={'base'}>
      <div>
        <div className="mb-4">
          <p className="mb-1 text-sm opacity-60">Reason for your termination</p>
          <textarea
            value={comment}
            placeholder={'Please enter reason for your termination...'}
            className={classNames(baseInputStyles, 'h-[88px] focus:!ring-0')}
            onChange={e => setComment(e.target.value)}
          />
        </div>

        <Button onClick={terminate} disabled={comment === ''} loading={confirmimg} fullWidth variant="contained">
          Confirm temination
        </Button>
      </div>
    </Modal>
  )
}
