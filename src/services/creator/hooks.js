import { useCallback, useState, useEffect } from 'react'
import { get } from '@/utils/request'

export function useBountyList({ skip, take, title, status, order }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasNextPage, setHasNextPage] = useState(false)

  const fetchList = useCallback(async () => {
    const url = `ts/v1/build/creator/bounties?skip=${skip}&take=${take}&title=${title}&status=${status}&sort_by=${order}`
    if (url) {
      get(url)
        .then(result => {
          if (result.code === 200) {
            setHasNextPage(result.data.list.length > 0 && result.data.list.length >= take)
            const _data = result.data.list
            if (skip === 0) {
              setList(_data)
            } else {
              setList(list => list.concat(_data))
            }
          }
          setLoading(false)
        })
        .catch(() => {
          setHasNextPage(false)
          setLoading(false)
        })
    }
  }, [skip, take, status, title, order])

  useEffect(() => {
    setLoading(true)
    setHasNextPage(false)
    fetchList()
    if (skip === 0) setList([])
  }, [skip, fetchList])

  const doSetList = list => {
    setList(list)
  }
  return { loading, list, hasNextPage, doSetList }
}

export function useCreatorBountyBuilders({ skip, take, id }, open) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasNextPage, setHasNextPage] = useState(false)
  // console.log(id)
  const fetchList = useCallback(async () => {
    if (!id || !open) return
    get(`ts/v1/build/creator/bounties/${id}/builders?skip=${skip}&take=${take}`)
      .then(result => {
        if (result.code === 200) {
          setHasNextPage(result.data.list.length > 0 && result.data.list.length >= take)
          const _data = result.data.list
          if (skip === 0) {
            setList(_data)
          } else {
            setList(list => list.concat(_data))
          }
        }
        setLoading(false)
      })
      .catch(() => {
        setHasNextPage(false)
        setLoading(false)
      })
  }, [skip, take, id, open])

  useEffect(() => {
    setLoading(true)
    setHasNextPage(false)
    fetchList()
    if (skip === 0) setList([])
  }, [skip, fetchList])

  const doSetList = list => {
    setList(list)
  }
  return { loading, list, hasNextPage, doSetList }
}
