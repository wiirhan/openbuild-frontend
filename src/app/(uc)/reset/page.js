'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'

import Loader from '@/components/Loader'

import { useForm } from 'react-hook-form'
import { reset } from '#/services/auth'
import { toast } from 'react-toastify'

export default function Reset() {
  const { register, handleSubmit, watch } = useForm()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const watchAllFields = watch()

  const onSubmit = async data => {
    setLoading(true)
    if (data.Pass === data.NewPass) {
      const key = searchParams?.get('key')
      if (key) {
        const res = await reset(key, data.Pass)
        if (res.code === 200) {
          router.push('/signin')
        }
        setLoading(false)
      }
    } else {
      toast.error('The two entered passwords do not match')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-md:pb-6 md:max-w-[440px]">
        <input
          type="password"
          className="h-12 w-full rounded-t-xl border-0 bg-[#f1f1f1] pl-3 text-sm placeholder:text-gray-1100"
          placeholder="New Password"
          {...register('Pass', { required: true })}
        />
        <input
          type="password"
          className="mt-[2px] h-12 w-full border-0 bg-[#f1f1f1] pl-3 text-sm placeholder:text-gray-1100"
          placeholder="Confirm New Password"
          {...register('NewPass', { required: true })}
        />
        <button
          type="submit"
          disabled={
            loading ||
            watchAllFields.Pass === '' ||
            watchAllFields.NewPass === '' ||
            watchAllFields.NewPass !== watchAllFields.Pass
          }
          className="mt-[2px] flex h-12 w-full items-center justify-center rounded-xl rounded-t-none bg-gray text-white disabled:opacity-20"
        >
          {loading && <Loader classname="mr-2" />}
          <span>Reset Password</span>
        </button>
        {watchAllFields.NewPass !== watchAllFields.Pass && (
          <p className="mt-4 text-center text-xs text-red">The passwords entered twice are inconsistent</p>
        )}
        <div className="mt-6 text-center">
          Don&lsquo;t have an account?&nbsp;
          <Link href="/signup" className="cursor-pointer text-sm font-bold text-[#01DB83] hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </>
  )
}
