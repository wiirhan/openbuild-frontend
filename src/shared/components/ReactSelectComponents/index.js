import React from 'react'
import { components } from 'react-select'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

export const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon className="h-5 w-5" />
    </components.DropdownIndicator>
  )
}

export const ClearIndicator = props => {
  return (
    <components.ClearIndicator {...props}>
      <XMarkIcon className="h-4 w-4" />
    </components.ClearIndicator>
  )
}

export const MultiValueRemove = props => {
  return (
    <components.MultiValueRemove {...props}>
      <XMarkIcon className="h-3 w-3" />
    </components.MultiValueRemove>
  )
}
