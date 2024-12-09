import { useState } from 'react'
import Link from 'next/link'
import isEmail from 'validator/lib/isEmail'

import Loader from '@/components/Loader'

import { sendEmailCode } from '../../repository'

function ChangePasswordFormView() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [result, setResult] = useState('')

  return (
    <>
      <input
        type="text"
        className="h-12 w-full rounded-t-xl border-0 bg-[#f1f1f1] pl-3 text-sm placeholder:text-gray-1100"
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        disabled={email === '' || !isEmail(email) || loading}
        onClick={async () => {
          setLoading(true)
          const res = await sendEmailCode({ email, type: 'reset_password' })
          if (res.success) {
            setResult('success')
          }
          setLoading(false)
        }}
        className="flex h-12 w-full items-center justify-center rounded-xl rounded-t-none bg-gray text-white disabled:opacity-20"
      >
        {loading && <Loader classname="mr-2" />}
        <span>Continue</span>
      </button>
      {result && (
        <p className="mt-6 h-12 w-full rounded-xl bg-[rgba(1,219,131,0.1)] px-[21px] text-[13px] leading-[48px]">
          Check your email for a link to reset your password.
        </p>
      )}
      <div className="mt-6 text-center">
        Don&lsquo;t have an account?&nbsp;
        <Link href="/signup" className="cursor-pointer text-sm font-bold text-[#01DB83] hover:underline">
          Sign up
        </Link>
      </div>
    </>
  )
}

export default ChangePasswordFormView
