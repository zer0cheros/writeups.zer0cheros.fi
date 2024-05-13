'use client'

import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const viewport = { once: true, margin: '0px 0px -200px' }

const FadeInStaggerContext = createContext(false)

export default function Fade(props: React.ComponentPropsWithoutRef<typeof motion.div>) {
    let reduceMotion = useReducedMotion()
    let isInStaggerGroup = useContext(FadeInStaggerContext)
    return (
    <motion.div  variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}>

    </motion.div>
  )
}

export function FadeInStagger({
    ...props
  }: React.ComponentPropsWithoutRef<typeof motion.div>) {
    return (
      <FadeInStaggerContext.Provider value={true}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ staggerChildren: 0.12 }}
          {...props}
        />
      </FadeInStaggerContext.Provider>
    )
  }