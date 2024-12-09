import { useEffect, useRef, useState } from 'react'

export const useCountDown = props => {
  const { mss } = props
  const [time, setTime] = useState(mss || 0)
  const tickRef = useRef(() => {})

  const tick = () => {
    if (time > 0) {
      setTime(time - 1)
    }
  }

  useEffect(() => {
    tickRef.current = tick
  })

  useEffect(() => {
    const timerId = setInterval(() => tickRef.current(), 1000)
    return () => clearInterval(timerId)
  }, [])

  return [time]
}
