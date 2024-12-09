'use client'

import { ReactSelect } from '@/components/Select/ReactSelect'
import { useMemo } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const options = [
  {
    label: 'Latest',
    value: 'latest',
  },
  {
    label: 'Most learned',
    value: 'most_learned',
  },
]

export function Sort() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const value = useMemo(() => {
    return searchParams?.get('order') || null
  }, [searchParams])
  return (
    <div className="w-[180px] ml-2">
      <ReactSelect
        id="learn-order-select"
        isClearable
        value={options.find(f => f.value === value)}
        className="no-bg showDropdownIndicator w-full bg-transparent height-sm"
        onChange={e => {
          const params = new URLSearchParams(searchParams);
          params.set('page', '1');
          if (e === null) {
            params.delete('order')
          } else {
            params.set('order', e.value)
          }

          replace(`${pathname}?${params.toString()}`);
        }}
        options={options}
        placeholder={'Sorts'}
      />
    </div>
  )
}
