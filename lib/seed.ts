import { db, sql } from '@/lib/kysely'

export async function seed() {
  // Create the surveyresults table if it doesn't exist
  const createSurveyResultsTable = await db.schema
    .createTable('surveyresults')
    .ifNotExists()
    .addColumn('year', 'integer', (cb) => cb.notNull())
    .addColumn('pyes', 'real', (cb) => cb.notNull())
    // Add other columns as needed
    .execute();
  console.log(`Created "surveyresults" table`);

  // Seed the surveyresults table with data
  const addSurveyResultsData = await db
    .insertInto('surveyresults')
    .values([
      {
        year: 2019,
        pyes: 70.45,
        // Add other columns as needed
      },
      {
        year: 2020,
        pyes: 67.78,
        // Add other columns as needed
      },
      {
        year: 2021,
        pyes: 61.83,
        // Add other columns as needed
      },
      {
        year: 2022,
        pyes: 54.88
        // Add other columns as needed
      },
      {
        year: 2023,
        pyes: 100,
        // Add other columns as needed
      },
      // Add more data as needed
    ])
    .execute();
  console.log('Seeded "surveyresults" table with data');

  // const createTable = await db.schema
  //   .createTable('genderbias')
  //   .ifNotExists()
  //   .addColumn('metrics', 'varchar(255)', (cb) => cb.primaryKey())
  //   .addColumn('bias', 'real', (cb) => cb.notNull())
  //   .execute()
  // console.log(`Created "genderbias" table`)

  // const addUsers = await db
  //   .insertInto('genderbias')
  //   .values([
  //     {
  //       metrics: 'SDP',
  //       bias: -0.127,
  //     },

  //   ])
  //   .execute()
  // console.log('Seeded database with SDP')

  const createTable = await db.schema
  .createTable('agebias')
  .ifNotExists()
  .addColumn('metrics', 'varchar(255)', (cb) => cb.primaryKey())
  .addColumn('bias', 'real', (cb) => cb.notNull())
  .execute()
  console.log(`Created "agebias" table`)

  const addUsers = await db
    .insertInto('agebias')
    .values([
      {
        metrics: 'SDP',
        bias: 0.11,
      },

    ])
    .execute()
  console.log('Seeded database with SDP')

  const createRaceTable = await db.schema
  .createTable('racebias')
  .ifNotExists()
  .addColumn('metrics', 'varchar(255)', (cb) => cb.primaryKey())
  .addColumn('bias', 'real', (cb) => cb.notNull())
  .execute()
  console.log(`Created "racebias" table`)

  const addRaceUsers = await db
    .insertInto('racebias')
    .values([
      {
        metrics: 'SDP',
        bias: 0.21,
      },

    ])
    .execute()
  console.log('Seeded database with SDP')


//"retry"
  return {
    createTable,
    addUsers,
    createRaceTable, 
    addRaceUsers,
    createSurveyResultsTable,
    addSurveyResultsData,
    // createsurveyTable,
    // addsurveyUsers,
  };
}

