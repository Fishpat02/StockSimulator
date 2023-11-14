import React, { useEffect, useRef, createElement } from 'react'
import * as Plot from '@observablehq/plot'

interface PlotProps {
  options: Plot.PlotOptions
}

export const PlotComponent: React.FC<PlotProps> = ({ options }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const plot = Plot.plot({ ...options })

    containerRef.current!.append(plot)

    return () => plot.remove()
  }, [options])

  return <div ref={containerRef} />
}
