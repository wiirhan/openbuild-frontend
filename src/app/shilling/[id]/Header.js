import { ArrowLeftIcon, EditIcon } from '@/components/Icons'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { Share } from '@/components/Share'
import Link from 'next/link'
import { useUser } from '#/state/application/hooks'

export function Header({ id, setOpen, data }) {
  const router = useRouter()
  const user = useUser()
  // console.log(data)
  return (
    <div className="mb-8 flex justify-between">
      <div onClick={() => router.push('/shilling')} className="flex cursor-pointer items-center">
        <ArrowLeftIcon />
        <span className="ml-4 text-sm">Back to SkillHub</span>
      </div>
      <div className="flex items-center">
        {user?.base.user_id === Number(id) && (
          <Link
            href="/shilling-myself"
            className="mr-2 flex h-8  cursor-pointer items-center justify-center rounded-md bg-gray-900 px-2 py-1 text-sm"
          >
            <EditIcon className="mr-2" /> Shilling Myself
          </Link>
        )}

        {setOpen && (
          <Button variant="contained" className="mr-2 h-8 lg:hidden" onClick={() => setOpen(true)}>
            Apply
          </Button>
        )}
        <Share img={null} title={data.title} />
      </div>
    </div>
  )
}
