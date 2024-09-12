import { db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  await db.insert(goals).values([
    { title: 'Ir para Academia', desiredWeeklyFrequency: 5 },
    { title: 'Estudar Javascript', desiredWeeklyFrequency: 4 },
    { title: 'Meditar', desiredWeeklyFrequency: 1 },
  ])
}

seed()
