import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        className="mb-8"
      >
        <img
          src="/branding/assets/logo-2.png"
          className="h-20 w-20 mx-auto drop-shadow-lg"
        />
      </motion.div>
      <motion.h1
        className="font-orbitron text-5xl font-bold text-primary mb-4 tracking-tight"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! Looks like you've drifted outside the Tetris playfield.<br />
        Let's get you back to the blocks!
      </motion.p>
      <Button asChild id="notfound-back-home" className="flex items-center gap-2">
        <Link to="/">
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </Button>
    </section>
  )
}
