import { Modal } from '@/components/Modal'
const buttonStyle = 'px-[28px] py-[11px] rounded-full text-sm font-medium hover:opacity-80 leading-[16px]'

export function DeleteModal({ title, info, open, closeModal }) {
  return (
    <Modal isOpen={open} title={title} closeModal={closeModal}>
      <div className="flex h-[112px] flex-col justify-between">
        <p className="text-sm opacity-50">{info}</p>
        <div className="flex justify-end">
          <button className={`${buttonStyle} border border-gray-300`} onClick={() => closeModal('Cancel')}>
            Cancel
          </button>
          <button className={`${buttonStyle} ml-[10px] bg-[#EC4A2F]`} onClick={() => closeModal('Delete')}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  )
}
