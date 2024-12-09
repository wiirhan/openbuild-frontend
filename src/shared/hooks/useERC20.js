import { erc20ABI, useContractRead, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { MaxUint256 } from '@ethersproject/constants'
import BigNumber from 'bignumber.js'

export function useAllowance(token, contract, account) {
  const { data: allowance, refetch: refetchAllowance } = useContractRead({
    address: token,
    abi: erc20ABI,
    functionName: 'allowance',
    args: account && contract && [account, contract],
  })
  return { allowance: new BigNumber(allowance), refetchAllowance }
}

export function useApprove(token, contract, account) {
  const { refetchAllowance } = useAllowance(token, contract, account)
  const { config } = usePrepareContractWrite({
    address: token,
    abi: erc20ABI,
    functionName: 'approve',
    args: contract && [contract, MaxUint256.toString()],
  })

  // console.log(config)

  const { data: writeContractResult, writeAsync: approveAsync } = useContractWrite(config)

  const { isLoading: isApproving } = useWaitForTransaction({
    hash: writeContractResult ? writeContractResult.hash : undefined,
    onSuccess() {
      refetchAllowance()
    },
  })

  return { isApproving, approveAsync, writeContractResult }
}
