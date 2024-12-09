'use client'

import { ProfileTitle } from '#/styleds'
import { Button } from '@/components/Button'
import Link from 'next/link'
// import { useState } from 'react'
// import Switch from '@/components/Switch'

export function Setting() {
  // const [enabled, setEnabled] = useState(false)
  return (
    <div id="setting" className="mt-14 mb-9">
      <ProfileTitle>Setting</ProfileTitle>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm md:text-lg">Change password</p>
        <Link href="/change" target={'_blank'}>
          <Button variant="outlined" className="h-9">
            Click to change
          </Button>
        </Link>
        {/* <Link href="/change" target={'_blank'}>
          <Button variant="contained" className="h-9">
            Send Email
          </Button>
        </Link> */}
      </div>
      {/* <div className="mt-6 flex items-center justify-between">
        <div>
          <p>Newsletters Subscribe</p>
          <p className="mt-2 text-sm opacity-40">Read more subscription information</p>
        </div>
        <Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p>Learn update notice</p>
          <p className="mt-2 text-sm opacity-40">Read more subscription information</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p>Build update notice</p>
          <p className="mt-2 text-sm opacity-40">Read more Build update notice subscription information</p>
        </div>
      </div> */}
    </div>
  )
}
