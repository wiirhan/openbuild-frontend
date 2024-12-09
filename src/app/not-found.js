'use client'

import Image from 'next/image'
import BotFoundPic from 'public/images/svg/404.svg'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 24px;
    opacity: 0.6;
  }
`

export default function NotFound() {
  return (
    <Wrapper>
      <Image src={BotFoundPic} alt="" />
      <p>404</p>
    </Wrapper>
  )
}
