import clsx from 'clsx'

import useBindWallet from '../../hooks/useBindWallet'

function WalletBinderWidget({ className, children, onBind }) {
  const bindWallet = useBindWallet()

  return (
    <span className={clsx('cursor-pointer', className)} onClick={() => bindWallet(onBind)}>{children}</span>
  )
}

export default WalletBinderWidget
