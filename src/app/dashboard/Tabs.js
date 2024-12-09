import { Button } from '@/components/Button'

export function Tabs({ options, active, onChange }) {
  return (
    <div className="sticky top-[84px] bg-gray-1000">
      <div className="flex [&>button]:mr-3 [&>button]:px-4">
        {options.map((i, k) => (
          <Button
            key={`dashboard-tab-${i.name}`}
            onClick={() => onChange(i.key)}

            variant={active === i.key ? 'solid' : 'light'}
          >
            {i.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
