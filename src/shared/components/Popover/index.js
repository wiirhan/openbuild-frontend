import { Popover as HeadlessuiPopover } from '@headlessui/react'
import { classNames } from '@/utils'
import useInterval from '@/hooks/useInterval'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { usePopper } from 'react-popper'

export default function Popover({ content, children, placement = 'auto', show, modifiers }) {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const { styles, update, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    strategy: 'fixed',
    modifiers: modifiers || [
      { name: 'offset', options: { offset: [0, 8] } },
      { name: 'arrow', options: { element: arrowElement } },
    ],
  })

  const updateCallback = useCallback(() => {
    update && update()
  }, [update])

  useInterval(updateCallback, show ? 100 : null)

  // Add portal to end of page for popover
  useEffect(() => {
    if (!document.getElementById('popover-portal')) {
      const node = document.body.appendChild(document.createElement('div'))
      node.setAttribute('id', 'popover-portal')
    }
  }, [])

  return (
    <HeadlessuiPopover as={Fragment}>
      {({ open }) => (
        <>
          {React.Children.map(children, child => {
            return (
              <HeadlessuiPopover.Button className={'Popover-button'} {...{ ref: setReferenceElement }}>
                {child}
              </HeadlessuiPopover.Button>
            )
          })}
          {(show ?? open) &&
            ReactDOM.createPortal(
              <HeadlessuiPopover.Panel
                static
                className="shadow-dark-1000/80 z-[1000000000000000] rounded shadow-xl"
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                {content}
                <div
                  className={classNames('z-50 h-2 w-2 text-gray')}
                  ref={setArrowElement}
                  style={styles.arrow}
                  {...attributes.arrow}
                />
              </HeadlessuiPopover.Panel>,
              document.querySelector('#popover-portal')
            )}
        </>
      )}
    </HeadlessuiPopover>
  )
}
