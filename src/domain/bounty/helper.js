const BOUNTY_STATUS_APPLIED = 101
const BOUNTY_STATUS_TERMINATION = 120
const BOUNTY_STATUS_FINISHED = 130

function isBountyApplied(status) {
  return status === BOUNTY_STATUS_APPLIED
}

function isBountyFinished(status) {
  return [BOUNTY_STATUS_TERMINATION, BOUNTY_STATUS_FINISHED].includes(status)
}

export { isBountyApplied, isBountyFinished }
