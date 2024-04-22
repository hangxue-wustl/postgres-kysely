import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import RaceChart from '@/components/race-chart';

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'


export default function Page() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Race bias analysis</h2>
      <p>
        White(privileged): 67 out of 310 answered currently does not have a mental health disorder
      </p>
      <p>
        Non-white(unprivileged): 30 out of 73 answered currently does not have a mental health disorder
      </p>
      <br />
      <p>
        Statistical Parity Difference (SPD) = 0,21
      </p>
      <br />
      <p>
        This positve value indicates a small bias for the unprivileged (non-white). White people suffer more often from mental health disorder. 
      </p>
      <Suspense fallback={<TablePlaceholder />}>
        <RaceChart />
      </Suspense>
    </div>
)

}
