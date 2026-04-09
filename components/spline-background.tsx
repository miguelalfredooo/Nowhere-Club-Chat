"use client"

import Spline from "@splinetool/react-spline"

export function SplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline scene="https://prod.spline.design/zdjV1bjGDQQVgdNl/scene.splinecode" />
    </div>
  )
}
