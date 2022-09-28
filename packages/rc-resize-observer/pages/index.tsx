import ResizeObserver from 'rc-resize-observer'
import { useState } from 'react'

export default function Index() {
  const [d, isD] = useState(false)
  const [c, setC] = useState(0)
  const [wh, setWh] = useState([0, 0])
  const [offWH, setOffWH] = useState([0, 0])
  return <><input type="checkbox" checked={d} onChange={() => isD(prev => !prev)} /><div>{c}</div><div>w: {wh[0]}, h: {wh[1]}</div><div>off w: {offWH[0]}, off h: {offWH[1]}</div><ResizeObserver disabled={d} onResize={({ width, height, offsetWidth, offsetHeight }) => { console.log(`w: ${width}, h: ${height}`); setC(prev => prev + 1); setWh([width, height]); setOffWH([offsetWidth, offsetHeight]) }}>
    <textarea />
  </ResizeObserver>
  </>
}