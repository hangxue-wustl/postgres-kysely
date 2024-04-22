import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

interface UserTable {
  metrics: string
  bias: number
}

interface surveyTable {
  // Columns that are generated by the database should be marked
  // using the `Generated` type. This way they are automatically
  // made optional in inserts and updates.
  id: Generated<number>
  year: number
  age: number
  gender: string
  country: string
  mental_health: string
  createdAt: ColumnType<Date, string | undefined, never>
}

export interface Database {
  genderbias: UserTable
  survey1: surveyTable
  racebias: UserTable
  agebias: UserTable
  // surveyresults: SurveyResultsTable
}

export const db = createKysely<Database>()
export { sql } from 'kysely'
