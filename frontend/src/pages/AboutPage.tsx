import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const contributors = [
  { name: 'Alex Hyperblock', role: 'Lead Game Architect', icon: <Users className="w-5 h-5 mr-2 text-primary" /> },
  { name: 'Jamie Loops', role: 'Frontend Dynamo', icon: <Users className="w-5 h-5 mr-2 text-primary" /> },
  { name: 'Sam Scorestorm', role: 'Pixel Wrangler', icon: <Users className="w-5 h-5 mr-2 text-primary" /> }
]

export function AboutPage() {
  return (
    <motion.section
      className="max-w-2xl mx-auto py-12 px-4 lg:px-0 text-center"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <div className="flex justify-center mb-6">
        <img src="/branding/assets/logo-1.png" className="w-20 h-20" />
      </div>
      <h1 className="font-orbitron font-bold text-3xl md:text-4xl mb-2 tracking-tight text-primary">About BlockBlitz</h1>
      <p className="text-lg text-muted-foreground mb-8 mx-auto max-w-lg">
        Welcome to BlockBlitz — where puzzle passion gets pixel-perfect! We believe in stacking fun, celebrating high scores,
        and making every line clear a victory dance. Built by arcade dreamers for puzzle champions, BlockBlitz is your digital playground for the timeless Tetris experience.
      </p>
      <motion.div
        className="mb-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
      >
        <Card className="bg-secondary/20 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="font-orbitron flex items-center justify-center gap-2 text-xl text-primary">
              <Users className="w-6 h-6 text-primary" /> Contributors
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {contributors.map((person, i) => (
              <div key={person.name} className="flex items-center justify-center">
                {person.icon}
                <span className="font-medium text-base mr-2">{person.name}</span>
                <span className="text-muted-foreground text-sm">{person.role}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
      <div className="flex flex-col items-center gap-5">
        <a
          href="https://github.com/arcade-heroes/blockblitz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button id="about-github-link" variant="outline" className="flex items-center gap-2 px-6 text-base">
            <Github className="w-5 h-5" /> View on GitHub
          </Button>
        </a>
        <Link to="/" tabIndex={0}>
          <Button id="about-home-link" variant="secondary" className="px-6 text-base">
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="mt-10 text-xs text-muted-foreground">
        BlockBlitz is inspired by the original Tetris® game by Alexey Pajitnov. This project is for fun and learning — all blocky joy, no copyright infringement intended!
      </div>
    </motion.section>
  )
}
