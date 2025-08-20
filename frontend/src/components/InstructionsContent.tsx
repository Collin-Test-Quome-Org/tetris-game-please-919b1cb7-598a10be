import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Info, Keyboard, Lightbulb, Move3D } from 'lucide-react'
import { motion } from 'framer-motion'

export function InstructionsContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto px-4 py-10"
    >
      <Card className="mb-8 shadow-xl border-2 border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary text-2xl font-orbitron">
            <Info className="inline mr-2 text-secondary" /> How to Play Tetris
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg font-roboto">
          <span>
            Tetris is a fast-paced puzzle game where you maneuver falling blocks (tetrominoes) to complete horizontal lines. The more lines you complete at once, the higher your score!
          </span>
        </CardContent>
      </Card>
      <Tabs defaultValue="rules" className="w-full">
        <TabsList className="mb-4 flex flex-wrap justify-center">
          <TabsTrigger value="rules" className="flex gap-1 items-center"><Info size={18}/> Rules</TabsTrigger>
          <TabsTrigger value="controls" className="flex gap-1 items-center"><Keyboard size={18}/> Controls</TabsTrigger>
          <TabsTrigger value="tips" className="flex gap-1 items-center"><Lightbulb size={18}/> Tips</TabsTrigger>
        </TabsList>
        <TabsContent value="rules">
          <Card className="bg-muted/90">
            <CardHeader>
              <CardTitle className="font-orbitron text-base flex items-center gap-2"><Info size={20}/>Game Rules & Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-1 text-base font-roboto">
                <li>Tetrominoes fall from the top of the board one at a time.</li>
                <li>Move, rotate, and drop tetrominoes to fit them into empty spaces.</li>
                <li>When a horizontal line is fully filled with blocks, it clears and you earn points.</li>
                <li>Clearing multiple lines at once gives a higher score! (4 lines = Tetris!)</li>
                <li>The game ends if the stack of blocks reaches the top.</li>
                <li>Level increases every 10 lines, making tetrominoes fall faster.</li>
              </ul>
              <div className="mt-4">
                <span className="block font-semibold text-primary">Scoring:</span>
                <ul className="list-disc ml-6">
                  <li>Single line: 100 points</li>
                  <li>Double: 300 points</li>
                  <li>Triple: 500 points</li>
                  <li>Tetris (4 lines): 800 points</li>
                </ul>
                <span className="block mt-2 text-muted-foreground">(Bonuses may apply at higher levels!)</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="controls">
          <Card className="bg-muted/90">
            <CardHeader>
              <CardTitle className="font-orbitron text-base flex items-center gap-2"><Keyboard size={20}/> Controls Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <span className="font-semibold text-primary">Keyboard Controls:</span>
                  <ul className="list-none ml-0 mt-2 font-roboto">
                    <li><span className="inline-block min-w-[100px] font-semibold">⬅️ / A</span> Move Left</li>
                    <li><span className="inline-block min-w-[100px] font-semibold">➡️ / D</span> Move Right</li>
                    <li><span className="inline-block min-w-[100px] font-semibold">⬆️ / W / X</span> Rotate</li>
                    <li><span className="inline-block min-w-[100px] font-semibold">⬇️ / S</span> Soft Drop</li>
                    <li><span className="inline-block min-w-[100px] font-semibold">Space</span> Hard Drop</li>
                    <li><span className="inline-block min-w-[100px] font-semibold">P</span> Pause/Resume</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-primary">Touch Controls:</span>
                  <ul className="list-none ml-0 mt-2 font-roboto">
                    <li>Tap: Rotate</li>
                    <li>Swipe left/right: Move</li>
                    <li>Swipe down: Soft Drop</li>
                    <li>Double tap: Hard Drop</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tips">
          <Card className="bg-muted/90">
            <CardHeader>
              <CardTitle className="font-orbitron text-base flex items-center gap-2"><Lightbulb size={20}/> Tips & Tricks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 font-roboto">
                <li>Keep the stack flat—avoid tall towers!</li>
                <li>Save the long (I) tetromino for a Tetris (clearing 4 lines at once).</li>
                <li>Plan ahead: preview upcoming tetrominoes and make space.</li>
                <li>Use soft drop to position pieces quickly, but save hard drop for when you're sure.</li>
                <li>If things get tough, pause and regroup—it's all about rhythm and flow.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="mt-8 flex justify-center">
        <Button id="get-started-btn" asChild>
          <a href="/play">Start Playing!</a>
        </Button>
      </div>
    </motion.div>
  )
}
