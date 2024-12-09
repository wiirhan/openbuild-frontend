import { Modal } from '@/components/Modal'
import React, { useEffect } from 'react'
import { Tabulator } from 'survey-analytics/survey.analytics.tabulator'
import { Model } from 'survey-core'
import 'tabulator-tables/dist/css/tabulator.min.css'
import 'survey-analytics/survey.analytics.tabulator.css'
import { get } from '@/utils/request'

export function ChallengesExportModal({ challenges, open, closeModal, json, result }) {
  useEffect(() => {
    const fetch = async () => {
      const res = await get(`ts/v1/learn/creator/series/${challenges.base.course_series_id}/enrool/export`)
      if (res.code === 200) {
        const data = res.data.data
        const schema = res.data.schema
        const survey = new Model(JSON.parse(schema))
        const visPanel = new Tabulator(survey, data)
        visPanel.render('surveyDashboardContainer')
      }
    }
    fetch()
  }, [json, result, challenges])

  return (
    <Modal big isOpen={open} closeModal={closeModal}>
      <div id="surveyDashboardContainer"></div>
    </Modal>
  )
}
