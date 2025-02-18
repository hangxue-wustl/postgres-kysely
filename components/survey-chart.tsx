import { generateYAxis } from '@/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchsurveyResults } from '@/lib/data';
import { db } from '@/lib/kysely'
import { seed } from '@/lib/seed'

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function SurveyChart() {
  let surveyresults
  let startTime = Date.now()

  try {
    surveyresults = await db.selectFrom('surveyresults').selectAll().execute()
    } catch (e: any) {
      if (e.message === `relation "surveyresults" does not exist`) {
        console.log(
          'Table does not exist, creating and seeding it with dummy data now...'
        )
        // Table is not created yet
        await seed()
        startTime = Date.now()
        surveyresults = await db.selectFrom('surveyresults').selectAll().execute()
      } else {
        throw e
      }
    }
  
  const surveyResults = await fetchsurveyResults();

  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(surveyResults);

  if (!surveyResults || surveyResults.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    // <div className="w-full md:col-span-4">
    <div className="w-full md:w-auto md:col-span-4 mx-auto">
      
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Survey Results: Percentage of Users Reporting Mental Health Disorders
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4">
          {/* y-axis */}
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {surveyResults.map((survey) => (
            <div key={survey.year} className="flex flex-col items-center gap-2">
              {/* bars */}
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * survey.pyes}px`,
                }}
              ></div>
              {/* x-axis */}
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {survey.year}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 5 years 2019-2023</h3>
        </div>
      </div>
    </div>
  );
}