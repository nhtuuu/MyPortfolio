import { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`

const MarqueeText = styled.div<{ duration: string }>`
  display: flex;
  width: max-content;
  animation: ${marquee} ${({ duration }) => duration} linear infinite;

  & > span {
    padding-right: 5px;
  }
`

const MarqueeWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    z-index: 1;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(1, 22, 39, 1), rgba(1, 22, 39, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(1, 22, 39, 1), rgba(1, 22, 39, 0));
  }
`

interface Props {
  children?: ReactNode
  duration?: string
}

export default function ScrollingText({ children, duration = '10s' }: Props) {
  return (
    <MarqueeWrapper className='pt-5'>
      <MarqueeText duration={duration}>
        <span>{children}</span>
        <span>
          {' - '}
          {children}
        </span>
      </MarqueeText>
    </MarqueeWrapper>
  )
}
