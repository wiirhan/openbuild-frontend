import { fetchOne } from '#/domain/challenge/repository'
import ChallengeEmailTemplatePage from './ChallengeEmailTemplatePage'

async function EmailTemplatePage({ params: { type, id } }) {
  if (type !== 'challenges') {
    return <div className="flex-grow pt-10 text-center">Hey, dude.</div>
  }

  const { data } = await fetchOne(id)

  return <ChallengeEmailTemplatePage data={data} />
}

export default EmailTemplatePage
