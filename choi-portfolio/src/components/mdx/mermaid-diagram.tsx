"use client"

import React, { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { useTheme } from 'next-themes'

interface MermaidDiagramProps {
  chart: string
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme, systemTheme } = useTheme()
  const [svg, setSvg] = useState<string>('')

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    mermaid.initialize({
      startOnLoad: false,
      theme: currentTheme === 'dark' ? 'dark' : 'default',
      securityLevel: 'loose',
    })

    const renderDiagram = async () => {
      if (containerRef.current) {
        try {
          const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
          const { svg: svgResult } = await mermaid.render(id, chart);
          setSvg(svgResult);
        } catch (error) {
          console.error("Failed to render Mermaid diagram", error);
        }
      }
    }

    renderDiagram()
  }, [chart, theme, systemTheme])

  return (
    <div
      className="w-full overflow-x-auto mt-8 mb-8 p-6 border rounded-xl bg-card flex justify-center items-center mermaid-container"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
