import Image from 'next/image'
import Link from 'next/link'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import { Suspense } from 'react'
import AgeChart from '@/components/age-chart';

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'
//"retry"
export default function Page() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Age bias analysis</h2>
      <p>
        Young(younger than 35, privileged): 147 out of 455 answered currently does not have a mental health disorder
      </p>
      <p>
        Old(older than 35, unprivileged): 139 out of 378 answered currently does not have a mental health disorder
      </p>
      <br />
      <p>
        Statistical Parity Difference (SPD) = 0.11
      </p>
      <br />
      <p>
        This positive value indicates a small bias toward the unprivileged group(old). Young people suffer more often from mental health disorder. 
      </p>
      <br />
      <Suspense fallback={<TablePlaceholder />}>
        <AgeChart />
      </Suspense>
    </div>
)

}
