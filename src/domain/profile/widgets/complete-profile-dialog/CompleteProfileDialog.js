import Link from 'next/link'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { NotCompleteIcon, CompleteIcon } from '@/components/Icons'

import WalletBinderWidget from '../../../auth/widgets/wallet-binder'

function CompleteProfileDialogWidget({ open, close, title, notBindWallet, notComplete }) {
  return (
    <Modal title={title} isOpen={open} closeModal={close} mode={'base'}>
      <div>
        <div className="rounded-lg bg-gray-1400 p-4">
          <div className="text-sm flex justify-between items-center">
            <p className="flex items-center">
              {notComplete ? <NotCompleteIcon className="mr-2" /> : <CompleteIcon className="mr-2" />}
              Complete your Profile
            </p>
            {notComplete && <Link href="/profile"><Button className="h-6 px-2 rounded-md">Complete</Button></Link>}
          </div>
          <div className="mt-4 text-sm flex justify-between items-center">
            <p className="flex items-center">
              {notBindWallet ? <NotCompleteIcon className="mr-2" /> : <CompleteIcon className="mr-2" />}
              Bind your web3 wallet
            </p>
            {notBindWallet && (
              <Button className="h-6 p-0 rounded-md">
                <WalletBinderWidget className="inline-block px-2" onBind={() => window.location.reload()}>Bind</WalletBinderWidget>
              </Button>
            )}
          </div>
        </div>

        <Link href="/profile" className="mt-4 flex w-full justify-center">
          <Button fullWidth >
            Go to my profile
          </Button>
        </Link>
      </div>
    </Modal>
  )
}

export default CompleteProfileDialogWidget
