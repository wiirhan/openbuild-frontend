'use client'

import { useCallback, useEffect } from 'react'
// import { getConfig } from '#/services/common'
import { updateConfig, updateOpenFilter, updateLessonMenu } from './reducer'
import { useAppDispatch } from '#/state/hooks'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Updater({ datas }) {
  const dispatch = useAppDispatch()
  const isMobile = !useMediaQuery('(min-width: 768px)')
  const isNotLg = useMediaQuery('(min-width: 1024px)')
  const gc = useCallback(async () => {
    if (datas?.configs?.code === 200) {
      dispatch(updateConfig(datas.configs.data.list))
    }
  }, [dispatch, datas])
  useEffect(() => {
    gc()
  }, [gc])
  useEffect(() => {
    isMobile && dispatch(updateOpenFilter(false))
  }, [isMobile, dispatch])
  useEffect(() => {
    isNotLg && dispatch(updateLessonMenu(true))
  }, [isNotLg, dispatch])
  return null
}
