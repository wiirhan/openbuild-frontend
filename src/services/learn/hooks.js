import { useCallback, useState, useEffect } from 'react'
import { get } from '@/utils/request'
import { courseDetails } from './'
import { useSession } from 'next-auth/react'

export function useSeriesPermission(id) {
  const [loading, setLoading] = useState(true)
  const [permission, setPermission] = useState()
  const { status } = useSession()
  const fetch = useCallback(() => {
    if (status !== 'authenticated') return
    get(`ts/v1/learn/general/course/series/${id}/permission`).then(result => {
      setLoading(false)
      setPermission(result.data)
    })
  }, [id, status])
  const doFetch = useCallback(fetch, [fetch])
  useEffect(fetch, [fetch])
  return { loading, permission, doFetch }
}

export function useCourseDetails(id, type) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const fetch = useCallback(async () => {
    if (id) {
      setLoading(true)
      courseDetails(id, type).then(result => {
        setData(result)
        setLoading(false)
      })
    }
  }, [id])

  useEffect(() => {
    fetch()
  }, [fetch])
  return { data, loading }
}
