import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  const { cohortID } = router.query;

  return (
    <h1>
      Cohort {cohortID}
    </h1>
  )
}

export default Page;