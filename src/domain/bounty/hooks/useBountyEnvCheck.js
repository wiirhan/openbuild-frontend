import { BOUNTY_SUPPORTED_CHAIN } from '@/constants/chain';

import useEnsureRightEnv from '../../auth/hooks/useEnsureRightEnv'

function useBountyEnvCheck() {
  return useEnsureRightEnv({
    chainId: BOUNTY_SUPPORTED_CHAIN(),
    autoConnect: true,
    walletRequired: true,
  }).wrap
}

export default useBountyEnvCheck
