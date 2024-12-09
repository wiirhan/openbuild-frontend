import { useState } from 'react'

import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'

import { useNetwork, useWalletClient } from 'wagmi'
import { BOUNTY_SUPPORTED_CHAIN } from '@/constants/chain';

import { biulderFinish } from '#/services/bounties'
import { toast } from 'react-toastify';
import { signBounty } from '@/utils/web3'

import { contracts, payTokens } from '@/constants/contract'
import { currentTime } from '@/utils/date'
import { parseUnits } from '@ethersproject/units'
import { revalidatePathAction } from '../../actions'
import { useBountyEnvCheck } from '#/domain/bounty/hooks'

export function ApplyFinishedModal({open, close, bounty}) {
  const _contracts = contracts[BOUNTY_SUPPORTED_CHAIN()]
  const paytoken = payTokens[BOUNTY_SUPPORTED_CHAIN()].usdt
  const wrapBountyEnvCheck = useBountyEnvCheck()

  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const { chain } = useNetwork()

  const { data: walletClient } = useWalletClient()

  const finished = wrapBountyEnvCheck(async () => {
    setLoading(true)
    const _deadline = currentTime() + 7 * 24 * 60 * 60
    // bounty withdraw
    const _s = await signBounty(chain?.id, _contracts.bounty, walletClient, bounty.task, parseUnits(amount.toString(), paytoken.decimals), _deadline)
    if (_s === 'error') {
      setLoading(false)
      return
    }
    const res = await biulderFinish(bounty.id, Number(amount), _s, _deadline)
    if (res.code === 200) {
      toast.success('Successful')
      close()
      revalidatePathAction()
    } else {
      toast.error(res.message)
    }
    setLoading(false)
  })

  return (
    <Modal isOpen={open} title={'Confirm the Bounty'} closeModal={close} mode={'base'}>
      <div className="flex items-center text-sm border border-gray-600 rounded px-2">
        <strong className="px-1">$</strong>
        <input
          placeholder=""
          type="text"
          value={amount}
          className="border-0 flex-1 pr-4 h-10"
          onChange={e => {
          const val = e.target.value.replace(/[^\d]/g, '')
          setAmount(val)
        }} />
        USDT
      </div>
      <p className="text-xs opacity-60 my-4">If you have negotiated a new bounty with your employer, you can make changes, otherwise, please do not make changes to avoid disputes</p>
      <Button disabled={Number(amount) < 1} onClick={finished} variant="contained" fullWidth loading={loading}>
        Confrim
        {/* {chain?.id !== BOUNTY_SUPPORTED_CHAIN() ? 'Switch' : ''} */}
      </Button>
    </Modal>
  )
}
