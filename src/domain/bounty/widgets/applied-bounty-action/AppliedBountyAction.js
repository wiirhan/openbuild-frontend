import { SvgIcon } from '@/components/Image'

import { isBountyFinished } from '../../helper'

function AppliedBountyAction({ status }) {
  return isBountyFinished(status) ? (
    <div style={{ padding: '0 8px', fontWeight: 'bolder', lineHeight: '34px', color: '#3aab76', backgroundColor: 'rgba(58, 171, 118, 0.1)', borderRadius: '6px', textTransform: 'uppercase' }}>You make it !</div>
  ) : (
    <>
      <span style={{ marginRight: 8, textTransform: 'uppercase' }}>Continue</span>
      <SvgIcon name="arrow-right-top" size={20} />
    </>
  )
}

export default AppliedBountyAction
