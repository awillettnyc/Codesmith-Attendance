import React from 'react';
import Link from 'next/link';

const Page = () => (
  <div>
    <h1>Cohort Index  Path</h1>
// will have variable instead of 1 for as<br/><br/>
    <Link href="/cohorts/[cohortID]" as={`/cohorts/1`}>
      <a>
        Cohort 1 
      </a>
    </Link>
  </div>
)

export default Page;