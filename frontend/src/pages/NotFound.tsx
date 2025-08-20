import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Ghost } from 'lucide-react'

export function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="rounded-full bg-indigo-100 p-6 mb-4 inline-block">
          <Ghost size={48} className="text-indigo-600 animate-bounce" />
        </div>
        <h2 className="font-orbitron text-4xl font-bold mb-2 text-indigo-700">404: Block Not Found!</h2>
        <p className="font-roboto text-lg text-gray-500 mb-4 max-w-md mx-auto">
          Oops! The piece you're looking for doesn't fit here. Try dropping by our home base.
        </p>
        <Button id="back-to-home-btn" onClick={() => navigate('/')} className="mt-2 px-6 py-3 font-orbitron text-base">
          Return Home
        </Button>
      </motion.div>
    </div>
  )
}
