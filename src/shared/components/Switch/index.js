import { Switch as HeadlessuiSwitch } from '@headlessui/react'

const Switch = ({ checked, onChange }) => {
  return (
    <HeadlessuiSwitch
      checked={checked}
      onChange={onChange}
      className={`${checked ? 'bg-gray' : 'bg-white'}
      relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border border-gray transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${checked ? 'translate-x-[17px]' : 'translate-x-[-1px]'}
        pointer-events-none inline-block h-[22px] w-[22px] translate-y-[-0px]  transform rounded-full border border-gray bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </HeadlessuiSwitch>
  )
}

export default Switch
