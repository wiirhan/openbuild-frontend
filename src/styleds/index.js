'use client'

import styled from 'styled-components'

export const ProfileTitle = styled.h2`
  font-size: 44px;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const ProfileLable = styled.p`
  font-size: 14px;
  line-height: 1;
  margin-bottom: 8px;
`

export const baseInputStyles =
  'block w-full rounded border border-gray-600 bg-transparent px-3 py-3 text-sm text-gray placeholder:text-gray-500'
