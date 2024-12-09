import { useState } from 'react'

import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'

import {  useNetwork, useWalletClient } from 'wagmi'

import { toast } from 'react-toastify';

import { withdraw } from '@/constants/bounty'
import { revalidatePathAction } from '../../actions'
// import { writeContract } from '@wagmi/core';

import {
  // termination,
  finishConfirm,
  finishDeny,
  // arbitrate,
} from '#/services/bounties';
import { useBountyEnvCheck } from '#/domain/bounty/hooks'

export function AgreeFinishedModal({open, close, bounty}) {
  const [loading, setLoading] = useState(false)
  const [disagreeLoading, setDisagreeLoading] = useState(false)
  const { chain } = useNetwork()
  const { data: walletClient } = useWalletClient()
  const wrapBountyEnvCheck = useBountyEnvCheck()

  const confirm = wrapBountyEnvCheck(async () => {
    setLoading(true)
    const last = bounty.last_event;
    if (!last) return;
    try {
      const { hash } = await withdraw(
        walletClient,
        chain?.id,
        last?.bounty_task,
        (last?.extra_5),
        last.extra_6,
        last.extra_1
      );

      if (hash === 'error') {
        setLoading(false);
        toast.error('Transition Error')
        return;
      }
      const res = await finishConfirm(bounty.id, hash);
      setLoading(false);
      if (res.code === 200) {
        toast.success('Successful');
        close();
        revalidatePathAction()
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.log(err)
      setLoading(false);
      toast.error(err)
    }
    setLoading(false)
  })

  const disagreeFinished = async () => {
    setDisagreeLoading(true);
    const res = await finishDeny(bounty.id);
    setDisagreeLoading(false);
    if (res.code === 200) {
      toast.success('successful');
      close();
      revalidatePathAction()
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Modal isOpen={open} title={'Confirm the Bounty'} closeModal={() => {close(); setLoading(false);}} mode={'base'}>
      <p className="text-xs opacity-60 my-4">Please confirm whether agree Completed this bounty!</p>
      <div className="flex gap-4 justify-center">
        <Button onClick={disagreeFinished} variant="contained" loading={disagreeLoading}>Disagree</Button>
        <Button onClick={confirm} variant="contained" loading={loading}>Agree</Button>
      </div>

    </Modal>
  )
}
