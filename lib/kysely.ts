import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

// interface UserTable {
//   // Columns that are generated by the database should be marked
//   // using the `Generated` type. This way they are automatically
//   // made optional in inserts and updates.
//   id: Generated<number>
//   year: number
//   age: number
//   gender: string
//   country: string
//   mental_health: string

//   // You can specify a different type for each operation (select, insert and
//   // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
//   // wrapper. Here we define a column `createdAt` that is selected as
//   // a `Date`, can optionally be provided as a `string` in inserts and
//   // can never be updated:
//   createdAt: ColumnType<Date, string | undefined, never>
// }

interface UserTable {
  metrics: string
  SDP: number
  bias: number
}
interface surveyResultTable {
  year: number
  pyes: number
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


  // You can specify a different type for each operation (select, insert and
  // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
  // wrapper. Here we define a column `createdAt` that is selected as
  // a `Date`, can optionally be provided as a `string` in inserts and
  // can never be updated:
}

export interface Database {
  genderbias: UserTable
  survey1: surveyTable
  racebias: UserTable
  agebias: UserTable
  surveyresults: surveyResultTable
  // surveyresults: SurveyResultsTable
}

export const db = createKysely<Database>()
export { sql } from 'kysely'
