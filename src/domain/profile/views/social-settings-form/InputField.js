import clsx from 'clsx'
import Image from 'next/image'

import { BASE_INPUT_STYLE } from '@/constants/config'

function InputField({ data, onChange }) {
  return (
    <div className="relative mb-9 rounded-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Image width={24} height={24} src={data.icon} alt={data.name} />
      </div>
      <input
        className={clsx(BASE_INPUT_STYLE, 'h-12 pr-[210px] pl-12 !text-gray')}
        type="text"
        value={data.value}
        onChange={e => onChange(e.target.value)}
        placeholder={data.placeholder || 'Please enter'}
      />
    </div>
  )
}

export default InputField
