
'use client'

import { SearchIcon } from '@/components/Icons'
import Input from '@/components/Input'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'

export function QuizSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300)

  return (
    <div className="max-w-[200px]">
      <Input
        defaultValue={searchParams.get('query')?.toString()}
        type="search"
        placeholder="Search"
        startContent={<SearchIcon />}
        onChange={(e) => handleSearch(e.target.value)}
        className="h-10 [&>div]:pb-0"
      />
    </div>

  )
}
