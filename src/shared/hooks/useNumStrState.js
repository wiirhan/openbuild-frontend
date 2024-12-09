import { useState } from 'react'

export function useNumStrState(defaultVal = '') {
  const removeLeadingZeros = s => {
    const oldLen = s.length
    s = s.replace(/^0+/, '') // 移除前导零
    // 全为 0 的情况，留一个 0
    if (s.length === 0 && oldLen > 0) {
      s = '0'
    }
    return s
  }

  defaultVal = removeLeadingZeros(defaultVal)
  const [numVal, setNumVal] = useState(defaultVal)

  const handleChange = val => {
    val = val.replace(/[^\d]/g, '')
    val = removeLeadingZeros(val)
    setNumVal(val)
  }

  return [numVal, handleChange]
}
