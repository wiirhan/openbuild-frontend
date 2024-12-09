import React, { useEffect, useMemo, useState } from 'react'
import { Modal } from '@/components/Modal'

import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import { joinChallengesEnrool } from '#/services/learn/'
import { useSession } from 'next-auth/react'

export default function EnrollModal({ open, closeModal, json, id, successCallback }) {
  const { status } = useSession()
  const [requested, setRequested] = useState(false)
  const survey = useMemo(() => {
    return new Model(JSON.parse(json))
  }, [json])

  useEffect(() => {
    setTimeout(() => {
      const btn = document.querySelector('.sd-navigation__complete-btn')
      if (btn !== null) {
        btn.innerHTML = 'Submit'
        btn.setAttribute('value', 'Submit')
      }
    }, 100)
  }, [open])
  useMemo(() => {
    survey.onComplete.add(async sender => {
      if (requested) return
      setRequested(true)
      const results = JSON.stringify(sender.data)
      const res = await joinChallengesEnrool(id, results, {code: window.localStorage.getItem('shareCode') || '' })
      closeModal()
      setRequested(true)
      if (res.code === 200) {
        successCallback()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <Modal isOpen={open} closeModal={closeModal}>
      <div className="survey-container max-h-[500px] overflow-y-auto overflow-x-hidden">
        {status === 'authenticated' && <Survey model={survey} />}
      </div>
    </Modal>
  )
}
