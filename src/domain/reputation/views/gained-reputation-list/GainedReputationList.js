import { useState, useEffect } from 'react'

import { NoData } from '@/components/NoData'

import { fetchGainedReputationList } from '../../repository'
import GainedReputationItem from './GainedReputationItem'

function ControlledGainedReputationList({ list }) {
  return list && list.length > 0 ? (
    <div className="grid grid-cols-2 gap-5 md:flex md:gap-6 mt-6">
      {list.map(item => (
        <GainedReputationItem key={`reputation-${item.id}`} data={item} />
      ))}
    </div>
  ) : <NoData className="mt-6" />
}

function GainedReputationList({ userId }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!userId || loading) {
      return
    }

    setLoading(true)
    fetchGainedReputationList(userId)
      .then(res => setList(res.data.list || []))
      .finally(() => setLoading(false))
  }, [userId])

  return <ControlledGainedReputationList list={list} />
}

function GainedReputationListView({ userId, data }) {
  return Array.isArray(data) ? (
    <ControlledGainedReputationList list={data} />
  ) : (
    <GainedReputationList userId={userId} />
  )
}

export default GainedReputationListView
