"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ConstellationNode {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function ImageConstellation() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 300 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    }

    updateDimensions()
    const resizeObserver = new ResizeObserver(updateDimensions)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  const nodes = useMemo(() => {
    const generated: ConstellationNode[] = []
    const nodeCount = 12
    const width = dimensions.width
    const height = dimensions.height

    for (let i = 0; i < nodeCount; i++) {
      generated.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 20 + 32,
        delay: i * 0.05,
      })
    }

    return generated
  }, [dimensions.width, dimensions.height])

  const getConnections = (nodeId: number) => {
    const currentNode = nodes[nodeId]
    const distances = nodes
      .filter((_, i) => i !== nodeId)
      .map((node, i) => ({
        nodeIndex: nodes.findIndex((n) => n.id === node.id),
        distance: Math.hypot(node.x - currentNode.x, node.y - currentNode.y),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3)

    return distances.map((d) => nodes[d.nodeIndex])
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto mb-12 h-[300px]">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {nodes.map((node) =>
          getConnections(node.id).map((targetNode) => (
            <motion.line
              key={`${node.id}-${targetNode.id}`}
              x1={node.x}
              y1={node.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              opacity={hoveredId === null || hoveredId === node.id || hoveredId === targetNode.id ? 1 : 0.2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { delay: node.delay, duration: 0.8 },
                opacity: { delay: node.delay, duration: 0.4 },
              }}
              style={{ transition: "opacity 0.3s ease" }}
            />
          ))
        )}
      </svg>

      <motion.div
        className="relative w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: `${(node.x / dimensions.width) * 100}%`,
              top: `${(node.y / dimensions.height) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: node.delay,
            }}
            onHoverStart={() => setHoveredId(node.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <motion.div
              className="relative group cursor-pointer"
              animate={{
                scale: hoveredId === node.id ? 1.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary blur-xl"
                animate={{
                  opacity: hoveredId === node.id ? 1 : 0.4,
                  scale: hoveredId === node.id ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: node.size,
                  height: node.size,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                }}
              />

              {/* Image */}
              <div
                className="relative rounded-lg overflow-hidden border border-primary/30 bg-card backdrop-blur-sm"
                style={{
                  width: node.size,
                  height: node.size,
                  aspectRatio: "1",
                }}
              >
                <Image
                  src={`https://picsum.photos/${Math.round(node.size)}/${Math.round(node.size)}?random=${node.id}`}
                  alt={`Node ${node.id}`}
                  fill
                  className="object-cover"
                  sizes={`${Math.round(node.size)}px`}
                />

                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  style={{ opacity: 0.2 }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
