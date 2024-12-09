const publishedTypes = [
  { key: 'open_course_num', text: 'Opencourse' },
  { key: 'bounty_num', text: 'Bounty' },
  { key: 'challenge_num', text: 'Challange' },
  { key: 'quiz_num', text: 'Quiz' },
]

function PublishedCountList({ published }) {
  return published ? (
    <div>
      {publishedTypes.map((t, i) => (
        <p key={t.key} className={`${i === 0 ? 'mt-6' : 'mt-3'} flex justify-between text-sm`}>
          <span>{t.text}</span>
          <strong>{published[t.key]}</strong>
        </p>
      ))}
    </div>
  ) : null
}

export default PublishedCountList
