import { db, sql } from '@/lib/kysely'

export async function seed() {
  const createTable = await db.schema
    .createTable('users')
    .ifNotExists()
    .addColumn('id', 'serial', (cb) => cb.primaryKey())
    // .addColumn('year', 'integer', (cb) => cb.notNull())
    // .addColumn('age', 'integer', (cb) => cb.notNull())
    .addColumn('gender', 'varchar(255)', (cb) => cb.notNull())
    .addColumn('country', 'varchar(255)', (cb) => cb.notNull())
    .addColumn('mental_health', 'varchar(255)', (cb) => cb.notNull())
    .addColumn('createdAt', sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute()
  console.log(`Created "users" table`)
  const addUsers = await db
    .insertInto('users')
    .values([
      {
        // year: 2019,
        // age: 25,
        gender: 'female',
        country: 'Russia', 
        mental_health: 'Yes',
      },
      {
        // year: 2020,
        // age: 26,
        gender: 'male',
        country: 'Canada', 
        mental_health: 'Yes',
      },
      {
        // year: 2021,
        // age: 27,
        gender: 'female',
        country: 'India	', 
        mental_health: 'No',
      },
    ])
    .execute()
  console.log('Seeded database with 3 users')
  return {
    createTable,
    addUsers,
  }
}
