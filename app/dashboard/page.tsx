import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Fairness metrics</h2>
      <p>
        Fairness metrics serve to identify bias within data or models, where bias denotes favoritism towards one group over another, either implicitly or explicitly. Detecting bias allows for the potential mitigation of unfairness.
      </p>
      <br />
      <p>
        Statistical Parity Difference (SPD) metric is employed here.
      </p>
      <br />
      <p>
        SPD quantifies the variance in favorable outcomes between the majority and protected classes.
      </p>
      <p>
        A fair assessment of SPD is indicated by a value of 0.
      </p>
      <br />
      <p>
        Click the category (Age, Gender and Race) in the side bar for bias analysis.
      </p>
    </div>
)
}
