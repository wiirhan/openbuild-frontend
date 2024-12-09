import { currentTime } from '@/utils/date'

export const InitForms = {
  course_series_title: '',
  course_series_img: '',
  course_series_label_ids: [],
  course_series_summary: '',
  course_series_requirement: [''],
  course_series_what_content: [''],
  course_series_introduction: '',
  course_series_id: null,
  course_series_discussion: [],
  course_series_type: ''
}

export const InitChallengesForms = {
  course_challenges_extra_online: true,
  course_challenges_extra_builders_check: true,
  course_challenges_extra_course_check: false,
  course_challenges_extra_end_date: currentTime(),
  course_challenges_extra_feeds_amount: 0,
  course_challenges_extra_feeds_receive: '',
  course_challenges_extra_feeds_type: 'free',
  course_challenges_extra_id: 0,
  course_challenges_extra_offline_address: '',
  course_challenges_extra_start_date: currentTime(),
  course_challenges_extra_time_zone: {
    'utc': [
        'Asia/Hong_Kong',
        'Asia/Macau',
        'Asia/Shanghai'
    ],
    'abbr': 'CST',
    'isdst': false,
    'label': '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    'value': 'China Standard Time',
    'offset': 8
  }
}
