import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';


// export async function fetchSurveyResult() {
//   noStore();
//   try {
//     const queries = [];
//     const years = [2019, 2020, 2021, 2022, 2023]; // Adjust the years based on your data
//     years.forEach(year => {
//       queries.push(sql`SELECT COUNT(*) FROM survey1 WHERE year = ${year}`);
//     });

//     const data = await Promise.all(queries);
//     const totals = {};
//     data.forEach((result, index) => {
//       totals[years[index]] = Number(result.rows[0].count ?? '0');
//     });

//     return totals;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch survey data.');
//   }
// }