import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-gray-50 to-indigo-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl border-2 border-indigo-200">
          <CardContent className="flex flex-col items-center py-10">
            <img src="/branding/assets/logo-2.png" className="w-20 h-20 mb-6" />
            <h1 className="font-orbitron font-bold text-4xl text-indigo-700 mb-2 tracking-wide">404</h1>
            <p className="font-roboto text-lg text-gray-700 mb-4 text-center">
              Uh-oh! You just landed on a void where Tetrominoes fear to fall.<br />
              <span className="text-indigo-500 font-semibold">Page Not Found.</span>
            </p>
            <Button asChild id="notfound-back-home" className="mt-3 px-6 py-2 text-lg font-orbitron">
              <Link to="/">
                <ArrowLeft className="inline-block mr-2 w-5 h-5" />Back to Home Grid
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
