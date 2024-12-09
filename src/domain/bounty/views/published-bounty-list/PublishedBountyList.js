import { useRouter } from 'next/navigation'

import { SvgIcon } from '@/components/Image'
import LoadableList from '@/components/loadable-list'

import { useUser } from '#/state/application/hooks'

import { fetchPublishedBountyList } from '../../repository'
import BountyItem from '../../widgets/bounty-item'

function PublishedBountyList({ list, viewingSelf }) {
  const router = useRouter()
  const handleEditBounty = (bounty, e) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/creator/build/bounty/${bounty.id}`)
  }

  return (
    <div>
      {list.map(item => (
        <BountyItem key={`bounty-${item.id}`} data={item}>
          {viewingSelf && (
            <div className="flex" onClick={handleEditBounty.bind(null, item)}>
              <span style={{ marginRight: 8 }}>Edit</span>
              <SvgIcon name="arrow-right-top" size={20} />
            </div>
          )}
        </BountyItem>
      ))}
    </div>
  )
}

function PublishedBountyListView({ params }) {
  const currentUser = useUser()
  const viewingSelf = params && currentUser ? params.userId === currentUser.base.user_id : false

  return (
    <LoadableList
      params={params}
      fetch={fetchPublishedBountyList}
      resolveResponse={res => ({ list: res.data.list, total: res.data.count })}
      renderList={list => <PublishedBountyList list={list} viewingSelf={viewingSelf} />}
    />
  )
}

export default PublishedBountyListView
