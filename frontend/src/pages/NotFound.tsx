import { Button } from '@/components/ui/button'
import { LucideAlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-10">
      <motion.div
        initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
        className="mb-6"
      >
        <LucideAlertTriangle className="w-16 h-16 text-yellow-400 drop-shadow-lg mb-3" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-orbitron font-bold text-4xl mb-2 text-primary"
      >
        Oops! Page Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground mb-6 max-w-lg"
      >
        Uh-oh, you’ve hit a block that doesn’t fit! The page you’re looking for just went <span className="font-bold text-secondary">Tetris</span> and disappeared. Let’s stack you back where the action is!
      </motion.p>
      <Link to="/">
        <Button id="notfound-back-home" size="lg" variant="default" className="font-bold text-lg px-8 py-5 rounded-xl shadow-xl bg-primary">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
