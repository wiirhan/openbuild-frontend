'use client'

import { ArrowLeftIcon } from '@/components/Icons'
import { Button } from '@/components/Button'
import { Share } from '@/components/Share'
import Link from 'next/link'
import { Modal } from '@/components/Modal'
import { Employers } from './Employers'
import { useState } from 'react'

export function BountiesHeader({data, employers}) {
  const [employersModalOpen, setEmployersModalOpen] = useState(false)
  return (
    <div className="mb-12 flex justify-between">
      <Link href="/bounties" className="flex cursor-pointer items-center">
        <ArrowLeftIcon />
        <span className="ml-4 text-sm">Back to Bounties</span>
      </Link>

      <div className="flex items-center">
        {(
          <Button color={'primary'} className="mr-2 lg:hidden" onClick={() => setEmployersModalOpen(true)}>

            Apply
          </Button>
        )}
        <Share img={null} title={data.title} />
      </div>
      <Modal isOpen={employersModalOpen} closeModal={() => setEmployersModalOpen(false)}>
        <div className="pt-4">
          <Employers mobile id={employers.id} data={employers.data} list={employers.list} />
        </div>
      </Modal>
    </div>
  )
}
