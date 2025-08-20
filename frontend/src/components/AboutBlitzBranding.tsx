import { motion } from 'framer-motion'

export function AboutBlitzBranding() {
  return (
    <div className="flex flex-col items-center mt-6">
      <motion.img
        src="/branding/assets/logo-0.png"
        className="w-16 h-16 mb-2"
        initial={{ rotate: -10, opacity: 0.7 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
      />
      <span className="font-orbitron text-primary font-semibold text-lg tracking-wide">BlockBlitz</span>
    </div>
  )
}
