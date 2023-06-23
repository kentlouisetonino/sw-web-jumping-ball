'use client'
import { Fragment, useEffect, useRef } from 'react'
import Canvas from './Canvas'
import Control from './Control'

export default function GameBox() {
  let score = 0
  let y = 350
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controlRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    let t = Date.now()
    let speed = 25

    function draw() {
      const timePassed = (Date.now() - t) / 1000
      t = Date.now()

      // clear the entire canvas
      context?.clearRect(0, 0, 600, 400)

      // ball
      context?.beginPath()
      context?.arc(300, y, 50, 0, 2 * Math.PI, false)
      context!.fillStyle = 'green'
      context?.fill()
      context?.stroke()

      // drawing the count value
      context!.font = '20px Titillium Web, sans-serif'
      context!.fillStyle = 'white'
      context?.fillText('Score: ' + score, 20, 30)

      if (y <= 350) {
        speed += 20 * timePassed
        y += speed * timePassed
      }

      if (y > 350) {
        score = 0
        speed = 0
      }

      window.requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <Fragment>
      <Canvas ref={canvasRef}>
        Your browser does not support HTML5 canvas tag.
      </Canvas>
      <div className="my-5">
        <Control
          ref={controlRef}
          onClick={() => {
            score += 1
            y -= 25
          }}
          onKeyDown={() => {
            score += 1
            y -= 25
          }}
          onTouchStart={() => {
            score += 1
            y -= 25
          }}
        >
          Jump
        </Control>
      </div>
    </Fragment>
  )
}
