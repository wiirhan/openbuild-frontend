import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from '#/state/hooks'
import { setRequiredSkills } from './reducer'

export function useSetRequiredSkills(skills) {
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(setRequiredSkills(skills)), [dispatch, skills])
}

export function useRequiredSkills() {
  return useSelector(state => state.shilling.requiredSkills)
}
export function useExperience() {
  return useSelector(state => state.shilling.experience)
}
export function useSortBy() {
  return useSelector(state => state.shilling.sortBy)
}
