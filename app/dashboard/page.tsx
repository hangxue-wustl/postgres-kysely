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
        Two bias metrics, Statistical Parity Difference (SPD) and Disparate Impact (DI), are employed here.
      </p>
      <p>
        Statistical Parity Difference (SPD) quantifies the variance in favorable outcomes between the majority and protected classes. A fair assessment is indicated by a value of 0.
      </p>
      <br />
      <p>
        Disparate Impact (DI) evaluates the proportion of individuals from two distinct groups— a majority and a minority— who receive favorable outcomes. A fair assessment is indicated by a value of 1.
      </p>
    </div>
)
}
