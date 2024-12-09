function resolveChapter(chapter, course) {
  if (!chapter || !course) {
    return { isLock: true }
  }

  if ((chapter.base.course_single_content || '').trim() === '') {
    return { ...chapter, isLock: true }
  }

  if (course?.challenges_extra?.course_challenges_extra_course_check && [1, 4].includes(course?.base?.course_series_status)) {
    return { ...chapter, isLock: true, isCheck: true }
  }

  return { ...chapter, isLock: false }
}

export { resolveChapter }
