import LoadableList from '@/components/loadable-list'

import { useUser } from '#/state/application/hooks'

import { fetchAppliedBountyList } from '../../repository'
import BountyItem from '../../widgets/bounty-item'
import AppliedBountyAction from '../../widgets/applied-bounty-action'

function AppliedBountyList({ list, viewingSelf }) {
  return (
    <div>
      {list.map(item => (
        <BountyItem key={`bounty-${item.bounty_id}`} data={item.bounty_info}>
          {viewingSelf && <AppliedBountyAction status={item.status} />}
        </BountyItem>
      ))}
    </div>
  )
}

function AppliedBountyListView({ params }) {
  const currentUser = useUser()
  const viewingSelf = params && currentUser ? params.userId === currentUser.base.user_id : false

  return (
    <LoadableList
      params={params}
      fetch={fetchAppliedBountyList}
      resolveResponse={res => ({ list: res.data.list, total: res.data.count })}
      renderList={list => <AppliedBountyList list={list} viewingSelf={viewingSelf} />}
    />
  )
}

export default AppliedBountyListView
