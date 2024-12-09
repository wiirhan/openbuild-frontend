import { isFunction } from 'lodash'
import React from 'react'
import Select, { components } from 'react-select'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/utils'

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

export function ReactSelect({
  value,
  isMulti,
  name,
  options,
  placeholder,
  styles,
  onChange,
  className,
  classNamePrefix,
  isClearable,
  isSearchable = true
}) {
  return (
    <Select
      value={value}
      isMulti={isMulti}
      name={name}
      options={options}
      placeholder={placeholder}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          height: '40px',
          borderRadius: '8px',
          ...(styles && isFunction(styles.control) && styles.control())
        }),
      }}
      isSearchable={isSearchable}
      components={{ MultiValueRemove, ClearIndicator, DropdownIndicator }}
      onChange={onChange}
      className={classNames('react-select-container', className)}
      classNamePrefix={classNames(classNamePrefix, 'react-select')}
      isClearable={isClearable}
    />
  )
}
