import { sql } from '@vercel/postgres';
import {
    surveyUser,
} from './definitions';

export async function fetchsurveyResults() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<surveyUser>`SELECT year, age FROM survey1`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function writeSurveyResults(data: { age: any; gender: any; country: any; mentalHealthIssues: any; }) {
  try {
    // age,
    // gender,
    // country,
    // mentalHealthIssues,
    const insertResult = await sql`
      INSERT INTO survey1 (age, gender, country, mentalHealthIssues)
      VALUES (${data.age}, ${data.gender}, ${data.country}, ${data.mentalHealthIssues})
    `;

    console.log('Survey results written into the database successfully.');

    return insertResult.rows; // Return inserted rows if needed
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed');
  }
}