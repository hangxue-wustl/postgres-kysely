import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import SurveyChart from '@/components/survey-chart';

import ExpandingArrow from '@/components/expanding-arrow'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Link
        href="/survey"
        className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        <p>Take your mental health survey here!</p>
        <ExpandingArrow />
      </Link>
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-7xl">
        Mental Health Trend in Tech Community <br /> 2019-2023
      </h1>
      <Suspense fallback={<TablePlaceholder />}>
        <SurveyChart />
      </Suspense>
      <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
        <Link
          href="/dashboard"
          className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
          >
          <p>Click here for more detailed analysis of the survey results!</p>
          <ExpandingArrow />
        </Link>
        
      </div>

      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link href="https://vercel.com">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/vercel/examples/tree/main/storage/postgres-kysely"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Source</p>
        </Link>
      </div>
      
      <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
        <Link
          href="https://osmhhelp.org/research.html"
          className="font-medium hover:text-black transition-colors"
        >
          OSMI Mental Health in Tech Survey
        </Link>{' '} 
        <br /> 
        <Link
          href="https://vercel.com/postgres"
          className="font-medium hover:text-black transition-colors"
        >
          Vercel Postgres
        </Link>{' '}
         with{' '}
        <Link
          href="https://kysely.dev/"
          className="font-medium hover:text-black transition-colors"
        >
          Kysely
        </Link>{' '}
        as the ORM. <br /> Built with{' '}
        <Link
          href="https://nextjs.org/docs"
          className="font-medium hover:text-black transition-colors"
        >
          Next.js App Router
        </Link>
        .
      </p>
    </main>
  )
}