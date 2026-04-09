"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { playCardEnter, playCardFlip, playCardExit } from "@/lib/sound-manager"

interface ThumbnailGalleryProps {
  isFocused: boolean
}

export function ThumbnailGallery({ isFocused }: ThumbnailGalleryProps) {
  const [flipped, setFlipped] = useState<number | null>(null)
  const thumbnails = Array.from({ length: 5 }, (_, i) => i)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
        delayChildren: 0,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 12,
      scale: 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 12,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  }

  const handleCardHover = async (index: number) => {
    setFlipped(index)
    await playCardFlip()
  }

  const handleCardEnter = async (index: number) => {
    if (isFocused) {
      await playCardEnter(index)
    }
  }

  return (
    <motion.div
      className="flex justify-center mb-6 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={isFocused ? "visible" : "exit"}
    >
      {thumbnails.map((i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          onAnimationComplete={() => handleCardEnter(i)}
          onHoverStart={() => handleCardHover(i)}
          onHoverEnd={() => setFlipped(null)}
          className="relative"
        >
          <motion.div
            className="h-14 aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
            style={{
              perspective: 1000,
            }}
            animate={
              flipped === i
                ? { scale: [1, 1.08, 1] }
                : { scale: 1 }
            }
            transition={
              flipped === i
                ? {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : { type: "spring", stiffness: 300, damping: 20 }
            }
          >
            <motion.div
              className="w-full h-full relative"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                src={`https://picsum.photos/96/120?random=${i}`}
                alt={`Thumbnail ${i + 1}`}
                width={96}
                height={120}
                className="w-full h-full object-cover"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Backdrop blur glow behind card */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-secondary to-primary"
            animate={{
              opacity: flipped === i ? 1 : 0.8,
              scale: flipped === i ? 1.3 : 1,
            }}
            transition={{
              duration: 0.3,
            }}
            style={{
              zIndex: -1,
              filter: "blur(32px)",
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
