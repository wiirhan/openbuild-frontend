import { BountyABI } from './abis/bounty'
import { contracts, payTokens } from './contract'
import { parseUnits } from '@ethersproject/units'
import { waitForTransaction, writeContract } from '@wagmi/core'

export async function withdraw(walletClient, chainId, taskId, amount, deadline, signature) {
  // console.log([taskId, parseUnits(amount.toString(), payTokens[chainId].usdt.decimals).toString(), deadline, signature])
  try {
    const { hash } = await writeContract({
      address: contracts[chainId].bounty,
      abi: BountyABI,
      functionName: 'withdraw',
      args: [taskId, parseUnits(amount.toString(), payTokens[chainId].usdt.decimals).toString(), deadline, signature],
    })
    const wait = await waitForTransaction({ hash })
    return { hash, wait }
  } catch {
    return { hash: 'error', wait: null }
  }
}
