import soonIcon from 'public/images/svg/soon.svg'
import closedIcon from 'public/images/svg/closed.svg'
import ongoingIcon from 'public/images/svg/ongoing.svg'

export const bountyFilterList = [
  {
    name: 'Status',
    open: true,
    labels: [
      {
        img: soonIcon,
        name: 'Recruiting',
        key: '3',
      },
      {
        img: ongoingIcon,
        name: 'Building',
        key: '7',
      },
      {
        img: closedIcon,
        name: 'Completed',
        key: '30',
      },
    ],
  },
]
