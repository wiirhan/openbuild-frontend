const statusMap = {
  '-2': 'Declined',
  '-1': 'Waiting',
  0: 'Not joined',
  1: 'Joined',
  2: 'Done',
  3: 'Unpaid',
  4: 'Paid',
}

function isAgreeable(status) {
  return [-2, -1].includes(status)
}

function isDeclinable(status) {
  return status === -1
}

function isBeAgreed(status) {
  return status === 1
}

function isBeDeclined(status) {
  return status === -2
}

function getStatusLabel(status) {
  return statusMap[status] || ''
}

export { isAgreeable, isDeclinable, isBeAgreed, isBeDeclined, getStatusLabel }
