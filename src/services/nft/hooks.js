import { useState, useCallback, useEffect } from 'react'
import { get } from '@/utils/request'

export function useNftInfo(ticket) {
  const [info, setInfo] = useState()
  const [loading, setLoading] = useState(true)
  const fetch = useCallback(async () => {
    if (ticket) {
      const res = await get(`ts/v1/nft/general/magiclink/verify?ticket=${ticket}`)
      if (res.code === 200) {
        setInfo(res.data)
      }
    }
    setLoading(false)
  }, [ticket])

  useEffect(() => {
    fetch()
  }, [fetch])
  return { info, loading }
}
