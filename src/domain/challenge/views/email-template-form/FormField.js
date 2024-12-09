import clsx from 'clsx'

function FormField({ className, children, label = '', labelClassName }) {
  return (
    <div className={className}>
      <span className={clsx('text-sm opacity-80 block mb-2', labelClassName)}>{label}</span>
      {children}
    </div>
  )
}

export default FormField
