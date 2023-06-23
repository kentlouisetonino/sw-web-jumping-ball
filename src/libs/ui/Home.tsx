'use client'
import { Fragment, useEffect, useState } from 'react'
import DeviceLimit from './DeviceLimit'
import GameBox from './GameBox'

export default function Home() {
  const [browserWidth, setBrowserWidth] = useState(0)

  function handleRezie() {
    setBrowserWidth(window.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleRezie)
      handleRezie()
      return () => window.removeEventListener('resize', handleRezie)
    }
  }, [])

  if (browserWidth < 600) {
    return <DeviceLimit />
  }

  return (
    <Fragment>
      <h1 className="text-4xl font-bold my-10">Jumping Ball</h1>
      <GameBox />
    </Fragment>
  )
}
