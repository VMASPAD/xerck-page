"use client"

import React from "react"
import { motion } from "motion/react"

import AnimatedGradient from "@/fancy/components/background/animated-gradient-with-svg"
import { Hero } from "./Hero"

interface BentoCardProps { 
  colors: string[]
  delay: number
  children?: React.ReactNode
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  colors,
  delay,
  children
}) => { 

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-white flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
      <AnimatedGradient colors={colors} speed={15} blur="heavy" />
 
    </motion.div>
  )
}
 
export default function Home() {
  return (
    <main className="w-screen bg-background h-screen" style={
      { 
        "--tx-1": (Math.random() - 0.5),
        "--ty-1": (Math.random() - 0.5),
        "--tx-2": (Math.random() - 0.5),
        "--ty-2": (Math.random() - 0.5),
        "--tx-3": (Math.random() - 0.5),
        "--ty-3": (Math.random() - 0.5),
        "--tx-4": (Math.random() - 0.5),
        "--ty-4": (Math.random() - 0.5),
      } as React.CSSProperties
    } > 
        <BentoCard 
          colors={["#DBDBDB", "#DBDBDB", "#DBDBDB"]}
          delay={0.4}
        >
          <Hero />
        </BentoCard>
    </main>
  );
}