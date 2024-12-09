import { useMemo } from 'react';
import { useUser } from '#/state/application/hooks';

export function useBoundWallet() {
  const info = useUser()
  const boundWallet = useMemo(() => {
    return info?.binds.find(f => f.auth_user_bind_type === 'wallet')?.auth_user_bind_key
  }, [info])
  return boundWallet
}
