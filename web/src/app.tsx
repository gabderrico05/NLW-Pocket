import { Plus } from 'lucide-react'

import { Button } from './components/ui/ui/button'
import { Dialog, DialogTrigger } from './components/ui/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
// import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
