'use client'

import Link from 'next/link'
import { ArrowLeftIcon } from '@/components/Icons'
import EmailTemplateFormView from '#/domain/challenge/views/email-template-form'

function ChallengeEmailTemplatePage({ data }) {
  const { base } = data || {}

  return base ? (
    <div className="flex-grow flex justify-center pt-10">
      <div className="flex-grow max-w-screen-xl">
        <div className="mb-5">
          <Link className="flex items-center" href="/creator/learn/challenges" replace>
            <ArrowLeftIcon className="mr-2" />Back
          </Link>
        </div>
        <h2 className="text-2xl">Edit E-mail template for {base.course_series_title}</h2>
        <EmailTemplateFormView className="mt-10" id={base.course_series_body_id} />
      </div>
    </div>
  ) : null
}

export default ChallengeEmailTemplatePage
