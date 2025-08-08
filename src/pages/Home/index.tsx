import { useEffect, useState } from 'react'

import MainContent from '../../components/MainContent'

import { getBreakpoint } from '../../utils'

const Home = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth)
  )
  const [mainKey, setMainKey] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = getBreakpoint(window.innerWidth)

      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint)
        setMainKey(mainKey + 1)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint, mainKey])

  return (
    <>
      <MainContent key={mainKey} />
    </>
  )
}

export default Home
