import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import GenderChart from '@/components/gender-chart';


export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'


export default function Page() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Gender bias analysis</h2>
      <p>
        Male(privileged): 200 out of 517 answered currently does not have a mental health disorder
      </p>
      <p>
        Female(unprivileged): 65 out of 234 answered currently does not have a mental health disorder
      </p>
      <br />
      <p>
        Statistical Parity Difference (SPD) = -0.128
      </p>
      <br />
      <p>
        This negative value indicates a small bias against the unprivileged (female).
      </p>
      <br />
      <p>
        Conclusion: Females suffer more often from mental health disorder. 
      </p>
      <br />
      <Suspense fallback={<TablePlaceholder />}>
        <GenderChart />
      </Suspense>
    </div>
)

}
