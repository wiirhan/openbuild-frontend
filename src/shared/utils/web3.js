export async function signBounty(chainId, contractAddress, singer, taskId, amount, deadline) {
  const domain = {
    name: 'Task',
    version: '1',
    chainId,
    verifyingContract: contractAddress,
  }

  const types = {
    Withdraw: [
      { name: 'taskId', type: 'uint256' },
      { name: 'amount', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
  }
  // console.log(amount)
  // return
  try {
    const sig = await singer?.signTypedData({domain, types, primaryType: 'Withdraw', message: {
      taskId, amount: amount.toString(), deadline
    }})
    return sig
  } catch (err) {
    console.log(err, 'err')
    return 'error'
  }
}

export async function signSkillHub(chainId, contractAddress, singer, amount, time, token, deadline) {
  const domain = {
    name: 'Employment',
    version: '1',
    chainId,
    verifyingContract: contractAddress,
  }

  const types = {
    Employ: [
      { name: 'amount', type: 'uint256' },
      { name: 'time', type: 'uint256' },
      { name: 'token', type: 'address' },
      { name: 'deadline', type: 'uint256' },
    ],
  }
  try {
    const sig = await singer?.signTypedData({domain, types, primaryType: 'Employ', message: {
      amount: amount.toString(),
      time,
      token,
      deadline,
    }})
    return sig
  } catch {
    console.log('error')
    return 'error'
  }
}
