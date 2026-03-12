"use client"

import { Button } from './ui/button'
import { Container } from './ui/container'
import { motion } from 'motion/react'

export const HeroSection = () => {

  const scrollToAiWidget = () => {

    const aiWidget = document.getElementById('ai-widget');

    aiWidget?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative md:mb-15">
      <div className="absolute inset-0 -top-100 -z-10 
        bg-radial-[circle_at_100%_50%] 
            from-[#00E3FB]/15 via-transparent via-30% to-transparent to-100%">
      </div>
      <div className="absolute inset-0 -z-10
bg-linear-to-b from-transparent from-40% via-primary/15 via-80% to-transparent">
      </div>
      <Container className='py-60 px-5 flex flex-col justify-center items-center gap-6 text-center'>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          transition={{ type: "spring" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:text-8xl text-5xl font-bold">
          Inno<span className="text-[#02D4ED]">Hour</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:text-5xl text-3xl font-bold">
          <span className="text-[#02D4ED]">One Hour.</span> Fresh Ideas. Real Impact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}

          className="text-xl font-bold">
          Not sure how AI fits into your business? We understand.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base text-center md:w-1/2 w-full">
          In just 60 minutes, we’ll help you uncover simple, practical ways to innovate your business without the complexity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-6 mt-10">
          <Button size="lg" className="md:w-60 w-fit">Learn More</Button>
          <Button size="lg" variant="secondary" className="md:w-60 w-fit" onClick={scrollToAiWidget}>Chat Now</Button>
        </motion.div>

      </Container>

    </div>
  )
}
