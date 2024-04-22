import { CalendarIcon } from '@heroicons/react/24/outline';
import { db } from '@/lib/kysely'

import { lusitana } from '@/app/ui/fonts';
import { fetchAgeResults } from '@/lib/data';
import { seed } from '@/lib/seed'

export default async function AgeChart() {
    let agebias
    let startTime = Date.now()

    try {
        agebias = await db.selectFrom('agebias').selectAll().execute()
      } catch (e: any) {
        if (e.message === `relation "genderbias" does not exist`) {
          console.log(
            'Table does not exist, creating and seeding it with dummy data now...'
          )
          // Table is not created yet
          await seed()
          startTime = Date.now()
          agebias = await db.selectFrom('agebias').selectAll().execute()
        } else {
          throw e
        }
      }

    const ageResults = await fetchAgeResults();
    const chartHeight = 350;
    const yAxisLabels = [1, 0.75, 5, 0.25, 0];
    const topLabel = 1;
  
    if (!ageResults || ageResults.length === 0) {
      return <p className="mt-4 text-gray-400">No data available.</p>;
    }
  
    return (
      <div className="w-full md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Age Statistical Parity Difference
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
  
            {ageResults.map((age) => (
              <div key={age.metrics} className="flex flex-col items-center gap-2">
                {/* bars */}
                <div
                  className="w-full rounded-md bg-blue-300"
                  style={{
                    height: `${(chartHeight / topLabel) * age.bias}px`,
                  }}
                ></div>
                {/* x-axis */}
                <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                  {age.metrics}
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
  