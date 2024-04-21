import { db, sql } from '@/lib/kysely'

export async function seed() {
  


  // // Create the surveyresults table if it doesn't exist
  // const createSurveyResultsTable = await db.schema
  //   .createTable('surveyresults')
  //   .ifNotExists()
  //   .addColumn('year', 'integer', (cb) => cb.notNull())
  //   .addColumn('pyes', 'real', (cb) => cb.notNull())
  //   // Add other columns as needed
  //   .execute();
  // console.log(`Created "surveyresults" table`);

  // // Seed the surveyresults table with data
  // const addSurveyResultsData = await db
  //   .insertInto('surveyresults')
  //   .values([
  //     {
  //       year: 2019,
  //       pyes: 70.45,
  //       // Add other columns as needed
  //     },
  //     {
  //       year: 2020,
  //       pyes: 67.78,
  //       // Add other columns as needed
  //     },
  //     {
  //       year: 2021,
  //       pyes: 61.83,
  //       // Add other columns as needed
  //     },
  //     {
  //       year: 2022,
  //       pyes: 54.88
  //       // Add other columns as needed
  //     },
  //     {
  //       year: 2023,
  //       pyes: 100,
  //       // Add other columns as needed
  //     },
  //     // Add more data as needed
  //   ])
  //   .execute();
  // console.log('Seeded "surveyresults" table with data');

//repeat

  const createTable = await db.schema
    .createTable('genderbias')
    .ifNotExists()
    .addColumn('metrics', 'varchar(255)', (cb) => cb.primaryKey())
    .addColumn('bias', 'real', (cb) => cb.notNull())
    .execute()
  console.log(`Created "genderbias" table`)

  const addUsers = await db
    .insertInto('genderbias')
    .values([
      {
        metrics: 'SDP',
        bias: -0.127,
      },

    ])
    .execute()
  console.log('Seeded database with SDP')
  // const createsurveyTable = await db.schema
  //   .createTable('survey1')
  //   .ifNotExists()
  //   .addColumn('id', 'serial', (cb) => cb.primaryKey())
  //   .addColumn('year', 'integer', (cb) => cb.notNull())
  //   .addColumn('age', 'integer', (cb) => cb.notNull())
  //   .addColumn('gender', 'varchar(255)', (cb) => cb.notNull())
  //   .addColumn('country', 'varchar(255)', (cb) => cb.notNull())
  //   .addColumn('mental_health', 'varchar(255)', (cb) => cb.notNull())
  //   .addColumn('createdAt', sql`timestamp with time zone`, (cb) =>
  //     cb.defaultTo(sql`current_timestamp`)
  //   )
  //   .execute()
  // console.log(`Created "survey1" table`)
  // const addsurveyUsers = await db
  //   .insertInto('survey1')
  //   .values([
  //     {
  //       year: 2019,
  //       age: 25,
  //       gender: 'female',
  //       country: 'India',
  //       mental_health: 'No',
  //     },
  //     {
  //       year: 2020,
  //       age: 26,
  //       gender: 'male',
  //       country: 'USA',
  //       mental_health: 'Yes',
  //     },
  //     {
  //       year: 2021,
  //       age: 27,
  //       gender: 'female',
  //       country: 'Canada',
  //       mental_health: 'No',
  //     },
  //   ])
  //   .execute()
  // console.log('Seeded database with 3 users')

//"retry"
  return {
    createTable,
    addUsers,
    // createsurveyTable,
    // addsurveyUsers,

  };
}

