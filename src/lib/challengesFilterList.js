import freeIcon from 'public/images/svg/free.svg'
import depositIcon from 'public/images/svg/deposit.svg'
import paidIcon from 'public/images/svg/paid.svg'
import soonIcon from 'public/images/svg/soon.svg'
import closedIcon from 'public/images/svg/closed.svg'
import ongoingIcon from 'public/images/svg/ongoing.svg'

export const challengesFilterList = [
  {
    name: 'Fees',
    open: true,
    labels: [
      {
        img: freeIcon,
        name: 'Free',
        key: 'free',
      },
      {
        img: paidIcon,
        name: 'Paid',
        key: 'paid',
      },
      {
        img: depositIcon,
        name: 'Deposit',
        key: 'deposit',
      },
    ],
  },
  {
    name: 'Status',
    open: true,
    labels: [
      {
        img: soonIcon,
        name: 'Soon',
        key: 'soon',
      },
      {
        img: ongoingIcon,
        name: 'Ongoing',
        key: 'ongoing',
      },
      {
        img: closedIcon,
        name: 'Closed',
        key: 'closed',
      },
    ],
  },
]
